var myObject ={

    "myInt"         : 33,
    "myFloat"       : 33.33,
    "myBoolean"     : true,
    "myString"      : "Mark loves cake",
    "myIntArray"    : [1, 2, 3],
    "myStringArray" : ["Mark", "Node", "Testing"],
    "myFunction"    : function(){ 
                          return "Hello";
                      }

}
myObject.newValue = "I am a new value";

console.log(myObject.myInt);
console.log(myObject.myStringArray);
console.log(myObject.newValue);
 
// Storing objects inside objects
var mySecondObject = {
    "aSubObject" : {
      "mySubInt" : 33,
      "mySubString" : "SubStringValue"
    },

    "anArrayOfObjects" : [{
        "subString" : "Entry 1"
    },{
        "subString" : "Entry 2"
    }]
}

// Calling the objects
console.log(mySecondObject.aSubObject.mySubString);
console.log(mySecondObject.anArrayOfObjects[1].subString);