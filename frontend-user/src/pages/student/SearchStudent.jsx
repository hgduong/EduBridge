import React, { useState } from "react";
import "../../App.css";
import WebHorizontalButtons from "../../components/common/WebHorizontalButtons";
import WebClassCard from "../../components/common/WebClassCard";
import AddressSelector from "../../components/Location/AddressSelector";
import mockNormalClass from "../../mock/tutor/NormalClassMockData";
import WebPagination from "../../components/common/WebPagination";

const SearchStudent = () => {
  // ---- Quản lý phân trang ----
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // 👉 mỗi trang hiển thị 6 card

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = mockNormalClass.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(mockNormalClass.length / cardsPerPage);

  return (
    <div>
      <div className="blue-container"></div>

      <div className="search-container">
        <h2>Tìm kiếm</h2>
        <div className="search-inputs">
          {/* input + select giữ nguyên */}
          <input
            list="subjects"
            className="search-input"
            placeholder="Nhập môn học / Chứng chỉ"
          />
          <datalist id="subjects">
            <option value="Toán" />
            <option value="Văn" />
            <option value="Tiếng Anh" />
            <option value="IELTS" />
          </datalist>

          <input type="time" className="search-input" />

          <select className="search-input">
            <option>Ngày học</option>
            <option>Thứ 2</option>
            <option>Thứ 3</option>
            <option>Thứ 4</option>
            <option>Thứ 5</option>
            <option>Thứ 6</option>
            <option>Thứ 7</option>
            <option>Chủ nhật</option>
          </select>

          <input list="routes" className="search-input" placeholder="Lộ trình" />
          <datalist id="routes">
            <option value="1 ngày" />
            <option value="1 tuần" />
            <option value="1 tháng" />
            <option value="2 tháng" />
          </datalist>

          <AddressSelector />

          <select className="search-input gender">
            <option>Giới tính</option>
            <option>Nam</option>
            <option>Nữ</option>
            <option>Cả hai</option>
          </select>

          <input
            type="number"
            className="search-input student-count"
            placeholder="Số học viên"
            min="1"
            max="20"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              if (e.target.value !== "") {
                let value = parseInt(e.target.value, 10);
                if (value < 1) e.target.value = 1;
                if (value > 20) e.target.value = 20;
              }
            }}
          />
        </div>
      </div>

      {/* Nút scroll ngang */}
      <WebHorizontalButtons />

      {/* Tổng số kết quả */}
      <p className="search-result-count">{mockNormalClass.length} kết quả</p>

      {/* Card kết quả */}
      <div className="grid grid-cols-1 gap-4">
        {currentCards.map((request) => (
          <WebClassCard key={request.id} {...request} />
        ))}
      </div>

      {/* Pagination */}
      <WebPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default SearchStudent;