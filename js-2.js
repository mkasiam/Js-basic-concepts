/* function isInteger(number){
    if(typeof number == "number"){
        return true;
    }
    else{
        return false;
    }
}
let num = isInteger();
console.log(num); */

/* function checkNumberType(number){
    if(Number.isInteger(number)){
        return "Integer";
    }
    else if (typeof number == "number"){
        return "Float";
    }
    else{
        return "Not a valid number";
    }
}

const num1 =5 ;
const num2 =5.255 ;
const num3 ="Hello World" ;

console.log(checkNumberType(num1));
console.log(checkNumberType(num2));
console.log(checkNumberType(num3));
 */

function isJavaScriptFile(filename){
    if(typeof filename !== "string"){
        return "Please provide me a valid file name (\"String\")";
    }
    else if(filename.endsWith(".js") === true){
        return true;
    }
    else{
        return false;
    }
}
let input = "siam.js";
let output = isJavaScriptFile(input);
console.log(output);

const now = ["bangladesh","India","Pakistan","Nepal","Bhutan","Malaysia"]

for (const each of now) {
    console.log(each);
}
