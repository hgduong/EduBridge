import { useState } from "react";
import "../../assets/styles/FindStudentForm.css"; // Import file CSS riêng
import AddressSelector from "../../components/Location/AddressSelector";
import { Modal } from "antd";
import { createQRPayment } from "../../services/paymentService";
export default function FindStudentForm({ onSubmit }) {
  const [form, setForm] = useState({
    subject: "",
    level: "",
    location: "",
    schedule: "",
    fees: "",
    timestudy: "",
    numberstudent: "",
    sessionsPerWeek: "",
    notes: "",
  });
  const fees = parseFloat(form.fees) || 0;
  const numberStudent = parseInt(form.numberstudent) || 0;
  const sessionsPerWeek = parseInt(form.sessionsPerWeek) || 0;
  const estimatedIncome = fees * numberStudent * sessionsPerWeek * 4;
  const classFee = numberStudent >= 2 ? estimatedIncome * 0.2 : 0;
  const [showConfirm, setShowConfirm] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [qrUrl, setQrUrl] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Tạo Yêu Cầu Mở Lớp</h2>
      <h5>Lưu ý:</h5>
      <h6>Đối với 1 học sinh sẽ không mất phí mở lớp</h6>
      <h6>Đối với 2 học sinh trở lên phí mở lớp là 20%</h6>
      <label>
        Môn học:
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
        >
          <option value="">-- Chọn môn học --</option>
          <option value="Maths">Toán</option>
          <option value="Literature">Văn</option>
          <option value="English">Tiếng Anh</option>
          <option value="Physics">Vật lý</option>
          <option value="Biology">Sinh học</option>
          <option value="Chemistry">Hóa học</option>
          <option value="IELTS">IELTS</option>
          <option value="TOEIC">TOEIC</option>
          <option value="Japanese">Tiếng Nhật</option>
          <option value="Chinese">Tiếng Trung</option>
          <option value="Korean">Tiếng Hàn</option>
          <option value="Russian">Tiếng Nga</option>
          <option value="French">Tiếng Pháp</option>
        </select>
      </label>

      <label>
        Lớp:
        <select
          name="level"
          value={form.level}
          onChange={handleChange}
          required
        >
          <option value="">-- Chọn trình độ --</option>
          <option value="class1">Lớp 1</option>
          <option value="class2">Lớp 2</option>
          <option value="class3">Lớp 3</option>
          <option value="class4">Lớp 4</option>
          <option value="class5">Lớp 5</option>
          <option value="class6">Lớp 6</option>
          <option value="class7">Lớp 7</option>
          <option value="class8">Lớp 8</option>
          <option value="class9">Lớp 9</option>
          <option value="class10">Lớp 10</option>
          <option value="class11">Lớp 11</option>
          <option value="class12">Lớp 12</option>
          <option value="Đại học">Đại học/Cao đẳng/Đi làm</option>
        </select>
      </label>

      <label>
        Khu vực:
        <AddressSelector
          value={form.location}
          onChange={(value) => setForm({ ...form, location: value })}
          required
        />
        <textarea placeholder="Mô tả cụ thể chi tiết địa chỉ"></textarea>
      </label>

      <label>
        Thời gian học trong tuần:
        <input
          type="text"
          name="schedule"
          value={form.schedule}
          onChange={handleChange}
          placeholder="Ví dụ: Tối Thứ 2, 18:00 - 20:00 || Tối Thứ 3, 19:00 - 21:00"
          required
        />
      </label>
      <label>
        Học phí/Buổi
        <input
          type="text"
          name="fees"
          value={form.fees}
          onChange={handleChange}
          placeholder="Học phí"
          required
        />
        Giờ học/Buổi
        <input
          type="text"
          name="timestudy"
          value={form.timestudy}
          onChange={handleChange}
          placeholder="Thời lượng học"
        />
        Số buổi/tuần
        <input
          type="number"
          name="sessionsPerWeek"
          value={form.sessionsPerWeek}
          onChange={handleChange}
          placeholder="Số buổi/tuần"
        />
        Số lượng học sinh
        <input
          type="number"
          name="numberstudent"
          value={form.numberstudent}
          onChange={handleChange}
          placeholder="Số lượng học sinh"
        />
      </label>
      <label>
        Hình thức dạy học:
        <select required>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
          <option value="Online + Offline">Online + Offline</option>
        </select>
      </label>

      <label>
        Ghi chú thêm:
        <textarea name="notes" value={form.notes} onChange={handleChange} />
      </label>
      <div
        style={{
          marginTop: "1rem",
          background: "#f9f9f9",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <p>
          💰 <strong>Thu nhập dự kiến:</strong>{" "}
          {estimatedIncome.toLocaleString()} VND/tháng
        </p>
        <p>
          🧾 <strong>Phí tạo lớp:</strong> {classFee.toLocaleString()} VND
        </p>
      </div>
      <Modal
        title={
          <div
            style={{ fontSize: "20px", fontWeight: "bold", color: "#2c3e50" }}
          >
            🎓 Xác nhận mở lớp
          </div>
        }
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        footer={[
          <button
            key="cancel"
            onClick={() => setShowConfirm(false)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#bdc3c7",
              border: "none",
              borderRadius: "6px",
              color: "#2c3e50",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ❌ Hủy
          </button>,
          <button
            key="confirm"
            onClick={async () => {
              setShowConfirm(false);
              try {
                const url = await createQRPayment(classFee); // gọi API backend
                setQrUrl(url);
                setShowQR(true);
              } catch (err) {
                alert("Không tạo được mã QR: " + err.message);
              }
            }}
            style={{
              padding: "8px 16px",
              backgroundColor: "#27ae60",
              border: "none",
              borderRadius: "6px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ✅ Tạo QR thanh toán ({classFee.toLocaleString()} VND)
          </button>,
        ]}
      >
        <div
          style={{
            background: "#ecf0f1",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "1rem",
            fontSize: "16px",
            color: "#34495e",
          }}
        >
          <p>
            💰 <strong>Thu nhập dự kiến:</strong>{" "}
            {estimatedIncome.toLocaleString()} VND/tháng
          </p>
          <p>
            🧾 <strong>Phí tạo lớp:</strong> {classFee.toLocaleString()} VND
          </p>
        </div>
        <p style={{ fontSize: "15px", color: "#7f8c8d" }}>
          Bạn có muốn tạo mã QR để thanh toán phí mở lớp không?
        </p>
      </Modal>
      <Modal
        title="🔐 Quét mã QR để thanh toán"
        open={showQR}
        onCancel={() => setShowQR(false)}
        footer={[
          <button
            key="done"
            onClick={() => {
              setShowQR(false);
              onSubmit(form); // Gửi yêu cầu sau khi thanh toán
            }}
            style={{
              padding: "8px 16px",
              backgroundColor: "#2ecc71",
              border: "none",
              borderRadius: "6px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ✅ Tôi đã thanh toán
          </button>,
        ]}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "16px", marginBottom: "1rem" }}>
            Số tiền cần thanh toán:{" "}
            <strong>{classFee.toLocaleString()} VND</strong>
          </p>
          {qrUrl ? (
            <img src={qrUrl} alt="QR thanh toán" style={{ width: 250 }} />
          ) : (
            <p>Đang tải mã QR...</p>
          )}
          <p style={{ fontSize: "14px", color: "#7f8c8d", marginTop: "1rem" }}>
            Quét mã bằng ứng dụng ngân hàng để thanh toán phí mở lớp.
          </p>
        </div>
      </Modal>

      <button
        className="submit-button"
        type="button"
        onClick={() => setShowConfirm(true)}
      >
        Gửi yêu cầu
      </button>
    </form>
  );
}
