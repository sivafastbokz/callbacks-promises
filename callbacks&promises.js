//callbacks

// function mainfunction(cb){
//     console.log('main function');
//     cb()
// }

// function callbackfun(){
//     console.log('call back function');
// }

// mainfunction(callbackfun);

// function calculation(multiplicaton){
//        console.log(multiplicaton)
// }

// function numbers(a,b){
//       let sum = a*b
//       calculation(sum);
// }
// numbers(2,6)


// const callbacks = function(){
//     console.log('you have waited for five seconds')
// }
// setTimeout(callbacks,5000)

// //

// function welcome(name){
//     alert(`welcome ${name}`);
// }
 
// function displaymsg(cb){
//     const msg = prompt("enter your name")
//     cb(msg)
// }

// displaymsg(welcome)

// //promises

// let p = new Promise((reslove,reject)=>{
//     let sum = 1+1
//     if(sum==2){
//         reslove('succes');
//     }else{
//         reject('failed')
//     }
// });

// p .then((message)=>{
//     console.log('this is a then '+ message)
// }).catch((message)=>{
//     console.log('this is catch '+ message)
// })






// function message(){
//         console.log('pin atm enetred successfully')
      
// }
// function password(pin){
//     prompt('enter your atm pin')
//     pin()
// }

// function withdrewmsg(){
//     console.log("your witthdraw is successfully completed")
// }

// function withdraw(msg){
//     prompt('enter your withdraw amount')
//     msg()
// }

// function thankyoumsg(){
//     alert('thank you visit again')
    
// }

// password(message)
// withdraw(withdrewmsg)
// thankyoumsg()



//  function message(){
//     alert('thank you visit again')
//  }

//  function mytransaction(transactionprocess){
//     prompt("enter your atm pin")
//     console.log('pin entered succesfull')
    
//     prompt('enter your withdrew amount')
//     console.log('your withdraw is successfully compeleted')
//     transactionprocess()
// }
//  mytransaction(message)


// findBestEngColleges() {

// }
// checkEngEligibility(findBestEngColleges) {
//     if(true)
//     findBestEngColleges();
//     else {

//     }
// }
// checkExamResult(checkEngEligibility) {
//     checkEngEligibility(findBestEngColleges);
// }

// myResult(examResult) {
//     checkExamResult(checkEngEligibility)
// }
// myResult(checkExamResult)


function mytransactions(status,accountholder){
    prompt('enter your status')
    if(status == "vaild")
    {
        console.log('your transations begins here')
        accountholder('siva',chooseaccount)
    }else if(status == "Invaild") 
     {
        console.log('your transactions ends here')
        return
     }else{
        console.log('your transactions ends here')
        return
        accountholder(chooseaccount)
     }
}

function message(){
    console.log('thank you visit again')
}
function withdraw(messageoftrans){
    prompt('enter the amount to withdraw')
    console.log('withdraw is successfull')
    messageoftrans()
}

function atmpin(pinnum,withdrawtheamount){
    pinnum=prompt('enter the pin')
    if(pinnum==='8585'){
    console.log('pinnumber entered successfully')    
    withdrawtheamount(message)
    } else if(pinnum ==='')
    {   
     
    }else { 
     console.log('oops looks like you entered the incorrect pin number')
    return
    }
}
function chooseaccount(enterthepin){
    confirm('sure you want choose the savings account?')
    enterthepin('8585',withdraw)
}

function accountholder(name,choosetheaccount){
        name=prompt('enter the accountholder name')
        if(name == 'siva')
        {   
        console.log(`welcome ${name}`)
        choosetheaccount(atmpin)
        }else if(name == '') 
        {
        
        }else{
            console.log('accountholder name is not correct')   
            return   
            choosetheaccount(atmpin)
        }
}
 

mytransactions("vaild",accountholder)








 