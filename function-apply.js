let product1 ={
    manufacturer: "Apple",
    manufactureprice: "50",
}
function product(manifacturer) {
    console.log("Product is manufactured by " ,this.manufacturer);
    console.log("Product is manufactured price by " , this.manufactureprice);
    console.log("Product is manufactured by " , manifacturer);
}
product.apply(product1,["attur"]);