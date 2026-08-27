function getmessage() {
    let firstName = "manoj";
    let lastName = "S";
    return function () {
        let fullName = firstName + " " + lastName;
        return function () {
            return "Hello " + fullName;
           
        }
    }
}
let message = getmessage();
console.log(message()());