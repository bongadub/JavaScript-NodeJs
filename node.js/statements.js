if(true){
    console.log("I can be run");
}

var cake = "sponge";

if(cake === "sponge"){
    console.log("I like sponge cake");
}

// This wont run
if(cake === "fruit"){
    console.log("I like fruit cake");
}

if(cake === "Carrot"){
    console.log("I like sponge cake");
} else{
    console.log("I don't like " + cake);
}