import React, { useEffect, useState } from "react";

const AddressSelector = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("0");
  const [selectedDistrict, setSelectedDistrict] = useState("0");

  // Lấy tỉnh
  useEffect(() => {
    fetch("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((res) => res.json())
      .then((data) => {
        if (data.error === 0) setProvinces(data.data);
      });
  }, []);

  // Lấy quận khi chọn tỉnh
  useEffect(() => {
    if (selectedProvince !== "0") {
      fetch(`https://esgoo.net/api-tinhthanh/2/${selectedProvince}.htm`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error === 0) {
            setDistricts(data.data);
            setWards([]);
            setSelectedDistrict("0");
          }
        });
    }
  }, [selectedProvince]);

  // Lấy phường khi chọn quận
  useEffect(() => {
    if (selectedDistrict !== "0") {
      fetch(`https://esgoo.net/api-tinhthanh/3/${selectedDistrict}.htm`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error === 0) setWards(data.data);
        });
    }
  }, [selectedDistrict]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <select
        value={selectedProvince}
        onChange={(e) => setSelectedProvince(e.target.value)}
        style={selectStyle}
      >
        <option value="0">Tỉnh Thành</option>
        {provinces.map((p) => (
          <option key={p.id} value={p.id}>
            {p.full_name}
          </option>
        ))}
      </select>

      <select
        value={selectedDistrict}
        onChange={(e) => setSelectedDistrict(e.target.value)}
        style={selectStyle}
      >
        <option value="0">Quận Huyện</option>
        {districts.map((d) => (
          <option key={d.id} value={d.id}>
            {d.full_name}
          </option>
        ))}
      </select>

      <select style={selectStyle}>
        <option value="0">Phường Xã</option>
        {wards.map((w) => (
          <option key={w.id} value={w.id}>
            {w.full_name}
          </option>
        ))}
      </select>
    </div>
  );
};

const selectStyle = {
  display: "inline-block",
  width: "25%",
  padding: "5px",
  margin: "5px 2%",
  border: "1px solid #686868",
  borderRadius: "5px",
  fontSize: "16px",
};

export default AddressSelector;
