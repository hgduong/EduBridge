import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col, Divider } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUserProfile } from "../../services/authService";
const EditProfile = ({ user }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user, form]);

  const handleSubmit = async (values) => {
    try {
      const result = await updateUserProfile(user._id, values);
      toast.success("🎉 Thông tin đã được cập nhật thành công!");
    } catch (error) {
      toast.error("❌ Lỗi khi cập nhật thông tin.");
    }
  };

  if (!user) return <p>Không có dữ liệu người dùng để chỉnh sửa.</p>;

  const isTutor = user.role === "tutor";
  const isStudent = user.role === "student";

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: 24,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: 24 }}>✏️ Chỉnh sửa hồ sơ</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="full_name" label="Họ tên">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="email" label="Email">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="phone_number" label="Số điện thoại">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="gender" label="Giới tính">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="address" label="Địa chỉ">
          <Input />
        </Form.Item>

        <Divider orientation="left">Thông tin bổ sung</Divider>

        {/* Gia sư */}
        <Form.Item name="major" label="Chuyên môn">
          <Input
            disabled={!isTutor}
            placeholder={isTutor ? "" : "Chỉ dành cho gia sư"}
          />
        </Form.Item>
        <Form.Item name="experience" label="Kinh nghiệm (năm)">
          <Input
            type="number"
            disabled={!isTutor}
            placeholder={isTutor ? "" : "Chỉ dành cho gia sư"}
          />
        </Form.Item>
        <Form.Item name="certificate" label="Chứng chỉ">
          <Input
            disabled={!isTutor}
            placeholder={isTutor ? "" : "Chỉ dành cho gia sư"}
          />
        </Form.Item>

        {/* Học sinh */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="school" label="Trường">
              <Input
                disabled={!isStudent}
                placeholder={isStudent ? "" : "Chỉ dành cho học sinh"}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="class" label="Lớp">
              <Input
                disabled={!isStudent}
                placeholder={isStudent ? "" : "Chỉ dành cho học sinh"}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            💾 Lưu thay đổi
          </Button>
        </Form.Item>

        <ToastContainer />
      </Form>
    </div>
  );
};

export default EditProfile;
