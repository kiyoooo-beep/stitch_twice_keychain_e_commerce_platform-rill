import nodemailer from 'nodemailer';

async function sendCustomerConfirmation({ to, nama, orderCode, items, total }) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "arzaliafithri@gmail.com",
        pass: "xalc epjz dmwk tqvc"
      }
    });
    const itemsHtml = (items || []).map((item) => `<li style="margin-bottom: 5px;">${item.name} (x${item.quantity || item.qty || 1})</li>`).join("");
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
    const info = await transporter.sendMail({
      from: `"TWICE KEYCHAIN" <${"arzaliafithri@gmail.com"}>`,
      to,
      // Menggunakan email asli yang diinput saat form shipping!
      subject: `Konfirmasi Pesanan Diterima - TWICE KEYCHAIN (#${orderCode})`,
      html: htmlBody
    });
    console.log("✅ [NODEMAILER] Email SUKSES dikirim ke pelanggan:", to);
    return true;
  } catch (error) {
    console.error("❌ [NODEMAILER] Waduh, gagal mengirim email:", error);
    return false;
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  sendCustomerConfirmation
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, sendCustomerConfirmation as s };
