export async function GET() {
  const storeInfo = {
    name: "TWICE KEYCHAIN",
    tagline: "Kawaii collectibles for the lovers of cute things.",
    aboutUs: "TWICE KEYCHAIN adalah destinasi utama kamu untuk koleksi gantungan kunci akrilik dan clay yang handmade, super imut, dan berkualitas tinggi. Kami menghadirkan sentuhan kebahagiaan dan keajaiban kecil untuk aksesoris harianmu, dirancang dengan penuh cinta.",
    location: {
      address: "Jl. Jend. Sudirman, Tigaraksa, Kec. Tigaraksa, Kabupaten Tangerang, Banten",
      city: "Kabupaten Tangerang",
      country: "Indonesia",
      mapsLink: "https://maps.google.com/?q=Universitas+Tangerang+Raya+Tigaraksa"
    },
    whatsapp: "+62 851-7993-2283",
    email: "support@twicekeychain.com"
  };

  return new Response(JSON.stringify(storeInfo), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}