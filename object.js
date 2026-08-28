 const user = {
        "name": "Sangeeth",
        "lastName" : "vijay",
        "age": 25,
        "isLoggedIn": true,
        fullName(){
            return this.name + " " + this.lastName
        }
         
    };

    user.city = "Bangalore";           
    user.age = 28                      
    delete user.isLoggedIn

    let name =  user.fullName()
 
    console.log("name====>",name)