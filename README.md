# Cải tiến Giao diện Website Coolmate

## 1. Giới thiệu
Dự án cải tiến giao diện hiển thị danh sách sản phẩm mẫu và tối ưu hóa thẻ sản phẩm (Product Card), khắc phục tình trạng lệch độ cao giữa các thẻ và tối ưu kích thước nút bấm trên thiết bị di động.

## 2. Website tham khảo
- Tên website: Coolmate
- URL: https://www.coolmate.me/
- Khu vực đã khảo sát: Trang chủ, Danh mục sản phẩm, Chi tiết sản phẩm, Tìm kiếm, Giỏ hàng.

## 3. Chức năng
- Hiển thị danh sách sản phẩm dạng lưới (Grid).
- Hiển thị hình ảnh, tên sản phẩm, giá bán và giá gốc gạch ngang.
- Tương tác tăng số lượng giỏ hàng khi bấm thêm sản phẩm.
- Bố cục responsive tự động thích ứng trên máy tính và điện thoại.

## 4. Công nghệ
- HTML5
- CSS3 (Flexbox, CSS Grid, Media Queries)
- JavaScript thuần

## 5. Cách chạy
- Mở file `index.html` trực tiếp bằng trình duyệt web (Chrome, Edge).
- Hoặc sử dụng Live Server trong VS Code.

## 6. Cải tiến đã thực hiện
- Vấn đề ban đầu: Tên sản phẩm có độ dài không đều làm chiều cao các thẻ bị so le, khiến nút "Thêm vào giỏ" ở chân thẻ bị thụt thò; trên mobile nút bấm có diện tích chạm nhỏ.
- Cải tiến: Áp dụng CSS Flexbox (`display: flex; flex-direction: column; height: 100%;`) kết hợp `margin-top: auto` cho nút mua hàng để toàn bộ nút luôn nằm thẳng hàng ở đáy thẻ. Tăng padding cho nút bấm trên màn hình điện thoại.

## 7. Hỗ trợ từ AI
- AI hỗ trợ: Tạo khung dự án mẫu ban đầu (HTML/CSS/JS) và đề xuất bộ khung tài liệu.
- Tự kiểm tra và điều chỉnh: Trực tiếp chạy thử trên Chrome DevTools, phát hiện lỗi lệch chiều cao thẻ và tự viết thêm CSS căn chỉnh độ cao cũng như nút bấm.