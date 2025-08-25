import { useState } from "react";
import "../../assets/styles/FindStudentForm.css"; // Import file CSS riêng
import AddressSelector from "../../components/Location/AddressSelector";

export default function FindStudentForm({ onSubmit }) {
  const [form, setForm] = useState({
    subject: "",
    level: "",
    location: "",
    schedule: "",
    notes: "",
  });

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
          <option value="Tiểu học">Tiểu học (Lớp 1 -5)</option>
          <option value="THCS">THCS (Lớp 6 - 9)</option>
          <option value="THPT">THPT (Lớp 10 - 12)</option>
          <option value="Đại học">Đại học</option>
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

      <button className="submit-button" type="submit">
        Gửi yêu cầu
      </button>
    </form>
  );
}
