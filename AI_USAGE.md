# AI_USAGE.md – NHẬT KÝ SỬ DỤNG AI

## 1. Thông tin bài tập

- **Học phần:** Phát triển ứng dụng WEB/TMĐT
- **Giảng viên:** TS Nguyễn Mạnh Tuấn
- **Bài tập:** Bài tập cá nhân Buổi 2 – HTML5 và CSS3
- **Dự án:** Coolmate Studio – Website cửa hàng thời trang
- **Công cụ AI sử dụng:** ChatGPT

## 2. Mục đích sử dụng AI

Trong quá trình thực hiện bài tập cá nhân Buổi 2, em sử dụng ChatGPT để hỗ trợ phân tích mã nguồn HTML/CSS đã xây dựng từ Buổi 1, giải thích các kiến thức liên quan và đề xuất những thay đổi phù hợp với giao diện hiện tại.

Em sử dụng AI như một công cụ hỗ trợ học tập, không yêu cầu xây dựng lại toàn bộ website. Các đề xuất được lựa chọn dựa trên mã nguồn hiện có và mục tiêu cải tiến của bài tập.

## 3. Quá trình sử dụng AI

| Bước | Nội dung AI hỗ trợ | Lựa chọn của sinh viên |
|---|---|---|
| Bước 1 | Phân tích giao diện và gợi ý khu vực cần cải tiến. | Lựa chọn khu vực sản phẩm nổi bật. |
| Bước 2 | Giải thích cấu trúc HTML5, các thẻ ngữ nghĩa, tiêu đề và thuộc tính alt. | Rà soát mã HTML hiện có. |
| Bước 3 | Hướng dẫn kiểm tra liên kết CSS bên ngoài. | Tiếp tục sử dụng tệp css/style.css từ Buổi 1. |
| Bước 4 | Đề xuất điều chỉnh CSS Selector và Box Model. | Đổi màu, tăng kích thước giá bán, làm nổi bật nút mua và giảm khoảng cách tên–giá. |
| Bước 5 | Giải thích cách căn chỉnh bằng Flexbox. | Lựa chọn căn giữa toàn bộ nội dung thông tin sản phẩm. |
| Bước 6 | Hướng dẫn điều chỉnh CSS Grid. | Chuyển từ 4 sản phẩm/hàng sang 2 sản phẩm/hàng và tăng khoảng cách. |
| Bước 7 | Đề xuất hiệu ứng Hover và Focus. | Nút mua chuyển đỏ và nổi lên khi đưa chuột vào. |
| Bước 8 | Phân tích vấn đề hiển thị trên màn hình nhỏ và đề xuất cách sửa. | Xem xét vấn đề menu bị ẩn trên điện thoại và phương án sửa bằng CSS. |

## 4. Các prompt tiêu biểu đã sử dụng

### Prompt 1 – CSS Selector và Box Model

**Yêu cầu gửi AI:**

"Tôi muốn đổi màu chữ của giá, tăng kích thước giá bán, làm nổi bật nút Thêm vào giỏ và thu hẹp khoảng cách giữa tên sản phẩm với giá. Hãy đề xuất CSS dựa trên mã nguồn hiện tại."

**Kết quả:** AI đề xuất điều chỉnh các bộ chọn `.product-info h3`, `.product-bottom`, `.product-price` và `.add-to-cart` bằng những thuộc tính như `color`, `font-size`, `margin`, `padding` và `border`.

### Prompt 2 – Flexbox

**Yêu cầu gửi AI:**

"Tôi muốn căn giữa toàn bộ nội dung trong các thẻ sản phẩm, gồm loại sản phẩm, tên, giá bán và nút Thêm vào giỏ. Giữ nguyên màu sắc đã chỉnh trước đó."

**Kết quả:** AI đề xuất sử dụng `display: flex`, `flex-direction: column`, `align-items: center`, `justify-content: center` và `text-align: center`.

### Prompt 3 – CSS Grid

**Yêu cầu gửi AI:**

"Tôi muốn các sản phẩm cách xa nhau hơn và hai sản phẩm nằm chung một hàng."

**Kết quả:** AI đề xuất `grid-template-columns: repeat(2, minmax(0, 1fr))`, `column-gap: 36px` và `row-gap: 40px`.

### Prompt 4 – Hover và Focus

**Yêu cầu gửi AI:**

"Tôi muốn nút Thêm vào giỏ chuyển màu đỏ và nổi lên khi đưa chuột vào, còn bình thường giữ màu xanh lá."

**Kết quả:** AI đề xuất sử dụng `:hover`, `transform: translateY(-5px)`, `box-shadow`, `transition`, `:active` và `:focus-visible`.

### Prompt 5 – Kiểm tra giao diện

**Yêu cầu gửi AI:**

"Tôi đã hoàn thành cải tiến HTML/CSS. Hãy phân tích mã nguồn, xác định một vấn đề có thể xảy ra trên giao diện và đề xuất cách sửa ít thay đổi nhất, không viết lại toàn bộ mã nguồn."

**Kết quả:** AI chỉ ra quy tắc `.main-nav { display: none; }` trong Media Query có thể khiến menu điều hướng bị ẩn trên điện thoại và đề xuất cách bố trí lại menu bằng Flexbox.

## 5. Đánh giá và điều chỉnh đề xuất của AI

Trong quá trình sử dụng ChatGPT, em nhận thấy không phải mọi đề xuất ban đầu đều phù hợp với mục tiêu cải tiến.

Ở Bước 5, AI ban đầu đề xuất điều chỉnh khoảng cách và căn chỉnh thanh header. Tuy nhiên, website đã có Flexbox trong header từ Buổi 1 nên thay đổi không rõ rệt. Vì vậy, em điều chỉnh yêu cầu và lựa chọn căn giữa toàn bộ nội dung trong các thẻ sản phẩm.

Ở Bước 7, em xác định màu xanh của nút “Thêm vào giỏ”