this.employee_fisrtName = "John Doe";
this.employee_lastName = "Smith";

const employee = {
    employee_id : 12345 ,
    employee_fisrtName : " mark",
    employee_lastName : " Doe",
    employee_fullname :() =>  this.employee_fisrtName + " " + this.employee_lastName  

}

let result = employee.employee_fullname(employee);
console.log(result);