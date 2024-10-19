let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} has been added to your cart.`);
    updateCartTotal();
}

function updateCartTotal() {
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('cart-total').innerText = cartTotal;
}

function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.product} - $${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
    });
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartTotal();
    displayCartItems();
}

// Call this function when cart.html is loaded
if (document.getElementById('cart-items')) {
    displayCartItems();
}
