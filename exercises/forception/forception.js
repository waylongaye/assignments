var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var arr = [];

// for(var i = 0; i < people.length; i++){
//     for(var j = 0; j < alphabet.length; j++){
//         function combine()
//     }
    
// }

function combine(people, alphabet){
    for(var i =0; i < people.length; i++){
        arr.push(people[i]); // pushes each name individually into the new array
        for(var j = 0; j < alphabet.length; j++){
            arr.push(alphabet[j]); // pushes each letter individually into the new array
        }
    }
    return arr;
}

console.log(combine(people, alphabet));