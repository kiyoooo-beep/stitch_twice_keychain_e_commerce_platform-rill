// src/lib/resend.js

export async function sendCustomerConfirmation({ to, nama, orderCode, items, total }) {
  console.log("🚀 [RESEND] Mulai memproses email...");
  console.log("👉 Target email pelanggan dari form web:", to);

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  
  // KITA HARDCODE SEMENTARA
  const fromEmail = 'onboarding@resend.dev'; 
  
  // 🔥 GANTI TEKS INI DENGAN EMAIL AKUN RESEND KAMU! 🔥
  const emailTujuan = 'arzaliafithri@gmail.com'; 

  if (!resendApiKey) {
    console.error("❌ [RESEND] GAGAL: API Key tidak terbaca! Pastikan file .env benar dan nyalakan ulang server.");
    return;
  }

  const itemsHtml = (items || [])
    .map((item) => `<li>${item.name} x${item.quantity || item.qty || 1}</li>`)
    .join('');

  try {
    console.log(`⏳ [RESEND] Mengirim email "paksaan" ke: ${emailTujuan}...`);
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${resendApiKey}` 
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [emailTujuan], // <--- INI KUNCI UTAMANYA BIAR TEMBUS!
        subject: `Pembayaran Diterima - Order ${orderCode}`,
        html: `
          <div style="font-family: sans-serif; color: #333;">
            <h2>Halo ${nama || 'Kak'}, pembayaran kamu sudah kami terima! 🎉</h2>
            <p><b>Kode Order:</b> ${orderCode}</p>
            <p><b>Total:</b> Rp${Number(total).toLocaleString('id-ID')}</p>
            <p><b>Pesanan:</b></p>
            <ul>${itemsHtml}</ul>
            <p>Pesanan kamu sedang kami proses. Terima kasih sudah belanja! 🥰</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ [RESEND] DITOLAK OLEH SERVER RESEND! Detail:", errorText);
      return;
    }

    const data = await res.json();
    console.log("✅ [RESEND] SUKSES TERKIRIM! Cek kotak masuk/spam email kamu sekarang! ID Resend:", data.id);
    return data;

  } catch (error) {
    console.error("❌ [RESEND] KONEKSI TERPUTUS:", error);
  }
}