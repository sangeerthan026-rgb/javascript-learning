function greeting(name, callback1, callback2) {
    setTimeout(() => {
        console.log(`hello ${name}`)
        callback1()
        callback2()
    }, 1000)
}

function treat(){
    console.log("Providing party")
}
function sayBye(){
    console.log("good bye")

}

greeting("manoj",treat,sayBye)