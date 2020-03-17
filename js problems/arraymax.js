var numbers = [84,96,85,45,74,49,63];
var max = numbers[0];

for (var i = 0; i<=numbers.length;i++){
    var element = numbers[i];
    if(element > max){
        max = element;
    }
}

console.log("Highest value is", max);