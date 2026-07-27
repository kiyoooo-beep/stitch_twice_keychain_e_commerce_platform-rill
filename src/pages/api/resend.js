import nodemailer from 'nodemailer';

export async function sendCustomerConfirmation({ to, nama, orderCode, items, total }) {
  try {
    // 1. Siapkan transporter menggunakan Gmail SMTP dan App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: import.meta.env.GMAIL_USER, 
        pass: import.meta.env.GMAIL_APP_PASSWORD, 
      },
    });

    // 2. Susun daftar barang pesanan jadi format HTML
    const itemsHtml = (items || [])
      .map((item) => `<li style="margin-bottom: 5px;">${item.name} (x${item.quantity || item.qty || 1})</li>`)
      .join('');

    // 3. Desain isi pesan emailnya biar aesthetic
    const htmlBody = `
      <div style="font-family: 'Quicksand', sans-serif, Arial; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px dashed #ffe6ed; border-radius: 15px; background-color: #FFFDF5; color: #2F3E46;">
        <h2 style="color: #F46B8D; text-align: center;">Terima kasih atas pesananmu, ${nama}! ♡</h2>
        <p>Yay! Pesanan kamu dengan kode <strong>#${orderCode}</strong> sudah masuk dan sedang kami siapkan.</p>
        
        <div style="background-color: white; padding: 15px; border-radius: 10px; margin: 20px 0; border: 1px solid #ffe6ed;">
          <h3 style="color: #F46B8D; margin-top: 0;">Detail Pesanan:</h3>
          <ul style="padding-left: 20px;">
            ${itemsHtml}
          </ul>
          <hr style="border: 1px solid #ffe6ed;" />
          <p style="font-size: 16px; font-weight: bold; text-align: right;">Total Pembayaran: Rp ${total}</p>
        </div>

        <p>Jika kamu ada pertanyaan seputar pesanan ini, jangan ragu untuk membalas email ini ya, Bestie!</p>
        <br/>
        <p style="margin-bottom: 0;">Salam hangat,</p>
        <p style="font-weight: bold; color: #F46B8D; margin-top: 5px;">Tim TWICE KEYCHAIN ✧</p>
      </div>
    `;

    // 4. Kirim email menggunakan data asli pelanggan (variabel 'to')
    const info = await transporter.sendMail({
      from: `"TWICE KEYCHAIN" <${import.meta.env.GMAIL_USER}>`,
      to: to, // Menggunakan email asli yang diinput saat form shipping!
      subject: `Konfirmasi Pesanan Diterima - TWICE KEYCHAIN (#${orderCode})`,
      html: htmlBody,
    });

    console.log("✅ [NODEMAILER] Email SUKSES dikirim ke pelanggan:", to);
    return true;

  } catch (error) {
    console.error("❌ [NODEMAILER] Waduh, gagal mengirim email:", error);
    return false;
  }
}