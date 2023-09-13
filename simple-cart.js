const shoppingCart =[
    {name:"shoe",price:1200},
    {name:"shirt",price:2200},
    {name:"pant",price:1200},
    {name:"belt",price:200},
    {name:"book",price:5200},
    {name:"waterJar",price:3200}
]
function toCalculateTotalPrice(products){
    let totalCost = 0;
    for (const each of shoppingCart) {
        totalCost += each.price;
    }
    return totalCost;

}

const cartPrice = toCalculateTotalPrice(shoppingCart);
console.log(cartPrice);
