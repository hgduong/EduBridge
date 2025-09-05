const axios = require("axios");

exports.createQR = async (req, res) => {
  const { amount } = req.body;

  try {
    const response = await axios.post(
      "https://api.vietqr.io/v2/generate",
      {
        accountNo: "19038745310018",
        accountName: "NGUYEN HUY HOANG DUONG",
        acqId: 970407,
        amount: parseInt(amount),
        addInfo: "Thanh toan nhan lop",
        format: "text",
        template: "compact",
      },
      {
        headers: {
          "x-client-id": process.env.VIETQR_CLIENT_ID,
          "x-api-key": process.env.VIETQR_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const qrUrl = response.data?.data?.qrDataURL;
    res.json({ qrUrl });
  } catch (error) {
    console.error("Lỗi tạo QR:", error.response?.data || error.message);
    res.status(500).json({ message: "Không thể tạo mã QR" });
  }
};
