const products = [
    { id: 1, name: "Яблука", category: "Фрукти", price: 25 },
    { id: 2, name: "Банани", category: "Фрукти", price: 40 },
    { id: 3, name: "Апельсини", category: "Фрукти", price: 30 },
    { id: 4, name: "Морква", category: "Овочі", price: 15 },
    { id: 5, name: "Картопля", category: "Овочі", price: 10 },
    { id: 6, name: "Капуста", category: "Овочі", price: 20 },
    { id: 7, name: "Молоко", category: "Молочні продукти", price: 28 },
    { id: 8, name: "Сир", category: "Молочні продукти", price: 50 },
    { id: 9, name: "Йогурт", category: "Молочні продукти", price: 35 },
];

function showProducts(category) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => {
        if (product.category === category) {
            const li = document.createElement("li");
            li.textContent = product.name;
            li.addEventListener("click", () => {
                showProductInfo(product);
            });
            productList.appendChild(li);
        }
    });
}

function showProductInfo(product) {
    const productInfo = document.getElementById("productInfo");
    productInfo.textContent = `Назва: ${product.name}. Ціна: ${product.price} грн.`;
    const buyBtn = document.getElementById("buyBtn");
    buyBtn.addEventListener("click", () => {
        addToCart(product);
        productInfo.textContent = "";
    });
}

function addToCart(product) {
    const cartList = document.getElementById("cartList");
    const li = document.createElement("li");
    li.textContent = `${product.name} - ${product.price} грн.`;
    cartList.appendChild(li);
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function loadCart() {
    const cartList = document.getElementById("cartList");
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - ${product.price} грн.`;
        cartList.appendChild(li);
    });
}

function clearCart() {
    localStorage.removeItem("cart");
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";
}

loadCart();