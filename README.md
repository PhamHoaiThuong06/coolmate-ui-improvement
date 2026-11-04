
# COOLMATE STUDIO – BÀI TẬP CÁ NHÂN BUỔI 2

**Học phần:** Phát triển ứng dụng WEB/TMĐT  
**Giảng viên:** TS Nguyễn Mạnh Tuấn  
**Sinh viên thực hiện:** [Họ và tên]  
**Mã số sinh viên:** [MSSV]

## 1. Giới thiệu bài tập

Coolmate Studio là website cửa hàng thời trang mẫu được xây dựng bằng HTML5, CSS3 và JavaScript trong Buổi 1.

Ở Buổi 2, em tiếp tục phát triển website dựa trên mã nguồn hiện có nhằm thực hành kiểm tra cấu trúc HTML5, liên kết CSS bên ngoài và cải tiến giao diện bằng CSS Selector, Box Model, Flexbox, CSS Grid và các hiệu ứng tương tác cơ bản.

Mục tiêu của bài tập là củng cố kiến thức HTML/CSS, rèn luyện kỹ năng chỉnh sửa mã nguồn và kiểm tra kết quả thực tế trên trình duyệt mà không xây dựng lại toàn bộ website.

## 2. Website tham khảo và khu vực đã cải tiến

**Website thực hành:** Coolmate Studio – Cửa hàng thời trang.

**Website tham khảo bên ngoài:** [Điền đường dẫn nếu có; nếu không có, ghi "Không sử dụng".]

Khu vực được lựa chọn cải tiến chủ yếu là **Sản phẩm nổi bật**, bao gồm bốn thẻ sản phẩm với hình ảnh, tên sản phẩm, giá bán và nút "Thêm vào giỏ".

Các nội dung cải tiến tập trung vào:
- Màu sắc và kích thước giá bán.
- Khoảng cách giữa tên sản phẩm và giá.
- Màu sắc và hiệu ứng tương tác của nút mua hàng.
- Căn chỉnh nội dung trong thẻ sản phẩm.
- Bố cục và khoảng cách giữa các thẻ.
- Kiểm tra giao diện trên các kích thước màn hình.

## 3. Những kỹ thuật HTML5/CSS3 đã thực hành

### HTML5

- Kiểm tra các thẻ ngữ nghĩa: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Rà soát các thẻ tiêu đề `h1`, `h2`, `h3`.
- Kiểm tra hình ảnh và thuộc tính `alt`.
- Kiểm tra liên kết nội bộ giữa các khu vực của website.
- Kiểm tra liên kết tệp CSS bên ngoài bằng thẻ `link`.

### CSS3

- **CSS Selector:** Class selector và descendant selector.
- **Box Model:** `margin`, `padding`, `border`, `border-radius`.
- **Flexbox:** `display: flex`, `flex-direction`, `align-items`, `justify-content`, `gap`.
- **CSS Grid:** `display: grid`, `grid-template-columns`, `column-gap`, `row-gap`.
- **Hover và Focus:** `:hover`, `:active`, `:focus-visible`.
- **Hiệu ứng:** `transition`, `transform`, `box-shadow`.
- **Responsive:** Media Query với `@media`.

## 4. Hướng dẫn chạy website

### Cách 1: Xem trực tuyến

Truy cập website:

https://phamhoaithuong06.github.io/coolmate-ui-improvement/

### Cách 2: Chạy từ mã nguồn

1. Truy cập repository trên GitHub.
2. Chọn **Code → Download ZIP**.
3. Giải nén thư mục dự án.
4. Mở tệp `index.html` bằng trình duyệt Google Chrome.
5. Giữ nguyên cấu trúc thư mục để các tệp HTML, CSS và JavaScript được liên kết đúng.

Cấu trúc thư mục:

```text
coolmate-ui-improvement/
├── css/
│   └── style.css
├── index.html
├── script.js
├── README.md
└── AI_USAGE.md
```

**Lưu ý:** Website sử dụng hình ảnh từ nguồn trực tuyến nên cần kết nối Internet để hiển thị đầy đủ.

## 5. Những thay đổi đã thực hiện

### Bước 2 – Kiểm tra HTML5

Rà soát các thẻ HTML ngữ nghĩa, hệ thống tiêu đề, liên kết nội bộ và thuộc tính mô tả hình ảnh.

