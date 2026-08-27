function product(manifacturer) {


    console.log("Product is manufactured by " ,this.manufacturer);
    console.log("Product is manufactured price by " , this.manufactureprice);
    console.log("Product is manufactured by " , manifacturer);
}

let product1 = {
    manufacturer: "Apple",
    manufactureprice: "50",
}
product.call(product1,"attur");