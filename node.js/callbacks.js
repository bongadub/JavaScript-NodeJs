function myDeclaredFunction(parameterFunction){
    parameterFunction();
}

myDeclaredFunction(
    function(){
        console.log("I'm an anonymous function being run");
    }
  );