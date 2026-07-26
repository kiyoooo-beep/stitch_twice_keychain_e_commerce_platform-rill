export async function GET() {
  const aboutData = {
    storeName: "TWICE KEYCHAIN",
    tagline: "Kawaii collectibles for the lovers of cute things.",
    description: "TWICE KEYCHAIN adalah brand aksesoris handmade lokal yang berfokus pada koleksi gantungan kunci akrilik dan clay berdesain imut, unik, dan estetis. Setiap produk dibuat dengan penuh ketelitian untuk menemani hari-harimu.",
    foundedYear: 2024,
    location: "Jl. Jend. Sudirman, Tigaraksa, Kabupaten Tangerang, Banten",
    contactEmail: "support@twicekeychain.com",
    whatsapp: "+62 851-7993-2283"
  };

  return new Response(JSON.stringify(aboutData), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}