const shoppingCart = [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 15 },
    // Add more product objects here...
  ];
  
  function calculateTotalCost(cart) {
    let totalCost = 0;
  
    for (const product of cart) {
      totalCost += product.price;
    }
  
    return totalCost;
  }
  
  const totalCost = calculateTotalCost(shoppingCart);
  console.log("Total cost of products in the shopping cart:", totalCost);
  