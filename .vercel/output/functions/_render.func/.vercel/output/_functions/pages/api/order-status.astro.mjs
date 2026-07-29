export { renderers } from '../../renderers.mjs';

const prerender = false;
async function GET({ url }) {
  const orderCode = url.searchParams.get("order_code");
  if (!orderCode) {
    return new Response(JSON.stringify({ error: "order_code wajib diisi." }), { status: 400 });
  }
  const supabaseUrl = "https://ennesvjjsyinwqthhqtu.supabase.co";
  const supabaseKey = "sb_publishable_WHVfGgvnxzYIlqPOybW62w_1w-DFFW8";
  const res = await fetch(
    `${supabaseUrl}/rest/v1/pelanggan?order_code=eq.${encodeURIComponent(orderCode)}&select=payment_status,status,total,nama`,
    { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
  );
  const orders = await res.json();
  const order = orders?.[0];
  if (!order) {
    return new Response(JSON.stringify({ error: "Order tidak ditemukan." }), { status: 404 });
  }
  return new Response(JSON.stringify(order), { status: 200 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
