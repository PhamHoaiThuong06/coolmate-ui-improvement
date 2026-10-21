// JavaScript thuần: mô phỏng số lượng sản phẩm trong giỏ hàng trên giao diện.
// Dữ liệu chỉ tồn tại trong phiên mở trang, không gửi đơn hàng và không dùng backend.
const cartCount = document.querySelector("#cart-count");
const toast = document.querySelector("#toast");
const addButtons = document.querySelectorAll(".add-to-cart");

let count = 0;
let toastTimeout;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = String(count);

    const productName = button.dataset.product;
    toast.textContent = `Đã thêm “${productName}” vào giỏ hàng mẫu.`;
    toast.classList.add("is-visible");

    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2600);
  });
});
