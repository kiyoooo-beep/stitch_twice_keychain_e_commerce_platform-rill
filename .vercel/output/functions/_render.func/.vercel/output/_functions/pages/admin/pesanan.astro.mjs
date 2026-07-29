import { c as createComponent, b as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_BUxigWNf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C2RNcr4p.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Pesanan = createComponent(async ($$result, $$props, $$slots) => {
  const supabaseUrl = "https://ennesvjjsyinwqthhqtu.supabase.co";
  const supabaseKey = "sb_publishable_WHVfGgvnxzYIlqPOybW62w_1w-DFFW8";
  const res = await fetch(
    `${supabaseUrl}/rest/v1/pelanggan?payment_status=eq.unpaid&order=created_at.desc`,
    { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
  );
  const pendingOrders = res.ok ? await res.json() : [];
  return renderTemplate(_a || (_a = __template(["", " <script>\n  document.querySelectorAll('.confirm-btn').forEach((btn) => {\n    btn.addEventListener('click', async () => {\n      const orderCode = btn.getAttribute('data-order-code');\n      if (!confirm(`Yakin sudah menerima pembayaran untuk order ${orderCode}?`)) return;\n\n      btn.disabled = true;\n      btn.textContent = 'Memproses...';\n\n      try {\n        const res = await fetch('/api/confirm-payment', {\n          method: 'POST',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify({ order_code: orderCode }),\n        });\n        const data = await res.json();\n\n        if (!res.ok) {\n          alert(data.error || 'Gagal konfirmasi.');\n          btn.disabled = false;\n          btn.textContent = 'Konfirmasi Pembayaran';\n          return;\n        }\n\n        if (data.warning) alert(data.warning);\n        btn.closest('[data-order-code]').remove();\n      } catch (err) {\n        alert('Terjadi kesalahan: ' + err.message);\n        btn.disabled = false;\n        btn.textContent = 'Konfirmasi Pembayaran';\n      }\n    });\n  });\n</script>"], ["", " <script>\n  document.querySelectorAll('.confirm-btn').forEach((btn) => {\n    btn.addEventListener('click', async () => {\n      const orderCode = btn.getAttribute('data-order-code');\n      if (!confirm(\\`Yakin sudah menerima pembayaran untuk order \\${orderCode}?\\`)) return;\n\n      btn.disabled = true;\n      btn.textContent = 'Memproses...';\n\n      try {\n        const res = await fetch('/api/confirm-payment', {\n          method: 'POST',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify({ order_code: orderCode }),\n        });\n        const data = await res.json();\n\n        if (!res.ok) {\n          alert(data.error || 'Gagal konfirmasi.');\n          btn.disabled = false;\n          btn.textContent = 'Konfirmasi Pembayaran';\n          return;\n        }\n\n        if (data.warning) alert(data.warning);\n        btn.closest('[data-order-code]').remove();\n      } catch (err) {\n        alert('Terjadi kesalahan: ' + err.message);\n        btn.disabled = false;\n        btn.textContent = 'Konfirmasi Pembayaran';\n      }\n    });\n  });\n</script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Admin - Konfirmasi Pesanan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto py-8 px-6"> <h1 class="text-2xl font-bold mb-2">Pesanan Menunggu Pembayaran</h1> <p class="text-sm text-on-surface-variant mb-6">
Cek mutasi di aplikasi e-wallet / mobile banking kamu, cocokkan nominal & waktu dengan daftar
      di bawah, lalu klik "Konfirmasi Pembayaran".
</p> ${pendingOrders.length === 0 && renderTemplate`<p class="text-on-surface-variant">Tidak ada pesanan yang menunggu pembayaran saat ini.</p>`} <div class="space-y-4"> ${pendingOrders.map((order) => renderTemplate`<div class="border rounded-xl p-4 bg-surface-container-low"${addAttribute(order.order_code, "data-order-code")}> <div class="mb-2"> <p class="font-bold">${order.nama}</p> <p class="text-sm text-on-surface-variant">${order.order_code} · ${order.email}</p> <p class="text-sm">Total: <b>Rp${Number(order.total).toLocaleString("id-ID")}</b></p> <p class="text-xs text-on-surface-variant"> ${new Date(order.created_at).toLocaleString("id-ID")} </p> </div> <ul class="text-sm text-on-surface-variant mb-3"> ${(order.pesanan || []).map((item) => renderTemplate`<li>${item.name} x${item.quantity || 1}</li>`)} </ul> <button class="confirm-btn bg-primary text-white px-4 py-2 rounded-full text-sm font-bold"${addAttribute(order.order_code, "data-order-code")}>
Konfirmasi Pembayaran
</button> </div>`)} </div> </div> ` }));
}, "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/admin/pesanan.astro", void 0);
const $$file = "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/admin/pesanan.astro";
const $$url = "/admin/pesanan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pesanan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
