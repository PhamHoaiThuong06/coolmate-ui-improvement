# NHẬT KÝ SỬ DỤNG TRÍ TUỆ NHÂN TẠO (AI USAGE REPORT)

**Học phần:** Phát triển Website & Phân tích Nghiệp vụ E-Commerce  
**Sinh viên thực hiện:** Phạm Hoài Thương  
**Dự án:** Cải tiến giao diện website Coolmate (coolmate-ui-improvement)  

---

## 1. Mục đích sử dụng AI
- Hỗ trợ khảo sát, đánh giá và lập báo cáo phân tích trải nghiệm người dùng (UX) và nghiệp vụ (BA) trên website Coolmate.me.
- Đề xuất giải pháp và sinh mã nguồn khởi tạo (HTML5, CSS3, JavaScript) cho giao diện danh sách sản phẩm mẫu chuẩn responsive.
- Rèn luyện kỹ năng phản biện kết quả AI: kiểm tra chéo thực tế, phát hiện lỗi suy diễn/hallucination và tự sửa lỗi mã nguồn.

---

## 2. Nhật ký Prompt và Kết quả AI (Prompt Logs)

### Giai đoạn 1: Khảo sát & Phân tích nghiệp vụ (Nhiệm vụ 2)
* **Công cụ:** Trí tuệ nhân tạo (Mô hình ngôn ngữ lớn LLM).
* **Prompt 1:**
  > *"Đóng vai trò là Chuyên viên Phân tích nghiệp vụ (BA) và Trải nghiệm người dùng (UX), hãy khảo sát và phân tích website Coolmate (coolmate.me) qua 5 khu vực chính: Trang chủ, Danh mục sản phẩm, Chi tiết sản phẩm, Tìm kiếm, Giỏ hàng. Nêu mục đích, thành phần ghi nhận, điểm thuận tiện, vấn đề tiềm ẩn và đề xuất cải tiến."*
* **Tóm tắt phản hồi của AI:** AI đưa ra khung sườn phân tích 5 khu vực theo góc nhìn lý thuyết.
* **Đối chiếu thực tế & Phản biện của sinh viên:**
  - AI thừa nhận chưa truy cập trực tiếp giỏ hàng nên suy đoán giỏ hàng thiếu biến thể/phí vận chuyển $\rightarrow$ Thực tế Coolmate đã làm rất tốt mô hình 1-page checkout và cho đổi size/màu trực tiếp trong giỏ.
  - AI đề xuất tóm tắt chất liệu vải $\rightarrow$ Thực tế Coolmate đã có sẵn bảng so sánh 4 dòng vải (CoolSoft, CoolDry, CoolRib, CoolFlex) và thanh Sticky Bar ở trang chi tiết.
  - Sinh viên đã loại bỏ các điểm AI suy đoán thiếu bằng chứng và bổ sung các phát hiện thực tế.

---

### Giai đoạn 2: Tạo mã nguồn giao diện cải tiến (Nhiệm vụ 3)
* **Công cụ:** ChatGPT (OpenAI).
* **Prompt 2:**
  > *"Hãy đóng vai trò là một Frontend Developer. Hãy xây dựng một giao diện website thương mại điện tử mẫu bán quần áo thời trang theo phong cách thương hiệu Coolmate bằng HTML5, CSS3 và JavaScript thuần. Yêu cầu: Hiển thị tối thiểu 4 sản phẩm mẫu (có ảnh sản phẩm, tên, giá bán, giá khuyến mãi), có bố cục Responsive tự co giãn lưới trên máy tính và điện thoại di động, có nút 'Thêm vào giỏ hàng' mô phỏng tăng số lượng trên thanh menu. Mã nguồn chia thành các file riêng biệt: index.html, style.css, script.js và file README.md hướng dẫn."*
* **Tóm tắt phản hồi của AI:** AI sinh trọn bộ mã nguồn dạng file ZIP gồm `index.html`, `style.css`, `script.js` và `README.md` với giao diện "Coolmate Studio" chứa 4 sản phẩm mẫu.

---

## 3. Kiểm thử thực tế và Phát hiện lỗi từ mã nguồn AI

Sinh viên đã chạy file `index.html` trên Google Chrome, dùng công cụ **Chrome DevTools (F12)** để giả lập giao diện máy tính (Desktop) và điện thoại (Mobile Viewport) và phát hiện các hạn chế:

1. **Lỗi lệch độ cao thẻ sản phẩm (Uneven Card Heights):**
   - *Nguyên nhân:* Tên các sản phẩm có độ dài ngắn khác nhau (có sản phẩm 1 dòng, có sản phẩm 2-3 dòng).
   - *Hậu quả:* Các thẻ bị so le chiều cao, khiến hàng nút bấm "Thêm vào giỏ" ở đáy thẻ bị thụt thò không thẳng hàng, gây mất thẩm mỹ.
2. **Nút bấm trên điện thoại chưa tối ưu diện tích chạm (Touch Target):**
   - Khoảng đệm (padding) của nút mua hàng trên mobile còn nhỏ, dễ gây chạm nhầm khi thao tác bằng ngón tay cái.

---

## 4. Can thiệp kỹ thuật tự điều chỉnh của sinh viên

Sinh viên không sao chép thụ động toàn bộ mã nguồn do AI tạo ra mà đã trực tiếp mở file `style.css` và bổ sung đoạn mã từ **dòng 435 đến 445**:

```css
/* Sinh viên tự điều chỉnh: Căn đều chiều cao thẻ và nút mua hàng */
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card button, 
.btn-add-to-cart {
  margin-top: auto;
}
