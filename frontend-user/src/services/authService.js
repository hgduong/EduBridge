// authService.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const registerUser = async (userData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || "Đăng ký thất bại");
    }

    return await res.json();
  } catch (err) {
    console.error("Lỗi đăng ký:", err.message);
    throw err;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Đăng nhập thất bại");
    }

    // Lưu token vào localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data;
  } catch (error) {
    console.error("Lỗi đăng nhập:", error.message);
    throw error;
  }
};

export const getUserById = async (role, id) => {
  try {
    const cleanId = id.trim(); // loại bỏ xuống dòng hoặc khoảng trắng
    const res = await fetch(
      `${API_BASE_URL}/api/auth/users/${role}/${cleanId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || "Không lấy được thông tin người dùng");
    }

    return await res.json();
  } catch (err) {
    console.error("Lỗi getUserById:", err.message);
    throw err;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/getAllUsers`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || "Không lấy được danh sách người dùng");
    }

    return await res.json();
  } catch (err) {
    console.error("Lỗi getAllUsers:", err.message);
    throw err;
  }
};

export const updateUserProfile = async (userId, updatedData) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE_URL}/api/auth/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || "Cập nhật thông tin thất bại");
    }

    return await res.json();
  } catch (err) {
    console.error("Lỗi updateUserProfile:", err.message);
    throw err;
  }
};
