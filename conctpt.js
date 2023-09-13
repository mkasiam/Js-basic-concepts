/* function sumOfArray(arr){
    let sum = 0;
    for (const number of arr) {
        sum += number;
    }
    return sum;
     
}
const arr = [1,3,5,7,9];

const result = sumOfArray(arr);
console.log("The addition result of your array is",result); */

/* 
function sumOfOddNumbers(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  
  // Example array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const oddSum = sumOfOddNumbers(numbers);
  console.log("Sum of odd numbers:", oddSum);
 */


/* function sumOfOddNumbers(arr){
    let sum = 0;
    for (const number of arr) {
        if(number % 2 !== 0){
            sum += number;
        }
        
    }
    return sum;

}

let arr = [1,2,3];
const result = sumOfOddNumbers(arr);
console.log(result); */

/* 
const myInfo ={
    Name:"kawsar",
    age:20,
    address:"Lakshmipur"
}

function information(myInfo){
    const sentence = "Amar Nam :"+myInfo.Name+",Amar boys : "+myInfo.age+",Amar Bari : "+myInfo.address;
    return sentence;
}
console.log(information(myInfo)); */


/* function facto(number){
    let sum = 1;
    for(let i = number ; i >= 1;i--){
        const each = i;
        sum *= each ;
    }
    return sum;
}
let factorialWant = 4;
let result = facto(factorialWant);

console.log(result);
 */

//Find the largest number from an array

/* function findLargestNumber(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let largest = arr[0]; // Assume the first number is the largest
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }
  
  // Example array
  const numbers = [10, 5, 27, 3, 15, 8, 19];
  const largestNumber = findLargestNumber(numbers);
  console.log("Largest number:", largestNumber); */
  
/* function findLargestNumber(arr){
    let largest = arr[0];
    for (const each of arr) {
        if( each > largest){
            largest = each;
        }
    }
    return largest;
}
let arr = [120,51,5,56,55,5588,5684,5845];
let largestNumber = findLargestNumber(arr);
console.log(largestNumber); */

/* function findBiggestFriend(friends){
    let biggest = friends[0];
    for (const eachFriend of friends) {
        if(eachFriend.length > biggest.length){
            biggest = eachFriend;
        }
    }
    return biggest;
}
let friends = ["arif","jarif","Mosadeek","Kawsar Ahmmed Siam","Ahmmed","siam"];
let result = findBiggestFriend(friends);
console.log(result); */


function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (char.match(/[a-zA-Z]/)) {
        consonantCount++;
      }
    }
  
    return { vowelCount, consonantCount };
  }
  
  const inputString = "The name";
  const counts = countVowelsAndConsonants(inputString);
  
  console.log("Vowel count:", counts.vowelCount);
  console.log("Consonant count:", counts.consonantCount);
  






















