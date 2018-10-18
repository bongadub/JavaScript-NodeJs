// object constructor function
function PrototypeObject(name, age){
    this.name = name;
    this.age = age;
};

var myFirstObject = new PrototypeObject("Mark", 29);
var mySecondObject = new PrototypeObject("Richard", 31);

console.log(myFirstObject.name + " is " + myFirstObject.age);
console.log(mySecondObject.name + " is " + mySecondObject.age);

myFirstObject.location = "United Kingdom";

console.log(myFirstObject.location);
console.log(mySecondObject.location);

PrototypeObject.prototype.details = function(){
    console.log(this.name + " is " + this.age);
}

myFirstObject.details();
mySecondObject.details();

PrototypeObject.prototype.details = function(){
    console.log("I've been overwritten");
}

myFirstObject.details();
myFirstObject.details();