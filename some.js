let orignalArr = [100,200,300,400,750]

let  isAvailable = orignalArr.some(
    (value,index,arr) => {
        return value > 200                      
    }
)
let value = orignalArr.filter(
    (value,index,arr)=>{
        return value > 200 
    }
)

console.log("isAvailable====>",isAvailable)
console.log(value)