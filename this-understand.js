const employee = {
    employeeId: 12345,
    employeeFirstName: "John Doe",
    employeeLastName: "Smith",
    
    employee_fullName: function() { 
        return this.employeeFirstName + " " + this. employeeLastName; 
    }

}

console.log(employee.employee_fullName());