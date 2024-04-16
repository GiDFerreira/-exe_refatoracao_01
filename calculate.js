/*
Exercício 1
*/

function calculateTotalPrice(products) {
    const totalPrice = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const discount = totalPrice > 100 ? 0.1 : 0;
    const shippingCost = totalPrice < 50 ? 5 : 0;
    const finalPrice = totalPrice * (1 - discount) + shippingCost;
    return finalPrice.toFixed(2);
}


