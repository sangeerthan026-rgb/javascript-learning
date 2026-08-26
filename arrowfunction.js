const addition = (a, b) => {
    let addresult = a + b;
    let subresult = a - b;
    let mulresult = a * b;
    let divresult = a / b;
    return {"addresult": addresult, "subresult": subresult, "mulresult": mulresult, "divresult":divresult};
}
let result = addition(10, 5);

console.log("Addition Result===>", result.addresult);
console.log("Subtraction Result===>", result.subresult);
console.log("Multiplication Result===>", result.mulresult);
console.log("Division Result===>", result.divresult);