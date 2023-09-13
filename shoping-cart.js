const cartIteam =[
    {PhoneName :"samsung",camera:"13MP",Storage:"32GB", price:34000, color:"balck"},
    {PhoneName :"Walton",camera:"10MP",Storage:"32GB", price:15000 , color:"yellow"},
    {PhoneName :"Iphone",camera:"10MP",Storage:"32GB", price:20050 , color:"red"},
    {PhoneName :"Xiomi",camera:"10MP",Storage:"32GB", price:50580 , color:"purple"},
    {PhoneName :"Nokia",camera:"10MP",Storage:"32GB", price:1000 , color:"black"},          
    {PhoneName :"HTC",camera:"10MP",Storage:"32GB", price:50000 , color:"slamon"},          
];
function calculateTotalCost(price){
    let totalCost = 0;
    for (const iteams of cartIteam) {
        totalCost +=iteams.price; 
    }
    return totalCost;
}

let CartCost = calculateTotalCost(cartIteam);
console.log(CartCost);
