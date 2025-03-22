const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
let total = 0;

// استعادة عناصر السلة من localStorage
function loadCart() {
    const savedItems = localStorage.getItem("cartItems");
    const savedTotal = localStorage.getItem("totalPrice");
    
    if (savedItems) {
        cartItems.innerHTML = savedItems;
    }
    
    if (savedTotal) {
        total = parseFloat(savedTotal);
        totalPriceElement.textContent = total.toFixed(2);
    }
}

// إضافة حدث لكل عنصر في القائمة
document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
        const name = item.getAttribute("data-name");
        const price = parseFloat(item.getAttribute("data-price"));

        // إضافة العناصر إلى السلة
        const li = document.createElement("li");
        li.textContent = `${name} - $${price.toFixed(2)}`;
        cartItems.appendChild(li);

        // تحديث المجموع
        total += price;
        totalPriceElement.textContent = total.toFixed(2);
    });
});

// تخزين بيانات السلة في localStorage
document.getElementById("checkoutButton").addEventListener("click", () => {
    localStorage.setItem("cartItems", cartItems.innerHTML);
    localStorage.setItem("totalPrice", total.toFixed(2));
    window.location.href = "pages/Cart.html";  // الانتقال إلى صفحة السلة
});

// تحميل السلة عند فتح الصفحة
loadCart();