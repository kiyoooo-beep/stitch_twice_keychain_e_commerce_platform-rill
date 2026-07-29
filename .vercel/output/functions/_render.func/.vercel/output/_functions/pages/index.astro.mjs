import { c as createComponent, b as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_BUxigWNf.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BISJRS7c.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const trendingProducts = [
    {
      id: 1,
      name: "Red Apple Charm Bag",
      price: "Rp25.000",
      image: "https://ennesvjjsyinwqthhqtu.supabase.co/storage/v1/object/public/product-images/Product%201.jpg",
      badge: "POPULAR"
    },
    {
      id: 2,
      name: "Clay Keychain Custom",
      price: "Rp15.000",
      image: "https://ennesvjjsyinwqthhqtu.supabase.co/storage/v1/object/public/product-images/Product%202.jpg",
      badge: ""
    },
    {
      id: 3,
      name: "Fish Keychain",
      price: "Rp25.000",
      image: "https://ennesvjjsyinwqthhqtu.supabase.co/storage/v1/object/public/product-images/Product%203.jpg",
      badge: ""
    },
    {
      id: 4,
      name: "Miawberry Crystal Keychain",
      price: "Rp25.000",
      image: "https://ennesvjjsyinwqthhqtu.supabase.co/storage/v1/object/public/product-images/Product%204.jpg",
      badge: ""
    },
    {
      id: 5,
      name: "Crownberries crystal Charm",
      price: "Rp30.000",
      image: "https://ennesvjjsyinwqthhqtu.supabase.co/storage/v1/object/public/product-images/Product%205.jpg",
      badge: "BESTIE FAV"
    },
    {
      id: 6,
      name: "Buddy Brownie Series Keychain",
      price: "Rp20.000",
      image: "https://ennesvjjsyinwqthhqtu.supabase.co/storage/v1/object/public/product-images/Product%206.jpg",
      badge: ""
    }
  ];
  const frameStyles = [
    { container: "rounded-t-[80px] rounded-b-2xl border-[#F46B8D] bg-[#FFD1DC] aspect-[3/4]", img: "rounded-t-[72px] rounded-b-xl" },
    { container: "rounded-full border-[#FFB238] bg-[#FFECCC] aspect-[3/4]", img: "rounded-full" },
    { container: "rounded-[40px_10px_40px_10px] border-[#6BC4C4] bg-[#D4F0F0] aspect-[3/4]", img: "rounded-[32px_8px_32px_8px]" },
    { container: "rounded-t-2xl rounded-b-[80px] border-[#86C275] bg-[#E1F3D8] aspect-[3/4]", img: "rounded-t-xl rounded-b-[72px]" },
    { container: "rounded-tl-[70px] rounded-br-[70px] rounded-tr-xl rounded-bl-xl border-[#B39DDB] bg-[#E8EAF6] aspect-[3/4]", img: "rounded-tl-[64px] rounded-br-[64px] rounded-tr-lg rounded-bl-lg" }
  ];
  const reviews = [
    {
      name: "Gholi U",
      text: "Gemas banget! Beliin ini buat kado dan kualitas Claynya besttt!, bentuknya juga rapi banget. \u{1F496}",
      shape: "border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;",
      bg: "bg-[#FFD1DC]",
      border: "border-[#F46B8D]",
      icon: "\u{1F380}"
    },
    {
      name: "Kittendust",
      text: "Super cute! Pengirimannya cepat banget dan packaging-nya aman. Bakal langganan terus buat koleksi di tas. \u2728",
      shape: "border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;",
      bg: "bg-[#E1F3D8]",
      border: "border-[#86C275]",
      icon: "\u{1F337}"
    },
    {
      name: "Sabrina C",
      text: "Warnanya pastel banget persis kayak di foto! Nyesel cuma beli satu, next pasti borong yang seri bentuk hewan. \u{1F338}",
      shape: "border-radius: 70% 30% 40% 60% / 50% 70% 30% 50%;",
      bg: "bg-[#D4F0F0]",
      border: "border-[#6BC4C4]",
      icon: "\u2601\uFE0F"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", " <!-- SCRIPT CART & SLIDER LOGIC --> <script>\n  // Logika Cart\n  const buttons = document.querySelectorAll('[data-add-to-cart]');\n  buttons.forEach((button) => {\n    button.addEventListener('click', () => {\n      const productId = Number(button.getAttribute('data-product-id'));\n      const productName = button.getAttribute('data-product-name') || 'Product';\n      const productPrice = button.getAttribute('data-product-price') || '$0.00';\n      const productImage = button.getAttribute('data-product-image') || '';\n      const productVariant = button.getAttribute('data-product-variant') || '';\n\n      // Asumsi fungsi ini tersedia di window/module kamu\n      if (window.addToCart) {\n         window.addToCart({\n          id: productId,\n          name: productName,\n          price: productPrice,\n          image: productImage,\n          variant: productVariant,\n        });\n      }\n      \n      const originalText = button.innerHTML;\n      button.innerHTML = 'Added! \u{1F6CD}\uFE0F';\n      setTimeout(() => {\n        button.innerHTML = originalText;\n      }, 1000);\n    });\n  });\n\n  // Logika Slider\n  document.addEventListener('DOMContentLoaded', () => {\n    const slider = document.getElementById('product-slider');\n    const btnLeft = document.getElementById('slider-btn-left');\n    const btnRight = document.getElementById('slider-btn-right');\n\n    if (slider && btnLeft && btnRight) {\n      // Besaran scroll: Lebar card (approx 208px) + gap (approx 56px) = 264px\n      const scrollAmount = 264; \n\n      btnLeft.addEventListener('click', () => {\n        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });\n      });\n\n      btnRight.addEventListener('click', () => {\n        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });\n      });\n    }\n  });\n<\/script> "])), renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<div class="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden" data-astro-cid-j7pv25f6> <!-- 1. HERO SECTION PINK --> <section class="relative bg-[#F46B8D] text-white pt-40 pb-28 w-full overflow-hidden -mt-24" data-astro-cid-j7pv25f6> <!-- BUNGA BANYAK DI SISI KIRI --> <div class="absolute -left-8 bottom-[-20px] w-52 h-72 z-0 pointer-events-none transform -rotate-12" data-astro-cid-j7pv25f6> <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" data-astro-cid-j7pv25f6> <path d="M 0 300 Q 80 200 120 100" stroke="#7CB342" stroke-width="8" stroke-linecap="round" data-astro-cid-j7pv25f6></path> <path d="M 60 220 Q 20 180 30 140" stroke="#7CB342" stroke-width="6" stroke-linecap="round" data-astro-cid-j7pv25f6></path> <path d="M 120 150 C 160 120 180 160 120 180 Z" fill="#7CB342" data-astro-cid-j7pv25f6></path> <path d="M 60 220 C 20 200 40 160 80 180 Z" fill="#7CB342" data-astro-cid-j7pv25f6></path> <circle cx="120" cy="80" r="14" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="140" cy="100" r="14" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="130" cy="125" r="14" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="105" cy="120" r="14" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="100" cy="95" r="14" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="120" cy="105" r="10" fill="#FFFDF5" data-astro-cid-j7pv25f6></circle> <circle cx="30" cy="120" r="10" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="45" cy="135" r="10" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="40" cy="155" r="10" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="20" cy="150" r="10" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="15" cy="135" r="10" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> <circle cx="30" cy="140" r="6" fill="#FFFDF5" data-astro-cid-j7pv25f6></circle> </svg> </div> <div class="absolute left-10 bottom-[-40px] w-44 h-60 z-0 pointer-events-none transform rotate-6 opacity-90" data-astro-cid-j7pv25f6> <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" data-astro-cid-j7pv25f6> <path d="M 0 300 Q 60 180 100 80" stroke="#7CB342" stroke-width="7" stroke-linecap="round" data-astro-cid-j7pv25f6></path> <circle cx="100" cy="80" r="14" fill="#FFEB3B" data-astro-cid-j7pv25f6></circle> <circle cx="118" cy="98" r="14" fill="#FFEB3B" data-astro-cid-j7pv25f6></circle> <circle cx="100" cy="115" r="14" fill="#FFEB3B" data-astro-cid-j7pv25f6></circle> <circle cx="82" cy="98" r="14" fill="#FFEB3B" data-astro-cid-j7pv25f6></circle> <circle cx="100" cy="98" r="10" fill="#FFFFFF" data-astro-cid-j7pv25f6></circle> </svg> </div> <!-- BUNGA BANYAK DI SISI KANAN --> <div class="absolute -right-4 bottom-[-10px] w-44 h-64 z-0 pointer-events-none transform rotate-12" data-astro-cid-j7pv25f6> <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" data-astro-cid-j7pv25f6> <path d="M 200 300 Q 120 180 80 80" stroke="#7CB342" stroke-width="8" stroke-linecap="round" data-astro-cid-j7pv25f6></path> <path d="M 120 180 C 80 160 100 120 140 140 Z" fill="#7CB342" data-astro-cid-j7pv25f6></path> <circle cx="80" cy="80" r="14" fill="#FFFFFF" data-astro-cid-j7pv25f6></circle> <circle cx="100" cy="95" r="14" fill="#FFFFFF" data-astro-cid-j7pv25f6></circle> <circle cx="90" cy="120" r="14" fill="#FFFFFF" data-astro-cid-j7pv25f6></circle> <circle cx="65" cy="115" r="14" fill="#FFFFFF" data-astro-cid-j7pv25f6></circle> <circle cx="60" cy="90" r="14" fill="#FFFFFF" data-astro-cid-j7pv25f6></circle> <circle cx="80" cy="100" r="9" fill="#FBC02D" data-astro-cid-j7pv25f6></circle> </svg> </div> <div class="absolute right-16 bottom-[-30px] w-40 h-56 z-0 pointer-events-none transform -rotate-6 opacity-90" data-astro-cid-j7pv25f6> <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" data-astro-cid-j7pv25f6> <path d="M 200 300 Q 100 160 60 60" stroke="#7CB342" stroke-width="7" stroke-linecap="round" data-astro-cid-j7pv25f6></path> <circle cx="60" cy="60" r="12" fill="#FFC107" data-astro-cid-j7pv25f6></circle> <circle cx="78" cy="78" r="12" fill="#FFC107" data-astro-cid-j7pv25f6></circle> <circle cx="60" cy="94" r="12" fill="#FFC107" data-astro-cid-j7pv25f6></circle> <circle cx="42" cy="78" r="12" fill="#FFC107" data-astro-cid-j7pv25f6></circle> <circle cx="60" cy="78" r="8" fill="#FFFFFF" data-astro-cid-j7pv25f6></circle> </svg> </div> <!-- EFEK CAHAYA BINTANG BERSINAR --> <div class="absolute top-28 left-24 w-6 h-6 sparkle-star z-10 pointer-events-none animate-sparkle-1" data-astro-cid-j7pv25f6></div> <div class="absolute top-44 left-14 w-4 h-4 sparkle-star z-10 pointer-events-none animate-sparkle-2" data-astro-cid-j7pv25f6></div> <div class="absolute bottom-20 left-32 w-7 h-7 sparkle-star z-10 pointer-events-none animate-sparkle-3" data-astro-cid-j7pv25f6></div> <div class="absolute top-36 right-28 w-6 h-6 sparkle-star z-10 pointer-events-none animate-sparkle-2" data-astro-cid-j7pv25f6></div> <div class="absolute bottom-28 right-20 w-5 h-5 sparkle-star z-10 pointer-events-none animate-sparkle-1" data-astro-cid-j7pv25f6></div> <!-- BINGKAI OVAL KIRI KANAN --> <div class="hidden xl:block absolute left-[12%] top-1/2 -translate-y-1/2 z-10 pointer-events-none animate-float-left" data-astro-cid-j7pv25f6> <div class="w-32 h-44 rounded-full border-[4px] border-[#B39DDB] bg-[#EDE7F6] p-2.5 shadow-xl flex items-center justify-center overflow-hidden" data-astro-cid-j7pv25f6> <img src="https://ennesvjjsyinwqthhqtu.supabase.co/storage/v1/object/public/product-images/Product%202.jpg" alt="Charm Oval Left" class="w-full h-full object-cover rounded-full" data-astro-cid-j7pv25f6> </div> </div> <div class="hidden xl:block absolute right-[12%] top-1/2 -translate-y-1/2 z-10 pointer-events-none animate-float-right" data-astro-cid-j7pv25f6> <div class="w-32 h-44 rounded-full border-[4px] border-[#B39DDB] bg-[#EDE7F6] p-2.5 shadow-xl flex items-center justify-center overflow-hidden" data-astro-cid-j7pv25f6> <img src="https://ennesvjjsyinwqthhqtu.supabase.co/storage/v1/object/public/product-images/Product%203.jpg" alt="Charm Oval Right" class="w-full h-full object-cover rounded-full" data-astro-cid-j7pv25f6> </div> </div> <!-- Kontainer Teks Utama --> <div class="w-full px-6 flex flex-col items-center relative z-20 max-w-3xl mx-auto" data-astro-cid-j7pv25f6> <span class="bg-white/90 text-[#F46B8D] px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border-[2px] border-[#F46B8D]" data-astro-cid-j7pv25f6>
The Miracle of Charm
</span> <h4 class="font-serif italic text-3xl md:text-4xl mb-1 text-pink-100" data-astro-cid-j7pv25f6>TWICE</h4> <h1 class="font-serif text-7xl md:text-9xl font-bold tracking-tight mb-6 text-center" style="font-family: 'Quicksand', sans-serif;" data-astro-cid-j7pv25f6>
KEYCHAIN
</h1> <p class="max-w-xl mx-auto text-pink-100 font-medium mb-10 text-lg leading-relaxed text-center" data-astro-cid-j7pv25f6>
Collect moments, not things starting with the cutest companion for your keys and bags. Clip on your new favorite obsession.
</p> <a href="/shop" class="bg-white text-[#F46B8D] font-bold px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[4px_4px_0_0_rgba(157,43,71,0.3)]" data-astro-cid-j7pv25f6>
Explore The Magic
</a> </div> </section> <!-- PEMBATAS GELOMBANG --> <div class="w-full leading-none -mt-1 z-20 relative bg-[#FFFDF5]" data-astro-cid-j7pv25f6> <svg viewBox="0 0 1440 100" class="w-full h-10 md:h-16 text-[#F46B8D] fill-current block" preserveAspectRatio="none" data-astro-cid-j7pv25f6> <path d="M0,0 C120,100 240,100 360,0 C480,100 600,100 720,0 C840,100 960,100 1080,0 C1200,100 1320,100 1440,0 L1440,0 L0,0 Z" data-astro-cid-j7pv25f6></path> </svg> </div> <!-- 2. CONTENT SECTION CREAM (PRODUK & ULASAN) --> <section class="bg-[#FFFDF5] w-full min-h-screen pt-16 pb-24 px-4 md:px-12 text-center overflow-hidden relative" data-astro-cid-j7pv25f6> <!-- Header Produk --> <div class="w-full max-w-7xl mx-auto mb-16 relative z-10" data-astro-cid-j7pv25f6> <h2 class="font-serif text-4xl md:text-5xl text-[#2F3E46] font-bold mb-4" style="font-family: 'Quicksand', sans-serif;" data-astro-cid-j7pv25f6>
Trending <span class="italic font-light text-[#F46B8D]" data-astro-cid-j7pv25f6>Now</span> </h2> <p class="text-[#6D777B]" data-astro-cid-j7pv25f6>
A little piece of joy, handcrafted to travel with you.
</p> <!-- HIASAN FLORAL TENGAH --> <div class="relative w-full max-w-xl mx-auto h-24 mt-8 flex justify-center" data-astro-cid-j7pv25f6> <svg viewBox="0 0 400 100" class="w-full h-full absolute top-0 left-0" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6> <path d="M 20 80 Q 100 20 200 60 T 380 40" stroke="#7CB342" stroke-width="6" stroke-linecap="round" data-astro-cid-j7pv25f6></path> <path d="M 260 50 C 280 -10 360 0 320 60 Z" fill="#7CB342" data-astro-cid-j7pv25f6></path> <path d="M 80 40 C 60 10 20 30 60 70 Z" fill="#7CB342" data-astro-cid-j7pv25f6></path> </svg> <div class="absolute left-[20%] top-[40%] w-10 h-10 flex items-center justify-center -rotate-12" data-astro-cid-j7pv25f6> <div class="absolute w-8 h-8 bg-[#F46B8D] rounded-full translate-x-2 -translate-y-2" data-astro-cid-j7pv25f6></div> <div class="absolute w-8 h-8 bg-[#F46B8D] rounded-full -translate-x-2 -translate-y-2" data-astro-cid-j7pv25f6></div> <div class="absolute w-8 h-8 bg-[#F46B8D] rounded-full translate-x-2 translate-y-2" data-astro-cid-j7pv25f6></div> <div class="absolute w-8 h-8 bg-[#F46B8D] rounded-full -translate-x-2 translate-y-2" data-astro-cid-j7pv25f6></div> <div class="absolute w-5 h-5 bg-[#FFFDF5] rounded-full z-10" data-astro-cid-j7pv25f6></div> </div> <div class="absolute left-[45%] top-[10%] w-10 h-10 flex items-center justify-center rotate-45" data-astro-cid-j7pv25f6> <div class="absolute w-8 h-8 bg-[#FBC02D] rounded-full translate-x-2 -translate-y-2" data-astro-cid-j7pv25f6></div> <div class="absolute w-8 h-8 bg-[#FBC02D] rounded-full -translate-x-2 -translate-y-2" data-astro-cid-j7pv25f6></div> <div class="absolute w-8 h-8 bg-[#FBC02D] rounded-full translate-x-2 translate-y-2" data-astro-cid-j7pv25f6></div> <div class="absolute w-8 h-8 bg-[#FBC02D] rounded-full -translate-x-2 translate-y-2" data-astro-cid-j7pv25f6></div> <div class="absolute w-5 h-5 bg-white rounded-full z-10" data-astro-cid-j7pv25f6></div> </div> <div class="absolute right-[20%] top-[60%] w-8 h-8 flex items-center justify-center rotate-12" data-astro-cid-j7pv25f6> <div class="absolute w-6 h-6 bg-white rounded-full translate-x-1.5 -translate-y-1.5" data-astro-cid-j7pv25f6></div> <div class="absolute w-6 h-6 bg-white rounded-full -translate-x-1.5 -translate-y-1.5" data-astro-cid-j7pv25f6></div> <div class="absolute w-6 h-6 bg-white rounded-full translate-x-1.5 translate-y-1.5" data-astro-cid-j7pv25f6></div> <div class="absolute w-6 h-6 bg-white rounded-full -translate-x-1.5 translate-y-1.5" data-astro-cid-j7pv25f6></div> <div class="absolute w-4 h-4 bg-[#FBC02D] rounded-full z-10" data-astro-cid-j7pv25f6></div> </div> </div> </div> <!-- SLIDER PRODUK --> <div class="relative w-full max-w-7xl mx-auto z-10 group" data-astro-cid-j7pv25f6> <!-- Tombol Geser Kiri --> <button id="slider-btn-left" aria-label="Slide Left" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 w-12 h-12 bg-white border-2 border-[#F46B8D] text-[#F46B8D] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#F46B8D] hover:text-white hover:scale-110" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" data-astro-cid-j7pv25f6></path> </svg> </button> <!-- Container Slider --> <div id="product-slider" class="flex gap-10 md:gap-14 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-4 px-4 md:px-8 hide-scrollbar" data-astro-cid-j7pv25f6> ${trendingProducts.map((product, index) => {
    const frame = frameStyles[index % frameStyles.length];
    return renderTemplate`<div class="flex flex-col items-center w-52 shrink-0 snap-center group/card" data-astro-cid-j7pv25f6> <div${addAttribute(`relative w-full ${frame.container} p-2.5 mb-6 shadow-sm border-[3px] transition-transform duration-500 group-hover/card:-translate-y-2 group-hover/card:shadow-md`, "class")} data-astro-cid-j7pv25f6> ${product.badge && renderTemplate`<span class="absolute -top-3 -right-3 z-10 bg-white text-[#F46B8D] border-2 border-[#F46B8D] px-3 py-1 rounded-full text-[10px] font-extrabold shadow-[2px_2px_0_0_#F46B8D] rotate-12 cursor-default" data-astro-cid-j7pv25f6> ${product.badge} </span>`} <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")}${addAttribute(`w-full h-full object-cover ${frame.img} border-2 border-white/50`, "class")} data-astro-cid-j7pv25f6> </div> <h4 class="font-bold text-[#2F3E46] text-base md:text-lg font-serif mb-1 text-center min-h-[3.5rem] flex items-center justify-center px-1" style="font-family: 'Quicksand', sans-serif;" data-astro-cid-j7pv25f6>${product.name}</h4> <span class="text-md font-extrabold text-[#F46B8D] mb-4" data-astro-cid-j7pv25f6>${product.price}</span> <button class="w-full py-2.5 bg-white text-[#2F3E46] border-2 border-[#2F3E46] rounded-full font-bold text-sm hover:bg-[#F46B8D] hover:border-[#F46B8D] hover:text-white transition-all shadow-[3px_3px_0_0_rgba(47,62,70,0.15)] active:translate-y-1 active:shadow-none" data-add-to-cart${addAttribute(product.id, "data-product-id")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.price, "data-product-price")}${addAttribute(product.image, "data-product-image")} data-product-variant="Trending Item" data-astro-cid-j7pv25f6>
Add to Cart
</button> </div>`;
  })} </div> <!-- Tombol Geser Kanan --> <button id="slider-btn-right" aria-label="Slide Right" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 w-12 h-12 bg-white border-2 border-[#F46B8D] text-[#F46B8D] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#F46B8D] hover:text-white hover:scale-110" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </button> </div> <!-- SECTION REVIEW --> <div class="w-full mt-32 relative z-10" data-astro-cid-j7pv25f6> <h2 class="font-serif text-4xl md:text-5xl text-[#2F3E46] font-bold mb-16 text-center" style="font-family: 'Quicksand', sans-serif;" data-astro-cid-j7pv25f6>
What <span class="italic font-light text-[#F46B8D]" data-astro-cid-j7pv25f6>They Say</span> </h2> <div class="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-10 md:gap-14 px-4" data-astro-cid-j7pv25f6> ${reviews.map((review) => renderTemplate`<div class="relative w-full max-w-xs md:max-w-sm group" data-astro-cid-j7pv25f6> <div${addAttribute(`relative p-8 md:p-10 border-[3px] shadow-[4px_4px_0_0_rgba(47,62,70,0.1)] ${review.bg} ${review.border} hover:-translate-y-3 transition-transform duration-500`, "class")}${addAttribute(review.shape, "style")} data-astro-cid-j7pv25f6> <div class="flex gap-1 mb-4 justify-center" data-astro-cid-j7pv25f6> <span class="text-[#FBC02D] text-lg" data-astro-cid-j7pv25f6>★</span> <span class="text-[#FBC02D] text-lg" data-astro-cid-j7pv25f6>★</span> <span class="text-[#FBC02D] text-lg" data-astro-cid-j7pv25f6>★</span> <span class="text-[#FBC02D] text-lg" data-astro-cid-j7pv25f6>★</span> <span class="text-[#FBC02D] text-lg" data-astro-cid-j7pv25f6>★</span> </div> <p class="text-[#2F3E46] font-medium mb-6 leading-relaxed" data-astro-cid-j7pv25f6>
"${review.text}"
</p> <div class="font-bold text-[#F46B8D] font-serif tracking-wide text-lg" style="font-family: 'Quicksand', sans-serif;" data-astro-cid-j7pv25f6>
— ${review.name} </div> </div> <div${addAttribute(`absolute -bottom-2 -right-2 w-12 h-12 bg-white border-[3px] ${review.border} rounded-full flex items-center justify-center text-xl shadow-[3px_3px_0_0_rgba(47,62,70,0.1)] rotate-12 group-hover:rotate-0 transition-transform duration-300 z-10`, "class")} data-astro-cid-j7pv25f6> ${review.icon} </div> </div>`)} </div> </div> </section> </div> ` }));
}, "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/index.astro", void 0);

const $$file = "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
