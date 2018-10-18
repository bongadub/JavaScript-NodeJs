var messageOne = "Hello from global variable"

function mySixthFunction(){

    var messageTwo = "Hello from local variable"

    console.log(messageOne);
    console.log(messageTwo);
}

function mySeventhFunction(){
    console.log(messageOne);
    console.log(messageTwo);
}

mySixthFunction();
mySeventhFunction();