// src/pages/api/order-status.js
// GET /api/order-status?order_code=ORD-xxxx

export const prerender = false;

export async function GET({ url }) {
  const orderCode = url.searchParams.get('order_code');
  if (!orderCode) {
    return new Response(JSON.stringify({ error: 'order_code wajib diisi.' }), { status: 400 });
  }

  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  const res = await fetch(
    `${supabaseUrl}/rest/v1/pelanggan?order_code=eq.${encodeURIComponent(orderCode)}&select=payment_status,status,total,nama`,
    { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
  );
  const orders = await res.json();
  const order = orders?.[0];

  if (!order) {
    return new Response(JSON.stringify({ error: 'Order tidak ditemukan.' }), { status: 404 });
  }

  return new Response(JSON.stringify(order), { status: 200 });
}
