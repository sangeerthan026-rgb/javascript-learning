let orignalArr = ["100","200","300","400","550"]

let isAvailable = orignalArr.every(
    (value,index,arr) => {
        return value > 200
    }

)
 console.log("isAvailable====>",isAvailable)
 