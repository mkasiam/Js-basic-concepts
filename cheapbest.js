const phones =[
    {PhoneName :"samsung",camera:"13MP",Storage:"32GB", price:"34k", color:"balck"},
    {PhoneName :"Walton",camera:"10MP",Storage:"32GB", price:"15k" , color:"yellow"},
    {PhoneName :"Iphone",camera:"10MP",Storage:"32GB", price:"150k" , color:"red"},
    {PhoneName :"Xiomi",camera:"10MP",Storage:"32GB", price:"20k" , color:"purple"},
    {PhoneName :"Nokia",camera:"10MP",Storage:"32GB", price:"10k" , color:"black"},          
    {PhoneName :"HTC",camera:"10MP",Storage:"32GB", price:"25k" , color:"slamon"},          
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
        
    }
    return cheapest;
    
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);