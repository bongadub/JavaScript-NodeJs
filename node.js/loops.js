for(var i = 0; i < 10; i++){
    console.log(i);
}

var count = 10;

while(count > 0){
    console.log(count);

    count--;
}

var cakeTypes = ["Sponge", "Fruit", "Cheese"];

for(x in cakeTypes){
    console.log("Current count: " + x);
    console.log("I like " + cakeTypes[x] + "cake");
}