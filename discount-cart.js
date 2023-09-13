function calculateDiscountedPrice(price, discounts) {
    // Initialize the discounted price to the original price.
    let discountedPrice = price;
  
    // Iterate over the discounts array.
    for (let discount of discounts) {
      // If the current discount applies to the product, then apply the discount.
      if (price >= discount.minimumPrice) {
        discountedPrice = discountedPrice * (1 - discount.percentage / 100);
      }
    }
  
    // Return the discounted price.
    return discountedPrice;
  }
  
  // Example usage
  const price = 100;
  const discounts = [
    {
      percentage: 10,
      minimumPrice: 50,
    },
    {
      percentage: 20,
      minimumPrice: 100,
    },
  ];
  
  const discountedPrice = calculateDiscountedPrice(price, discounts);
  console.log(discountedPrice); // 72
  