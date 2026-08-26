let stsudentDetails = {
    "name": "sangeeth",
    "age": 23,
    "qualification": "B.E",
    "salary": 50000.25,
    "company": "Infosys"        
}
// console.log("Student Details =====>",stsudentDetails.name)  
// console.log("Student Details =====>",stsudentDetails.age)
// console.log("Student Details =====>",stsudentDetails.qualification) 
// console.log("Student Details =====>",stsudentDetails.company)
// console.log("Student Details =====>",stsudentDetails.salary)

const employeeDetails = {
    name: "hari",
    age: 22,
    address: {
    tempAddress: "No. 456, Park Avenue, City, State, ZIP",
    PaymentAddress: "No. 123, Main Street, City, State, ZIP",
    },
    qualification: "MCA",
    salary: 60000.25,
    company: "Tcs"
}
console.log("Employee Details =====>",employeeDetails.name)
console.log("Employee Details =====>",employeeDetails.age)
console.log("Employee Details =====>",employeeDetails.qualification)
console.log("Employee Details =====>",employeeDetails.address.tempAddress)
console.log("Employee Details =====>",employeeDetails.address.PaymentAddress)
console.log("Employee Details =====>",employeeDetails.company)
console.log("Employee Details =====>",employeeDetails.salary)