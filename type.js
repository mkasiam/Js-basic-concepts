const countryName = "Bangladesh";
const isIndependent = true;
const friends = [34,34,66,88];
const student = {
    Name:"Rahim",
    father:"Mr. Karim",
    Age:56
};

console.log(typeof countryName);
console.log(typeof isIndependent);
// Check array using Array.isArray(Name Of the Array){returns true or false}
// It is not possible to check array with typeof 
console.log(Array.isArray(friends));
console.log(typeof student);

console.log(friends.includes(66));


const newFriendsAge = [26,34,89];
const allFriends = newFriendsAge.concat(friends);

console.log(allFriends);
