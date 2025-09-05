// src/pages/Home.jsx
import "../../assets/styles/HomePage.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import image from "../../assets/images/image.png";
import image2 from "../../assets/images/img2.png";
import AddressSelector from "../../components/Location/AddressSelector";
import AppIcon from "../../config/AppIcon";
import WebButton from "../../components/common/WebButton";
import WebStudentFeedback from "../../components/common/WebStudentFeedback";
import { mockFeedbackData } from "../../mock/student/FeedbackMockData";

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
    <main id="home" style={styles.main}>
      {/* Section 1: Text Left - Image Right */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.flexRow}>
          <div style={styles.textCol}>
            <h1 className="anim-title" style={styles.heading}>
              Thousand Education
            </h1>

            <p style={styles.contactLine}>
              <AppIcon name="phone" />
              <span style={styles.contactText}>Hotline 039 619 6205</span>
            </p>

            <p style={styles.contactLine}>
              <AppIcon name="location" />
              <span style={styles.contactText}>
                Số 219, tòa Central Point, phường Trung Kính, quận Cầu Giấy, thành phố Hà Nội
              </span>
            </p>

            <p style={styles.description}>
              Thousand Education là trung tâm gia sư uy tín, chuyên kết nối học viên và gia sư chất lượng cao.
              Với đội ngũ gia sư tận tâm, giàu kinh nghiệm và phương pháp giảng dạy hiện đại,
              chúng tôi cam kết mang đến hành trình học tập hiệu quả, khơi dậy tiềm năng
              và tạo dựng nền tảng kiến thức vững chắc cho học viên.
            </p>

            <WebButton text="Xem thêm" padding="12px 32px" backgroundColor="var(--color-white)" textColor="var(--color-primary)" borderColor="var(--color-primary)" hoverBackgroundColor="var(--color-primary)" hoverTextColor="var(--color-white)" hoverBorderColor="var(--color-primary)" borderRadius="22px" />
          </div>

          <img
            src={image}
            alt="Thousand Education"
            style={styles.aboutImage}
          />
        </div>
      </section>

      {/* Section 2: Image Left - Text Right + Button */}
      <section id="motivation">
        <div style={styles.flexRow}>
          <img
            src={image2}
            alt="Khích lệ và động viên"
            style={styles.aboutImage}
          />
          <div style={styles.textColReverse}>
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
        <AddressSelector />
      </section>

      {/* Feedback Section */}
      <section id="feedback" style={styles.feedback}>
        <h2 style={styles.feedbackTitle}>
          <span style={styles.highlight}>Phản hồi</span> từ các <span style={styles.highlight}>học viên</span>
        </h2>

        <div style={styles.feedbackRow1}>
          {mockFeedbackData.slice(0, 2).map((item, index) => (
            <WebStudentFeedback
              key={item.id || index}
              name={item.name}
              feedback={item.feedback}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>

        <div style={styles.feedbackRow2}>
          {mockFeedbackData.slice(2, 4).map((item, index) => (
            <WebStudentFeedback
              key={item.id || index}
              name={item.name}
              feedback={item.feedback}
              rating={item.rating}
              image={item.image}
            />
          ))}
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

const styles = {
  main: {
    backgroundColor: "var(--color-white)",
  },
  aboutSection: {
    padding: "0px 20px",
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 32,
    flexWrap: "wrap",
  },
  textCol: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 32,
    maxWidth: "50%",
  },
  textColReverse: {
    flex: 1,
    paddingLeft: 32,
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: 20,
    color: "var(--color-primary)",
  },
  aboutImage: {
    flex: 1,
    maxWidth: "50%",
    width: "20%",
    borderRadius: 16,
    objectFit: "cover",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  contactLine: {
    margin: "12px 0",
    display: "flex",
    alignItems: "center",
  },
  contactText: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginLeft: 8,
    color: "#333",
  },
  description: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "justify",
    lineHeight: 1.7,
    fontSize: "1rem",
    color: "#555",
  },
  feedback: {
    marginBottom: 100,
  },
  feedbackTitle: {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "var(--color-black)",
  },
  highlight: {
    color: "var(--color-primary)",
  },
  feedbackRow1: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "80px",
    marginLeft: "24px",
    textAlign: "start",
  },
  feedbackRow2: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "80px",
    marginRight: "24px",
    textAlign: "end",
    marginTop: "40px",
  },
};