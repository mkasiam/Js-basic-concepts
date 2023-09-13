const names =["Abul","Babul","Kabul","abul","abul","babul","abul","babul","hanif","kuddus","Abul","Babul","Kabul","abul","abul",]

function removeDuplicate(names){
    const unique =[];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if(unique.includes(name) == false){
            unique.push(name);
        }
        
    }
    return unique;
}

let Name = removeDuplicate(names);
console.log(Name);