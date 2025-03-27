fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById('products');
        const productSelect = document.getElementById('product');

        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <img src="${product.image}" alt="${product.name}" width="100">
            `;
            productsContainer.appendChild(productDiv);

            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    });

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const orderDetails = {
        product: document.getElementById('product').value,
        quantity: document.getElementById('quantity').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value
    };

    console.log('Order Submitted:', orderDetails);
    alert('Order placed successfully!');
});

