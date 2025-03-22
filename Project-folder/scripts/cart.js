const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");

// استعادة بيانات السلة من localStorage
const savedItems = localStorage.getItem("cartItems");
const savedTotal = localStorage.getItem("totalPrice");

if (savedItems) {
    cartItems.innerHTML = savedItems;
}

if (savedTotal) {
    totalPriceElement.textContent = (parseFloat(savedTotal) || 0).toFixed(2);
}

// العودة إلى القائمة
document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "index.html";  // العودة إلى صفحة القائمة
});