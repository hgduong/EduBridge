import { useState } from "react";
import axios from "axios";
import "../../assets/styles/Payment.css";
export default function PaymentForm() {
  const [amount, setAmount] = useState("");
  const [qrImage, setQrImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQrImage(null);

    try {
      const response = await axios.post(
        "https://api.vietqr.io/v2/generate",
        {
          accountNo: "19038745310018", // Số tài khoản nhận
          accountName: "NGUYEN HUY HOANG DUONG", // Tên tài khoản không dấu, viết hoa
          acqId: 970407, // Mã ngân hàng Techcombank
          amount: parseInt(amount),
          addInfo: "Thanh toan nhan lop",
          format: "text",
          template: "compact",
        },
        {
          headers: {
            "x-client-id": "YOUR_CLIENT_ID",
            "x-api-key": "YOUR_API_KEY",
            "Content-Type": "application/json",
          },
        }
      );

      const qrUrl = response.data?.data?.qrDataURL;
      setQrImage(qrUrl);
    } catch (err) {
      console.error("Lỗi tạo mã QR:", err);
      alert("Không tạo được mã QR. Kiểm tra API key hoặc thông tin tài khoản.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-form">
      <h2>💳 Thanh toán học phí</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Số tiền (VNĐ):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min={1000}
            placeholder="Nhập số tiền cần thanh toán"
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Đang tạo mã QR..." : "Tạo mã QR"}
        </button>
      </form>

      {qrImage && (
        <div className="qr-preview">
          <h3>📷 Quét mã QR để thanh toán</h3>
          <img src={qrImage} alt="QR thanh toán" style={{ width: 300 }} />
        </div>
      )}
    </div>
  );
}
