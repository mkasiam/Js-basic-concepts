const cartIteam =[
    {PhoneName :"samsung",camera:"13MP",Storage:"32GB", price:34000, color:"balck",quantity:5},
    {PhoneName :"Walton",camera:"10MP",Storage:"32GB", price:15000 , color:"yellow",quantity:5},
    {PhoneName :"Iphone",camera:"10MP",Storage:"32GB", price:20050 , color:"red",quantity:5},
    {PhoneName :"Xiomi",camera:"10MP",Storage:"32GB", price:50580 , color:"purple",quantity:5},
    {PhoneName :"Nokia",camera:"10MP",Storage:"32GB", price:1000 , color:"black",quantity:5},          
    {PhoneName :"HTC",camera:"10MP",Storage:"32GB", price:50000 , color:"slamon",quantity:5},          
];
function calculateTotalCost(price){
    let totalCost = 0;
    for (const iteams of cartIteam) {
        const productTotal = iteams.price * iteams.quantity;
        totalCost +=productTotal; 

    }
    return totalCost;
}

let CartCost = calculateTotalCost(cartIteam);
console.log(CartCost);
