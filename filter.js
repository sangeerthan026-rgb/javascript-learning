let orignalArr =["100","200","300","400","500","650"]
let greaterthen500 = orignalArr.filter(
    (value,index,arr)=>{
        return value >500

    }
)
console.log(greaterthen500)

let array = [5,5,5,5,100,50,4,4,9,6]
let uniqueArr = array.filter(
    (value,index,arr)=>{
        return arr.indexOf(value)==index

    }
)
console.log(uniqueArr)