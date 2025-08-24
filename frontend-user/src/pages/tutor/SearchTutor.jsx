import React from 'react';
import '../../App.css';
import AppHorizontalButtons from '../../components/common/AppHorizontalButtons';

const SearchTutor = () => {
    return (
        <div>
            <div className='search-tutor-container'></div>

            <div className="search-container">
                <h2>Tìm kiếm</h2>
                <div className="search-inputs">
                    {/* Hàng 1 */}
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

                    <input
                        list="routes"
                        className="search-input"
                        placeholder="Lộ trình"
                    />
                    <datalist id="routes">
                        <option value="1 ngày" />
                        <option value="1 tuần" />
                        <option value="1 tháng" />
                        <option value="2 tháng" />
                    </datalist>

                    {/* Hàng 2 */}
                    <input
                        list="cities"
                        className="search-input city"
                        placeholder="Thành phố"
                    />
                    <datalist id="cities">
                        <option value="Hà Nội" />
                        <option value="Hồ Chí Minh" />
                        <option value="Đà Nẵng" />
                    </datalist>

                    <input
                        list="districts"
                        className="search-input district"
                        placeholder="Quận / Huyện"
                    />
                    <datalist id="districts">
                        <option value="Cầu Giấy" />
                        <option value="Thanh Xuân" />
                        <option value="Hải Châu" />
                    </datalist>

                    <input
                        list="wards"
                        className="search-input ward"
                        placeholder="Xã"
                    />
                    <datalist id="wards">
                        <option value="Dịch Vọng" />
                        <option value="Hòa Hải" />
                    </datalist>

                    <select className="search-input gender">
                        <option>Giới tính</option>
                        <option>Nam</option>
                        <option>Nữ</option>
                        <option>Cả hai</option>
                    </select>
                </div>
            </div>

            {/* Hàng nút scroll ngang */}
                <AppHorizontalButtons />
        </div>
    )
}

export default SearchTutor;