import{c as B,u as $,r as C,s as g,g as j}from"./cart.Z8mnVVDp.js";const T=document.getElementById("open-cart"),D=document.getElementById("close-cart"),m=document.getElementById("cart-overlay"),x=document.getElementById("cart-drawer"),u=document.getElementById("cart-drawer-items"),f=document.getElementById("cart-drawer-title"),v=document.getElementById("cart-drawer-subtotal"),b=document.getElementById("clear-cart"),h=t=>Math.round(t).toLocaleString("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}),k=t=>Number(String(t).replace(/\D/g,""))||0,c=t=>String(t).replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]);function o(){const t=j(),e=t.reduce((a,r)=>a+r.quantity,0),n=t.reduce((a,r)=>a+k(r.price)*r.quantity,0);f&&(f.textContent=`${e} ${e===1?"item":"items"}`),v&&(v.textContent=h(n)),b&&(b.disabled=t.length===0),u&&(u.innerHTML=t.length?t.map(a=>`
        <article class="rounded-xl border border-surface-variant/80 bg-surface-container-low p-3">
          <div class="flex gap-3">
            <img src="${c(a.image)}" alt="${c(a.name)}" class="h-20 w-20 shrink-0 rounded-lg border border-surface-variant/50 object-cover" />
            <div class="min-w-0 flex-1">
              <p class="text-xs font-bold uppercase tracking-wide text-secondary">${c(a.variant||"Keychain")}</p>
              <h3 class="mt-1 truncate font-headline-md text-base text-primary">${c(a.name)}</h3>
              <p class="mt-1 font-bold text-secondary">${h(k(a.price))}</p>
              <div class="mt-3 flex items-center justify-between gap-2">
                <div class="flex items-center rounded-full border border-outline-variant bg-surface-container-lowest">
                  <button type="button" class="px-3 py-1.5 hover:text-primary" data-cart-quantity="-1" data-product-id="${a.id}" aria-label="Kurangi jumlah">−</button>
                  <span class="w-8 text-center text-sm font-bold">${a.quantity}</span>
                  <button type="button" class="px-3 py-1.5 hover:text-primary" data-cart-quantity="1" data-product-id="${a.id}" aria-label="Tambah jumlah">+</button>
                </div>
                <button type="button" class="text-sm font-bold text-secondary hover:underline" data-cart-remove="${a.id}">Hapus</button>
              </div>
            </div>
          </div>
        </article>`).join(""):'<div class="py-14 text-center"><span class="material-symbols-outlined text-5xl text-outline-variant">shopping_bag</span><p class="mt-4 text-on-surface-variant">Keranjangmu masih kosong.</p><a href="/shop" class="mt-5 inline-block font-bold text-primary hover:underline">Mulai belanja</a></div>',g())}function y(t){!x||!m||(x.classList.toggle("translate-x-full",!t),m.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"",t&&o())}T?.addEventListener("click",()=>y(!0));D?.addEventListener("click",()=>y(!1));m?.addEventListener("click",()=>y(!1));b?.addEventListener("click",()=>{B(),o()});u?.addEventListener("click",t=>{const e=t.target instanceof Element?t.target.closest("button"):null;if(!e)return;const n=Number(e.getAttribute("data-product-id")||e.getAttribute("data-cart-remove"));e.hasAttribute("data-cart-quantity")&&$(n,Number(e.getAttribute("data-cart-quantity"))),e.hasAttribute("data-cart-remove")&&C(n),o()});g();o();window.addEventListener("cart:updated",()=>{g(),o()});const d=document.getElementById("backend-modal"),M=document.getElementById("close-backend-modal"),q=document.getElementById("modal-body-content"),A=document.getElementById("btn-about-backend"),S=document.getElementById("btn-member-backend");function p(t){q.innerHTML=t,d.classList.remove("hidden")}function L(){d.classList.add("hidden")}M?.addEventListener("click",L);d?.addEventListener("click",t=>{t.target===d&&L()});A?.addEventListener("click",async()=>{try{const e=await(await fetch("/api/about-us")).json();p(`
        <h3 class="text-xl font-bold text-primary mb-2">${e.storeName} ✨</h3>
        <p class="text-sm text-gray-600 mb-4 italic">${e.tagline}</p>
        <p class="text-sm text-gray-700 leading-relaxed mb-4">${e.description}</p>
        <div class="border-t pt-3 text-xs text-gray-500 space-y-1">
          <p>📍 <strong>Lokasi:</strong> ${e.location}</p>
          <p>📧 <strong>Email:</strong> ${e.contactEmail}</p>
          <p>💬 <strong>WhatsApp:</strong> ${e.whatsapp}</p>
        </div>
      `)}catch{alert("Gagal memuat data dari server backend.")}});S?.addEventListener("click",()=>{p(`
      <h3 class="text-xl font-bold text-primary mb-2">Join Member Club 💖</h3>
      <p class="text-sm text-gray-600 mb-4">Daftar sekarang dan dapatkan voucher diskon spesial 10% langsung!</p>
      <form id="member-form" class="space-y-3">
        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1">Nama Lengkap</label>
          <input type="text" id="member-name" required class="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary" placeholder="Masukkan nama kamu" />
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1">Email Aktif</label>
          <input type="email" id="member-email" required class="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary" placeholder="nama@email.com" />
        </div>
        <button type="submit" class="w-full py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity mt-2">Daftar Sekarang</button>
      </form>
    `),setTimeout(()=>{document.getElementById("member-form")?.addEventListener("submit",async e=>{e.preventDefault();const n=document.getElementById("member-name").value,a=document.getElementById("member-email").value;try{const r=await fetch("/api/join-member",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:n,email:a})}),s=await r.json();r.ok?p(`
              <div class="text-center py-4">
                <span class="material-symbols-outlined text-5xl text-green-500 mb-2">check_circle</span>
                <h3 class="text-xl font-bold text-primary mb-1">Selamat, ${n}! 🎉</h3>
                <p class="text-sm text-gray-600 mb-3">${s.message}</p>
                <div class="bg-pink-50 border border-pink-200 rounded-xl p-3 mb-4">
                  <p class="text-xs text-gray-500">ID Member Kamu:</p>
                  <p class="font-mono font-bold text-primary text-base">${s.memberId}</p>
                  <p class="text-xs text-gray-500 mt-2">Kode Voucher Diskon:</p>
                  <p class="font-bold text-secondary text-sm">${s.discountVoucher}</p>
                </div>
                <button type="button" onclick="location.reload()" class="w-full py-2 bg-primary text-white font-bold rounded-lg text-sm">Tutup</button>
              </div>
            `):alert(s.message||"Pendaftaran gagal.")}catch{alert("Terjadi kesalahan koneksi ke server.")}})},50)});const l=document.getElementById("info-modal"),E=document.getElementById("modal-title"),w=document.getElementById("modal-content"),i=document.getElementById("modal-action-btn"),N=document.getElementById("close-modal");async function I(t){try{const n=await(await fetch("/api/store-info")).json();t==="about"?(E.innerText="About Us ✨",w.innerText=n.aboutUs,i.classList.add("hidden")):t==="location"&&(E.innerText="Store Location 📍",w.innerText=`Kunjungi workshop kami di:

${n.location.address}`,i.href=n.location.mapsLink,i.classList.remove("hidden")),l.classList.remove("hidden")}catch{alert("Gagal mengambil data dari server backend.")}}document.getElementById("btn-about")?.addEventListener("click",()=>I("about"));document.getElementById("btn-location")?.addEventListener("click",()=>I("location"));N?.addEventListener("click",()=>l.classList.add("hidden"));window.addEventListener("click",t=>{t.target===l&&l.classList.add("hidden")});
