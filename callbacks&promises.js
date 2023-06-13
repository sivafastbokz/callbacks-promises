//callbacks

function mainfunction(cb){
    console.log('main function');
    cb()
}

function callbackfun(){
    console.log('call back function');
}

mainfunction(callbackfun);

function calculation(multiplicaton){
       console.log(multiplicaton)
}

function numbers(a,b){
      let sum = a*b
      calculation(sum);
}
numbers(2,6)


const callbacks = function(){
    console.log('you have waited for five seconds')
}
setTimeout(callbacks,5000)

//

function welcome(name){
    alert(`welcome ${name}`);
}
 
function displaymsg(cb){
    const msg = prompt("enter your name")
    cb(msg)
}

displaymsg(welcome)
