var s = "";

for (var j = 0; j < 10 ; j++){
    for (var v = 0; v <= j; v++ ){
        s = s +" ";
    }
    s = s + "\n"
}
for (var k = j; k > 0 ; k--){
    for (var l = 1; l < k; l++ ){
        s = s +"*";
    }
    s = s + "\n"
}
console.log(s)


