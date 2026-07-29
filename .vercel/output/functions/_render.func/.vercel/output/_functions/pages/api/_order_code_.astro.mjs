import { c as createComponent, b as renderTemplate, g as defineScriptVars, e as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BUxigWNf.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../chunks/PageLayout_BISJRS7c.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$orderCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$orderCode;
  const { order_code } = Astro2.params;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n  const waitingState = document.getElementById('waiting-state');\n  const successState = document.getElementById('success-state');\n\n  async function checkStatus() {\n    try {\n      const res = await fetch(`/api/order-status?order_code=${encodeURIComponent(orderCode)}`);\n      if (!res.ok) return;\n      const data = await res.json();\n\n      if (data.payment_status === 'paid') {\n        waitingState.classList.add('hidden');\n        successState.classList.remove('hidden');\n        clearInterval(pollInterval);\n      }\n    } catch (err) {\n      console.error('Gagal cek status:', err);\n    }\n  }\n\n  checkStatus();\n  const pollInterval = setInterval(checkStatus, 5000);\n})();<\/script>"], ["", " <script>(function(){", "\n  const waitingState = document.getElementById('waiting-state');\n  const successState = document.getElementById('success-state');\n\n  async function checkStatus() {\n    try {\n      const res = await fetch(\\`/api/order-status?order_code=\\${encodeURIComponent(orderCode)}\\`);\n      if (!res.ok) return;\n      const data = await res.json();\n\n      if (data.payment_status === 'paid') {\n        waitingState.classList.add('hidden');\n        successState.classList.remove('hidden');\n        clearInterval(pollInterval);\n      }\n    } catch (err) {\n      console.error('Gagal cek status:', err);\n    }\n  }\n\n  checkStatus();\n  const pollInterval = setInterval(checkStatus, 5000);\n})();<\/script>"])), renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Status Pesanan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-md mx-auto py-10 text-center"> <h1 class="text-2xl font-bold mb-2">Pesanan Kamu</h1> <p class="text-on-surface-variant mb-6">Kode Order: <b>${order_code}</b></p> <div id="waiting-state"> <img src="/qris.jpeg" alt="QRIS Pembayaran" class="w-64 h-64 mx-auto rounded-xl border mb-4"> <p class="text-sm text-on-surface-variant mb-6">
Scan QR di atas menggunakan aplikasi e-wallet / mobile banking kamu.
        Halaman ini akan otomatis update begitu pembayaran kami terima.
</p> <div class="flex items-center justify-center gap-2 text-sm text-on-surface-variant"> <span class="animate-pulse">●</span> Menunggu konfirmasi pembayaran...
</div> </div> <div id="success-state" class="hidden"> <div class="text-5xl mb-4">🎉</div> <h2 class="text-xl font-bold text-primary mb-2">Pembayaran Berhasil!</h2> <p class="text-on-surface-variant">
Terima kasih! Pesanan kamu sedang kami proses. Detail juga sudah kami kirim ke email kamu.
</p> </div> </div> ` }), defineScriptVars({ orderCode: order_code }));
}, "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/api/[order_code].astro", void 0);

const $$file = "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/api/[order_code].astro";
const $$url = "/api/[order_code]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$orderCode,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
