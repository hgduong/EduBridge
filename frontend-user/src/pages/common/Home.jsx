// src/pages/Home.jsx

import "../../assets/styles/HomePage.css";
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import image from "../../assets/images/image.png";
import image2 from "../../assets/images/img2.png";

const Home = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.anim-title');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.28 }
    );
    els.forEach((el) => {
      el.classList.add('pre-anim');
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
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main id="home">
      {/* Section 1: Text Left - Image Right */}
      <section id="about">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: 1, paddingRight: 32 }}>
            <h1 className="anim-title">Gia Sư Tận Tâm, Kiến Thức Vững Chắc</h1>
            <p>Thousands Edu là nền tảng kết nối học viên và gia sư chất lượng...</p>
            <p style={{ marginTop: 16 }}>
              Mỗi buổi học là một hành trình khám phá tri thức, nơi gia sư đóng vai trò người dẫn đường, giúp học sinh vượt qua mọi thử thách. Sự tận tâm của gia sư là yếu tố then chốt tạo nên thành công.
            </p>
          </div>
          <img src={image} alt="Gia sư tận tâm" style={{ flex: '0 0 320px', maxWidth: '320px', borderRadius: 12 }} />
        </div>
      </section>

      {/* Section 2: Image Left - Text Right + Button */}
      <section id="motivation">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <img src={image2} alt="Khích lệ và động viên" style={{ flex: '0 0 320px', maxWidth: '320px', borderRadius: 12 }} />
          <div style={{ flex: 1, paddingLeft: 32 }}>
            <h1 className="anim-title">Khích Lệ và Động Viên: Chìa Khóa Cho Thành Công</h1>
            <p>
              Gia sư không chỉ truyền đạt kiến thức mà còn là nguồn động lực to lớn, giúp các em tự tin hơn trong học tập và cuộc sống. Sự tương tác tích cực tạo nên một môi trường học tập đầy hứng khởi.
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
          {[1,2,3,4,5,6].map(i => (
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
  )
}

export default Home
