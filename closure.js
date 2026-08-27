function outerFunction(){
    let count = 0;
    function innerFunction(){
    counter ++;
    console.log("counter:",counter);

    }
    return innerFunction;

}
const myFunction = outerFunction();
myFunction(); //counter:1
myFunction(); //counter:2
myFunction(); //counter:3
myFunction(); //counter:4
