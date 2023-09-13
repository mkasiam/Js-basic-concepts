function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please input a valid number";
    }
    let result1 = number ** 3 ;
    return result1;
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please input a string";
    }
    let result2 = string1.includes(string2);
    return result2;
} 

function sortMaker(arr) {
    if (arr[0] === arr[1]) {
        return "equal";
    }
    else if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    }    
    arr.sort((a, b) => b - a);

    return arr;
}

function findAddress(obj){
    const defaultPlaceholder = "__";
    const { street = defaultPlaceholder, house = defaultPlaceholder, society = defaultPlaceholder } = obj;
    const result4 = { street, house, society };

    return result4;
}

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "The array is empty";
    }

    const sumOfChange = changeArray.reduce((sum, value) => sum + value, 0);
    const result5 = sumOfChange >= totalDue;
    return result5;
}

