import { c as createComponent, e as renderComponent, b as renderTemplate, d as createAstro, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_BUxigWNf.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BISJRS7c.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const response = await fetch(new URL("/api/about-us", Astro2.url));
  const aboutData = await response.json();
  const storeImg = "1.png";
  const docImages = [
    "/about us 1.jpg",
    "/about us 2.jpg",
    "/about us 3.jpg",
    "/about us 4.jpg",
    "/about us 5.jpg"
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "About Us - TWICE KEYCHAIN", "data-astro-cid-kh7btl4r": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden font-serif" style="font-family: 'Quicksand', sans-serif;" data-astro-cid-kh7btl4r> <section class="bg-[#F46B8D] w-full pt-28 pb-20 px-6 md:px-16 text-white relative overflow-hidden" data-astro-cid-kh7btl4r> <!-- === TOPPING LUCU BACKGROUND (Z-0) === --> <!-- Bintang-bintang --> <div class="absolute top-20 left-[20%] w-6 h-6 sparkle-star z-10 pointer-events-none animate-sparkle-1" data-astro-cid-kh7btl4r></div> <div class="absolute bottom-28 left-[45%] w-4 h-4 sparkle-star z-10 pointer-events-none animate-sparkle-2" data-astro-cid-kh7btl4r></div> <div class="absolute top-32 right-[15%] w-7 h-7 sparkle-star z-10 pointer-events-none animate-sparkle-3" data-astro-cid-kh7btl4r></div> <div class="absolute bottom-16 right-[30%] w-5 h-5 sparkle-star z-10 pointer-events-none animate-sparkle-1" data-astro-cid-kh7btl4r></div> <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-30" data-astro-cid-kh7btl4r> <!-- Area Kiri: Gambar Toko (Single Image Layout) --> <div class="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 relative z-20" data-astro-cid-kh7btl4r> <div class="w-full max-w-md aspect-square bg-[#ffe6ed] rounded-[40px] shadow-[12px_12px_0_0_rgba(255,255,255,0.4)] border-4 border-white overflow-hidden transform hover:-translate-y-2 transition-transform duration-500" data-astro-cid-kh7btl4r> <img${addAttribute(storeImg, "src")} alt="TWICE KEYCHAIN Store" class="w-full h-full object-cover" data-astro-cid-kh7btl4r> </div> </div> <!-- Area Kanan: Teks --> <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left" data-astro-cid-kh7btl4r> <div class="bg-white/20 border-2 border-white text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest flex items-center gap-2 mb-8 backdrop-blur-sm shadow-sm" data-astro-cid-kh7btl4r> <span data-astro-cid-kh7btl4r>♡</span> ABOUT ${aboutData.storeName} <span data-astro-cid-kh7btl4r>♡</span> </div> <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight" data-astro-cid-kh7btl4r>
I create worlds where <br data-astro-cid-kh7btl4r> <span class="italic font-light text-[#ffe6ed]" data-astro-cid-kh7btl4r>soft, pretty things</span> <br data-astro-cid-kh7btl4r>
feel powerful.
</h1> <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-lg" data-astro-cid-kh7btl4r>
Selamat datang di dunia TWICE KEYCHAIN, tempat di mana <i data-astro-cid-kh7btl4r>'Miracle of Charm'</i> benar-benar nyata! ♡ Kami adalah brand aksesoris <i data-astro-cid-kh7btl4r>handmade</i> lokal yang menyulap akrilik dan clay menjadi koleksi gantungan kunci yang unik dan estetis. Setiap detailnya diciptakan dengan ketelitian ekstra untuk menyebarkan keajaiban dan menemani keseharianmu. ✧
</p> <div class="flex flex-wrap gap-4 justify-center md:justify-start text-sm font-bold text-[#F46B8D]" data-astro-cid-kh7btl4r> <span class="bg-white px-4 py-1.5 rounded-md shadow-sm" data-astro-cid-kh7btl4r>✧ Est. 2026</span> <span class="bg-white px-4 py-1.5 rounded-md shadow-sm" data-astro-cid-kh7btl4r>♡ Handmade</span> <span class="bg-white px-4 py-1.5 rounded-md shadow-sm" data-astro-cid-kh7btl4r>❀ CUTTIES</span> </div> </div> </div> </section> <!-- Transisi Renda (Pink ke Krem) --> <div class="lace-divider bg-[#F46B8D]" data-astro-cid-kh7btl4r></div> <!-- SECTION 2: CONTACT / INFO (Background Krem) --> <section class="bg-[#FFFDF5] w-full py-20 px-6 md:px-16 text-[#2F3E46]" data-astro-cid-kh7btl4r> <div class="max-w-7xl mx-auto" data-astro-cid-kh7btl4r> <div class="flex items-center gap-4 mb-12 justify-center md:justify-start" data-astro-cid-kh7btl4r> <span class="text-4xl text-[#F46B8D]" data-astro-cid-kh7btl4r>✧</span> <h2 class="text-4xl md:text-5xl font-bold italic text-[#F46B8D]" data-astro-cid-kh7btl4r>Our Info</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" data-astro-cid-kh7btl4r> <div class="bg-[#F46B8D] text-white p-8 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 shadow-xl border-4 border-[#ffe6ed]" data-astro-cid-kh7btl4r> <h3 class="text-2xl font-bold mb-4 font-serif" data-astro-cid-kh7btl4r>Location & Base</h3> <p class="text-white/90 leading-relaxed text-lg" data-astro-cid-kh7btl4r> ${aboutData.location}. Kami memproduksi dan mengirimkan setiap pesanan dengan penuh cinta dari sini.
</p> </div> <div class="bg-[#F46B8D] text-white p-8 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 shadow-xl border-4 border-[#ffe6ed]" data-astro-cid-kh7btl4r> <h3 class="text-2xl font-bold mb-4 font-serif" data-astro-cid-kh7btl4r>Business Inquiries</h3> <p class="text-white/90 leading-relaxed text-lg mb-4" data-astro-cid-kh7btl4r>
Ada pertanyaan terkait kolaborasi atau pesanan massal? Kirimkan pesan melalui email.
</p> <a${addAttribute(`mailto:${aboutData.contactEmail}`, "href")} class="inline-block bg-white text-[#F46B8D] font-bold px-4 py-2 rounded-full text-sm" data-astro-cid-kh7btl4r> ${aboutData.contactEmail} </a> </div> <div class="bg-[#F46B8D] text-white p-8 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 shadow-xl border-4 border-[#ffe6ed]" data-astro-cid-kh7btl4r> <h3 class="text-2xl font-bold mb-4 font-serif" data-astro-cid-kh7btl4r>Chat with Us</h3> <p class="text-white/90 leading-relaxed text-lg mb-4" data-astro-cid-kh7btl4r>
Butuh bantuan cepat atau custom order? Bestie bisa langsung menghubungi admin kami.
</p> <a${addAttribute(`https://wa.me/${aboutData.whatsapp.replace(/[^0-9]/g, "")}`, "href")} target="_blank" class="inline-block bg-white text-[#F46B8D] font-bold px-4 py-2 rounded-full text-sm" data-astro-cid-kh7btl4r> ${aboutData.whatsapp} </a> </div> </div> </div> </section> <!-- Transisi Renda (Krem ke Pink) --> <div class="lace-divider-pink bg-[#FFFDF5]" data-astro-cid-kh7btl4r></div> <!-- SECTION 3: DOKUMENTASI MEMBER CLASS (Background Pink) --> <section class="bg-[#F46B8D] w-full py-20 px-6 md:px-16 text-white pb-32" data-astro-cid-kh7btl4r> <div class="max-w-7xl mx-auto" data-astro-cid-kh7btl4r> <div class="flex items-center gap-4 mb-12 justify-center md:justify-start" data-astro-cid-kh7btl4r> <span class="text-4xl text-[#FFFDF5]" data-astro-cid-kh7btl4r>✧</span> <h2 class="text-4xl md:text-5xl font-bold italic text-[#FFFDF5]" data-astro-cid-kh7btl4r>Dokumentasi Member Class</h2> </div> <div class="flex flex-wrap justify-center gap-4 md:gap-8" data-astro-cid-kh7btl4r> ${docImages.map((img, idx) => renderTemplate`<div class="bg-white p-2 md:p-3 rounded-[40px] shadow-lg transform transition-transform hover:-translate-y-4 duration-500 w-[160px] md:w-[220px]" data-astro-cid-kh7btl4r> <div class="w-full aspect-[9/16] bg-[#ffe6ed] rounded-[32px] overflow-hidden relative" data-astro-cid-kh7btl4r> <img${addAttribute(img, "src")}${addAttribute(`Member Class Documentation ${idx + 1}`, "alt")} class="w-full h-full object-cover" data-astro-cid-kh7btl4r> <div class="absolute top-4 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-white/50 rounded-full backdrop-blur-md" data-astro-cid-kh7btl4r></div> </div> </div>`)} </div> </div> </section> </div> ` })}`;
}, "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/about.astro", void 0);

const $$file = "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
