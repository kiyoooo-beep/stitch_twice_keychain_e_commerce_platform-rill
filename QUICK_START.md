# 🚀 Quick Start Guide - TWICE KEYCHAIN Astro

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Start Development Server
```bash
npm run dev
```

Server akan berjalan di: **http://localhost:3000**

## Step 3: Explore Aplikasi
- **Home**: http://localhost:3000/ - Halaman utama dengan hero dan trending products
- **Shop**: http://localhost:3000/shop - Katalog semua produk
- **Product**: http://localhost:3000/product/1 - Detail produk
- **Cart**: http://localhost:3000/cart - Shopping cart
- **Checkout**: http://localhost:3000/checkout - Halaman pembayaran

## 📝 Struktur Project

```
.
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.astro (Home)
│   │   ├── shop.astro (Shop)
│   │   ├── cart.astro (Cart)
│   │   ├── checkout.astro (Checkout)
│   │   └── product/[id].astro (Product Detail)
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
├── package.json
└── README.md
```

## 🎨 Kustomisasi

### Mengubah Warna
Edit di `tailwind.config.cjs` bagian `colors`

### Menambah Product
Edit array `products` atau `trendingProducts` di halaman yang sesuai

### Menambah Page Baru
1. Buat file `.astro` di `src/pages/`
2. Import `PageLayout` dari `@/layouts/PageLayout.astro`
3. Gunakan layout untuk membuat halaman baru

## 🏗️ Build untuk Production
```bash
npm run build
npm run preview
```

File HTML statis akan di-generate di folder `dist/`

## 📱 Fitur yang Sudah Ada
- ✅ Homepage dengan promotional carousel
- ✅ Product listing dengan grid
- ✅ Product detail page
- ✅ Shopping cart management
- ✅ Checkout flow (2-step)
- ✅ GoPay/QRIS payment modal
- ✅ Fully responsive design
- ✅ Tailwind CSS dengan custom theme

## 🔗 Links & Resources
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Material Symbols Icons](https://fonts.google.com/icons)

---

**Tips**: Gunakan `npm run dev` untuk development dan lihat perubahan langsung dengan hot reload!
