function calculateTotalCost(products) {
    // Initialize the total cost to 0.
    let totalCost = 0;
  
    // Iterate over the products array.
    for (let product of products) {
      // Add the price of the product to the total cost.
      totalCost += product.price;
    }
  
    // Return the total cost.
    return totalCost;
  }
  
  // Example usage
  const products = [
    {
      name: "iPhone 13 Pro",
      price: 999,
    },
    {
      name: "Samsung Galaxy S22 Ultra",
      price: 1199,
    },
    {
      name: "Google Pixel 6 Pro",
      price: 899,
    },
  ];
  
  const totalCost = calculateTotalCost(products);
  console.log(totalCost); // 3097
  