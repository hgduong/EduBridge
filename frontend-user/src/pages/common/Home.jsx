// src/pages/Home.jsx

import "../../assets/styles/HomePage.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import image from "../../assets/images/image.png";
import image2 from "../../assets/images/img2.png";

const Home = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".anim-title");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.28 }
    );
    els.forEach((el) => {
      el.classList.add("pre-anim");
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // scroll if navigation passed a section id in location.state
  const location = useLocation();
  useEffect(() => {
    const id = location?.state?.scrollTo;
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -60;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main id="home">
      {/* Section 1: Text Left - Image Right */}
      <section id="about">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div style={{ flex: 1, paddingRight: 32 }}>
            <h1 className="anim-title">Gia Sư Tận Tâm, Kiến Thức Vững Chắc</h1>
            <p>
              Thousands Edu là nền tảng kết nối học viên và gia sư chất lượng...
            </p>
            <p style={{ marginTop: 16 }}>
              "Thousands Edu không đơn thuần là một nền tảng công nghệ giáo dục
              — đó là nơi những người thầy tận tâm và những học viên đầy khát
              vọng tri thức tìm thấy nhau, kết nối và cùng nhau tạo nên những
              hành trình học tập đầy cảm hứng. Tại đây, mỗi buổi học không chỉ
              là sự truyền đạt kiến thức, mà là sự đồng hành, sẻ chia và khai mở
              tiềm năng. Gia sư không chỉ là người giảng dạy, mà là người dẫn
              đường, người truyền cảm hứng, người lắng nghe và thấu hiểu. Học
              sinh không chỉ tiếp thu kiến thức, mà còn được khơi dậy niềm tin,
              sự tự tin và động lực để vượt qua mọi thử thách. Với Thousands
              Edu, chúng tôi tin rằng khi con người được kết nối đúng cách, tri
              thức sẽ không còn là điều xa vời, mà trở thành hành trang vững
              chắc trên con đường phát triển toàn diện."
            </p>
          </div>
          <img
            src={image}
            alt="Gia sư tận tâm"
            style={{ flex: "0 0 320px", maxWidth: "320px", borderRadius: 12 }}
          />
        </div>
      </section>

      {/* Section 2: Image Left - Text Right + Button */}
      <section id="motivation">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <img
            src={image2}
            alt="Khích lệ và động viên"
            style={{ flex: "0 0 320px", maxWidth: "320px", borderRadius: 12 }}
          />
          <div style={{ flex: 1, paddingLeft: 32 }}>
            <h1 className="anim-title">
              Khích Lệ và Động Viên: Chìa Khóa Cho Thành Công
            </h1>
            <p>
              Thông qua sự tương tác tích cực, tinh thần đồng hành và sự thấu
              hiểu, gia sư tạo nên một môi trường học tập đầy hứng khởi — nơi
              mỗi buổi học không chỉ là một bài giảng, mà là một hành trình khám
              phá, phát triển và trưởng thành. Chính sự khích lệ đúng lúc, sự
              động viên chân thành và niềm tin mà gia sư trao gửi đã trở thành
              chất xúc tác quan trọng, giúp học sinh khai phá tiềm năng và chạm
              tới những thành công bền vững.
            </p>
          </div>
        </div>
      </section>

      {/* Search section with hierarchical selects */}
      <section id="search">
        <h2 className="anim-title">Tìm kiếm lớp học</h2>
        <div className="search-row">
          <select>
            <option>Chọn tỉnh/thành phố</option>
            <option>Hà Nội</option>
            <option>Hồ Chí Minh</option>
            <option>Đà Nẵng</option>
          </select>
          <select>
            <option>Chọn quận/huyện</option>
            <option>Quận 1</option>
            <option>Quận 2</option>
            <option>Quận 3</option>
          </select>
          <select>
            <option>Chọn xã/phường</option>
            <option>Phường A</option>
            <option>Phường B</option>
          </select>
          <button className="read-more-btn">Tìm</button>
        </div>
      </section>

      {/* Tutor cards replacing policy */}
      <section id="policy">
        <h2 className="anim-title">Gia sư tiêu biểu</h2>
        <div className="tutor-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="tutor-card">
              <div className="tutor-avatar" />
              <div className="tutor-info">
                <h3>Gia sư {i}</h3>
                <p>Thành tích: HSG, chuyên môn Toán/Lý</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="anim-title">Liên hệ hỗ trợ</h2>
        <p>Zalo: 0123456789 | Email: support@ThousandsEdu.vn</p>
      </section>
    </main>
  );
};

export default Home;