### Bước 3 – Kiểm tra CSS bên ngoài

Kiểm tra thư mục `css`, tệp `style.css` và liên kết CSS trong `index.html`:

```html
<link rel="stylesheet" href="css/style.css">
```

### Bước 4 – CSS Selector và Box Model

- Tăng kích thước và đổi màu giá bán sang xanh lá đậm.
- Làm nổi bật nút "Thêm vào giỏ" với nền xanh lá và chữ trắng.
- Thu hẹp khoảng cách giữa tên sản phẩm và giá.
- Điều chỉnh các thuộc tính `margin`, `padding`, `border` và `border-radius`.

### Bước 5 – Flexbox

Sử dụng Flexbox để căn giữa loại sản phẩm, tên sản phẩm, giá bán và nút "Thêm vào giỏ" trong từng thẻ sản phẩm.

Các thuộc tính chính: `display: flex`, `flex-direction: column`, `align-items: center` và `justify-content: center`.

### Bước 6 – CSS Grid

Điều chỉnh bố cục từ bốn sản phẩm trên một hàng thành hai sản phẩm trên một hàng.

Tăng khoảng cách giữa các thẻ bằng:
- `column-gap: 36px`
- `row-gap: 40px`

Kết hợp Media Query để điều chỉnh bố cục trên màn hình nhỏ.

### Bước 7 – Hover và Focus

Bổ sung hiệu ứng tương tác cho nút "Thêm vào giỏ":

- Bình thường: Nền xanh lá, chữ trắng.
- Hover: Chuyển nền sang đỏ `#dc2626`.
- Transform: Nút di chuyển lên trên 5px.
- Box-shadow: Tạo bóng đổ khi đưa chuột vào.
- Focus-visible: Hiển thị viền khi điều hướng bằng bàn phím.

### Bước 8 – Kiểm tra và tự sửa giao diện

Sử dụng Chrome Developer Tools để kiểm tra website tại các chiều rộng 1366px, 768px và 390px.

**Vấn đề được lựa chọn để kiểm tra:** Menu điều hướng bị ẩn trên màn hình điện thoại do quy tắc `.main-nav { display: none; }`.

**Phương án đề xuất:** Sử dụng Flexbox và Media Query để hiển thị menu ở hàng thứ hai của header.

**Kết quả sửa và kiểm thử thực tế:** [Bổ sung sau khi thực hiện và xác nhận trên trình duyệt.]

## 6. Công cụ AI đã sử dụng và cách kiểm tra kết quả

### Công cụ AI

**ChatGPT** được sử dụng để hỗ trợ:
- Phân tích mã nguồn HTML/CSS hiện có.
- Giải thích các thẻ HTML và thuộc tính CSS.
- Đề xuất phương án cải tiến giao diện.
- Hướng dẫn thực hành Flexbox và CSS Grid.
- Đề xuất hiệu ứng Hover và Focus.
- Hỗ trợ phân tích vấn đề và cách kiểm tra giao diện.

### Cách kiểm tra kết quả

Em sử dụng Google Chrome và Chrome Developer Tools để:
- Kiểm tra khả năng mở trang HTML và tải CSS.
- Quan sát giao diện trước và sau khi chỉnh sửa.
- Kiểm tra hình ảnh và các liên kết.
- Kiểm tra bố cục ở chiều rộng 1366px, 768px và 390px.
- Kiểm tra nút "Thêm vào giỏ" và hiệu ứng Hover.
- Sử dụng phím Tab để kiểm tra trạng thái Focus.
- Chụp ảnh minh chứng và ghi nhận kết quả trong báo cáo.

Các gợi ý từ AI được đối chiếu với mã nguồn hiện có, lựa chọn và điều chỉnh theo mục tiêu thực hành. Sinh viên chịu trách nhiệm kiểm tra và đánh giá kết quả cuối cùng.

Thông tin chi tiết về quá trình sử dụng AI được trình bày trong tệp `AI_USAGE.md`.

## 7. Đường dẫn repository và website đã triển khai

- **GitHub Repository:** https://github.com/PhamHoaiThuong06/coolmate-ui-improvement
- **Website GitHub Pages:** https://phamhoaithuong06.github.io/coolmate-ui-improvement/

Dự án được lưu trữ trên GitHub để quản lý mã nguồn và theo dõi các thay đổi trong quá trình thực hành.


