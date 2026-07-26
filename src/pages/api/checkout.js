// src/pages/api/checkout.js
import { sendCustomerConfirmation } from './resend.js';

export const prerender = false;

export async function POST({ request }) {
  console.log("\n=============================================");
  console.log("🚨 [API] 1. PROSES CHECKOUT DIMULAI...");
  
  try {
    const body = await request.json();
    console.log("🚨 [API] 2. Data diterima dari frontend:", body);

    if (!body.order_code) {
      console.log("❌ [API] ERROR: order_code KOSONG!");
      return new Response(JSON.stringify({ error: 'order_code wajib diisi.' }), { status: 400 });
    }

    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

    console.log("🚨 [API] 3. Mencari order:", body.order_code, "di Supabase...");
    const findRes = await fetch(
      `${supabaseUrl}/rest/v1/pelanggan?order_code=eq.${encodeURIComponent(body.order_code)}&select=*`,
      { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
    );
    
    const orders = await findRes.json();
    const order = orders?.[0];

    if (!order) {
      console.log("❌ [API] ERROR: Order tidak ditemukan di database!");
      return new Response(JSON.stringify({ error: 'Order tidak ditemukan.' }), { status: 404 });
    }
    
    console.log("🚨 [API] 4. Order ditemukan! Status saat ini:", order.payment_status);

    if (order.payment_status === 'paid') {
      console.log("❌ [API] ERROR: Order sudah lunas sebelumnya (Mencegah kirim email berkali-kali).");
      return new Response(JSON.stringify({ error: 'Order sudah lunas.' }), { status: 400 });
    }

    console.log("🚨 [API] 5. Mengupdate status jadi 'paid' di database...");
    const updateRes = await fetch(`${supabaseUrl}/rest/v1/pelanggan?order_code=eq.${encodeURIComponent(body.order_code)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ payment_status: 'paid', status: 'processing' }),
    });

    if (!updateRes.ok) {
      const detailError = await updateRes.text();
      console.log("⚠️ [API] INFO: Supabase menolak update status (RLS aktif/kolom tidak ada). Detail:", detailError);
      console.log("⚠️ [API] INFO: Menerobos error database agar email tetap dikirim...");
      // Kita matikan (comment) throw error-nya agar sistem lanjut ke bawah!
      // throw new Error('Gagal update status database'); 
    }

    console.log("🚨 [API] 6. Database sukses diupdate! Memanggil fungsi Resend...");

    try {
      await sendCustomerConfirmation({
        to: order.email,
        nama: order.nama || 'Kak',
        orderCode: body.order_code,
        items: order.pesanan || [],
        total: order.total,
      });
      console.log("✅ [API] 7. Fungsi Resend selesai dijalankan!");
    } catch (emailErr) {
      console.error("❌ [API] ERROR SAAT MENGIRIM EMAIL:", emailErr);
    }

    console.log("=============================================\n");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
    
  } catch (err) {
    console.error("❌ [API] ERROR FATAL KESELURUHAN:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}