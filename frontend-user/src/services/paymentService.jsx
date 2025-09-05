const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const createQRPayment = async (amount) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/create-qr`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || "Không tạo được mã QR");
    }

    const data = await res.json();
    return data.qrUrl;
  } catch (err) {
    console.error("Lỗi tạo QR:", err.message);
    throw err;
  }
};
