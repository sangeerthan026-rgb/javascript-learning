console.log("Switch Statement Example")
var grade = "";
var marks = 85

if ( marks > 90) {
    grade = "A";
}
else if (marks > 80) {
    grade = "B";
}   
else if (marks > 70) {
    grade = "C";
}
else if (marks > 60) {
    grade = "D";
}   
else {
    grade = "F";
}

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;  
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Average");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid Grade");
        break;
}   