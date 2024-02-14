// Add a click event listener to the "Add to Cart" button
var addToCartButton = document.querySelector('.add-to-cart');

addToCartButton.addEventListener('click', function() {
	// Increase the cart count by 1
	var cartCount = document.querySelector('.cart-count');
	cartCount.innerText = parseInt(cartCount.innerText) + 1;

	// Show a message that the item has been added to the cart
	var message = document.createElement('div');
	message.innerText = 'Item added to cart!';
	message.classList.add('message');
	document.body.appendChild(message);

	// Hide the message after 2 seconds
	setTimeout(function() {
		message.remove();
	}, 2000);
});
