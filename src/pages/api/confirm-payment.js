// src/pages/api/confirm-payment.js
import { sendCustomerConfirmation } from 'src/pages/api/resend.js';

export const prerender = false;

export async function POST({ request }) {
  console.log("==================================================");
  console.log("🚨 [API] PINTU /api/confirm-payment BERHASIL DITEMBUS!");
  
  try {
    const body = await request.json();
    console.log("📦 [API] Data yang dikirim dari Frontend:", body);

    const { order_code } = body;
    
    if (!order_code) {
      console.error("❌ [API] GAGAL: order_code kosong dari Frontend!");
      return new Response(JSON.stringify({ error: 'order_code wajib diisi.' }), { status: 400 });
    }

    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

    console.log(`🔍 [API] Mencari order dengan kode: ${order_code} di Supabase...`);
    
    // 1. Cari data order berdasarkan order_code
    const findRes = await fetch(
      `${supabaseUrl}/rest/v1/pelanggan?order_code=eq.${encodeURIComponent(order_code)}&select=*`,
      { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
    );
    
    const orders = await findRes.json();
    const order = orders?.[0];

    if (!order) {
      console.error("❌ [API] GAGAL: Order tidak ditemukan di tabel Supabase!");
      return new Response(JSON.stringify({ error: 'Order tidak ditemukan.' }), { status: 404 });
    }

    console.log("✅ [API] Order ditemukan! Data pelanggan:", { email: order.email, nama: order.nama, total: order.total });
    
    if (order.payment_status === 'paid') {
      console.warn("⚠️ [API] STOP: Order ini sudah lunas sebelumnya.");
      return new Response(JSON.stringify({ error: 'Order ini sudah dikonfirmasi sebelumnya.' }), { status: 400 });
    }

    // 2. Kurangi stok barang (RPC)
    console.log("⚙️ [API] Mulai mengurangi stok barang...");
    const items = order.pesanan || [];
    const gagalStock = [];

    for (const item of items) {
      const rpcRes = await fetch(`${supabaseUrl}/rest/v1/rpc/decrement_stock`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({ product_id_input: item.id, qty: item.quantity || 1 }),
      });
      const success = await rpcRes.json();
      if (!success) gagalStock.push(item.name || item.id);
    }

    // 3. Update status pembayaran menjadi 'paid'
    console.log("🔄 [API] Mengubah status order di Supabase menjadi 'paid'...");
    const updateRes = await fetch(`${supabaseUrl}/rest/v1/pelanggan?order_code=eq.${encodeURIComponent(order_code)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ payment_status: 'paid', status: 'processing' }),
    });

    if (!updateRes.ok) throw new Error('Gagal update status database');
    console.log("✅ [API] Status database berhasil diupdate!");

    // 4. Kirim Email 
    console.log("📧 [API] Memanggil fungsi Resend untuk kirim email...");
    try {
      await sendCustomerConfirmation({
        to: order.email, // Pastikan nama kolom email di database kamu benar-benar 'email'
        nama: order.nama || 'Kak', // Pastikan nama kolom nama di database kamu benar-benar 'nama'
        orderCode: order_code,
        items: items,
        total: order.total,
      });
      console.log('✅ [API] Proses Resend selesai dieksekusi!');
    } catch (emailErr) {
      console.error('❌ [API] Email gagal dikirim dari dalam confirm-payment:', emailErr);
    }

    console.log("🎉 [API] SEMUA PROSES SUKSES, mengirim konfirmasi ke Frontend.");
    console.log("==================================================");
    
    // 5. Kembalikan respons berhasil ke frontend
    return new Response(
      JSON.stringify({
        success: true,
        warning: gagalStock.length ? `Stock tidak cukup untuk: ${gagalStock.join(', ')}` : null,
      }),
      { status: 200 }
    );
    
  } catch (err) {
    console.error('❌ [API] ERROR FATAL:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}