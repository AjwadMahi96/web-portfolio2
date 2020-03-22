/**var names = [5,4,5,9,2,9,6,3,6,4];
var unique = [];

for(var i=0; i<=names.length;i++){
    var element = names[i];
    var index = unique.indexOf(element); //checking array indexes
    if(index==-1){
        unique.push(element)
    }
}

console.log(unique); 
*/

function add(a, b){
    return a + b;
}
add(5 + 2);

