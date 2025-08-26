import React from "react";

const Policy = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Chính sách bảo vệ người dùng</h2>
      <p style={styles.paragraph}>
        Tại <b>Thousands Edu</b>, chúng tôi cam kết xây dựng một môi trường giáo dục an toàn, minh bạch và đáng tin cậy cho tất cả người dùng — bao gồm học viên, phụ huynh và gia sư. 
        Chính sách này được thiết lập nhằm bảo vệ <b>quyền lợi, thông tin cá nhân</b> và đảm bảo trải nghiệm công bằng trong suốt quá trình sử dụng hệ thống.
      </p>

      <h3 style={styles.subHeading}>1. Bảo mật thông tin cá nhân</h3>
      <p style={styles.paragraph}>
        • Mọi thông tin cá nhân do người dùng cung cấp đều được <b>mã hóa và lưu trữ an toàn</b> trên hệ thống.<br />
        • Chúng tôi tuyệt đối <b>không chia sẻ, mua bán hoặc trao đổi dữ liệu</b> với bên thứ ba nếu không có sự đồng ý rõ ràng từ người dùng.<br />
        • Người dùng có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân bất cứ lúc nào.
      </p>

      <h3 style={styles.subHeading}>2. Xác thực và quản lý tài khoản</h3>
      <p style={styles.paragraph}>
        • Mỗi tài khoản được xác thực thông qua <b>email</b> hoặc <b>số điện thoại</b> để đảm bảo tính chính chủ.<br />
        • Gia sư phải trải qua quy trình kiểm duyệt hồ sơ kỹ lưỡng trước khi được phép hoạt động.<br />
        • Người dùng có thể <b>báo cáo tài khoản vi phạm</b>, hệ thống sẽ xử lý trong vòng 24h.
      </p>

      <h3 style={styles.subHeading}>3. An toàn trong quá trình tương tác</h3>
      <p style={styles.paragraph}>
        • Tất cả các <b>buổi học, tin nhắn và giao dịch</b> đều được ghi nhận để đảm bảo tính minh bạch.<br />
        • Hành vi quấy rối, lừa đảo, gian lận học phí hoặc vi phạm chuẩn mực đạo đức sẽ bị <b>xử lý nghiêm khắc</b> (cảnh cáo, khóa tài khoản hoặc báo cáo cơ quan pháp luật).<br />
        • Người dùng được khuyến khích <b>thanh toán trực tiếp qua hệ thống</b> để tránh rủi ro ngoài ý muốn.
      </p>

      <h3 style={styles.subHeading}>4. Hỗ trợ và phản hồi</h3>
      <p style={styles.paragraph}>
        • Người dùng có thể liên hệ với đội ngũ hỗ trợ qua <b>email, hotline hoặc chat trực tiếp</b> trên nền tảng.<br />
        • Mọi phản hồi về <b>dịch vụ, chất lượng giảng dạy hoặc vấn đề kỹ thuật</b> đều được tiếp nhận nghiêm túc và xử lý trong thời gian sớm nhất.<br />
        • Chúng tôi cam kết luôn lắng nghe và <b>cải thiện hệ thống dựa trên phản hồi thực tế</b> từ cộng đồng.
      </p>

      <h3 style={styles.subHeading}>5. Cập nhật chính sách</h3>
      <p style={styles.paragraph}>
        • Chính sách bảo vệ người dùng sẽ được <b>cập nhật định kỳ</b> để phù hợp với quy định pháp luật và nhu cầu thực tế.<br />
        • Người dùng sẽ được thông báo rõ ràng khi có <b>thay đổi quan trọng</b> liên quan đến quyền lợi hoặc dữ liệu cá nhân.<br />
        • Việc tiếp tục sử dụng dịch vụ sau khi chính sách thay đổi đồng nghĩa với việc bạn <b>đồng ý tuân thủ các điều chỉnh mới</b>.
      </p>

      <h3 style={styles.subHeading}>6. Cam kết của chúng tôi</h3>
      <p style={styles.paragraph}>
        • Chúng tôi hướng đến việc tạo ra một môi trường học tập <b>an toàn – minh bạch – hiệu quả</b> cho tất cả mọi người.<br />
        • Mỗi người dùng đều được tôn trọng và bảo vệ quyền lợi chính đáng.<br />
        • Thousands Edu luôn nỗ lực để trở thành <b>nền tảng kết nối giáo dục hàng đầu</b>, nơi học viên và gia sư có thể hợp tác và phát triển bền vững.
      </p>
    </div>
  );
};

export default Policy;

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    minHeight: "80vh",
    lineHeight: 1.8,
    color: "var(--color-black)",
  },
  heading: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "20px",
    color: "var(--color-primary)",
  },
  subHeading: {
    fontSize: "20px",
    marginTop: "30px",
    marginBottom: "8px",
    color: "var(--color-secondary)",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "10px",
    textAlign: "justify",
  },
};
