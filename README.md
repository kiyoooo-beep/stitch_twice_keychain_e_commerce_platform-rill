# 🎀 TWICE KEYCHAIN - Astro E-Commerce Platform

Sebuah platform e-commerce kawaii untuk koleksi keychain TWICE yang dibangun dengan Astro, Tailwind CSS, dan TypeScript.

## 🚀 Features

- ✨ Homepage dengan hero banner dan trending products
- 🛍️ Shop page dengan grid products dan filters
- 🔍 Product detail page dengan rating dan reviews
- 🛒 Shopping cart dengan quantity management
- 💳 Checkout page dengan GoPay/QRIS payment
- 📱 Fully responsive design
- 🎨 Custom theme system dengan Tailwind CSS
- ⚡ Static site generation dengan Astro

## 🛠️ Tech Stack

- **Framework**: Astro 4.0
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Fonts**: Nunito Sans, Quicksand, Material Symbols
- **Icons**: Material Symbols Outlined

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Setup Tailwind plugins** (jika belum otomatis):
```bash
npm install -D @tailwindcss/forms @tailwindcss/container-queries
```

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```
Server akan berjalan di `http://localhost:3000`

### Build untuk Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.astro         # Navigation header
│   └── Footer.astro         # Footer component
├── layouts/
│   ├── BaseLayout.astro     # Base HTML layout
│   └── PageLayout.astro     # Page layout with header & footer
├── pages/
│   ├── index.astro          # Home page
│   ├── shop.astro           # Shop/catalog page
│   ├── cart.astro           # Shopping cart
│   ├── checkout.astro       # Checkout page
│   └── product/[id].astro   # Dynamic product detail page
├── styles/
│   └── global.css           # Global styles
├── utils/                   # Utility functions (opsional)

```

## 🎨 Warna & Design System

Semua warna sudah dikonfigurasi di `tailwind.config.cjs`:

- **Primary**: `#864d61` (Pastel Rose)
- **Secondary**: `#356572` (Muted Blue)
- **Tertiary**: `#41673f` (Forest Green)
- **Accent Colors**: Pastel Yellow, Pastel Green, Coral Red
- **Surface**: `#fbf9f1` (Cream)

## 🔧 Customization

### Menambah Product
Edit data di halaman yang sesuai (home, shop, product detail).

### Mengubah Theme
Ubah warna di `tailwind.config.cjs` di section `colors`.

### Menambah Page Baru
Buat file `.astro` baru di folder `src/pages/`.

## 📚 Halaman yang Tersedia

- `/` - Home page
- `/shop` - Product catalog
- `/product/[id]` - Product detail
- `/cart` - Shopping cart
- `/checkout` - Checkout page

## 🚀 Deploy

Astro menghasilkan static HTML, dapat di-deploy ke:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Cloudflare Pages

## 📝 License

© 2024 TWICE KEYCHAIN. All rights reserved.

---

Dibuat dengan ❤️ menggunakan Astro
