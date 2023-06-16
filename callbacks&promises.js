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


// function mytransactions(status,accountholder){
//     prompt('enter your status')
//     if(status == "vaild")
//     {
//         console.log('your transations begins here')
//         accountholder('siva',chooseaccount)
//     }else if(status == "Invaild") 
//      {
//         console.log('your transactions ends here')
//         return
//      }else{
//         console.log('your transactions ends here')
//         return
//         accountholder(chooseaccount)
//      }
// }

// function message(){
//     console.log('thank you visit again')
// }
// function withdraw(messageoftrans){
//     prompt('enter the amount to withdraw')
//     console.log('withdraw is successfull')
//     messageoftrans()
// }

// function atmpin(pinnum,withdrawtheamount){
//     pinnum=prompt('enter the pin')
//     if(pinnum==='8585'){
//     console.log('pinnumber entered successfully')    
//     withdrawtheamount(message)
//     } else if(pinnum ==='')
//     {   
     
//     }else { 
//      console.log('oops looks like you entered the incorrect pin number')
//     return
//     }
// }
// function chooseaccount(enterthepin){
//     confirm('sure you want choose the savings account?')
//     enterthepin('8585',withdraw)
// }

// function accountholder(name,choosetheaccount){
//         name=prompt('enter the accountholder name')
//         if(name == 'siva')
//         {   
//         console.log(`welcome ${name}`)
//         choosetheaccount(atmpin)
//         }else if(name == '') 
//         {
        
//         }else{
//             console.log('accountholder name is not correct')   
//             return   
//             choosetheaccount(atmpin)
//         }
// }
 

//  mytransactions("vaild",accountholder)




//settimeout and setinterval
// function mytransaction(accountholder){
//      setTimeout(() => {
//         console.log('your transactions being here')
//      }, 1000);
//     accountholder(chooseaccount)
    
// }

// function message(){
//     setTimeout(() => {
//         console.log('thank you visit again')
//     }, 16000);
// }


// function withdraw(withdrewmsg){
//    setTimeout(() => {
//       console.log('withdraw successfull')
//    }, 13000);
//     withdrewmsg()
// }


// function atmpin(withdrawtheamount){
//     setTimeout(() => {
//         console.log('enter the pin')
//     }, 10000);
//     withdrawtheamount(message)
// }


// function chooseaccount(enterthepin){
//     setTimeout(() => {
//         console.log('sure you want to choose the savings account?')
//     }, 7000);
//     enterthepin(withdraw)
// }

// function accountholder(choosetheaccount){
//     setTimeout(() => {
//         console.log('welcome bob')
//     }, 4000);
//     choosetheaccount(atmpin)
// }

// mytransaction(accountholder)




//promises




// function mytransaction() {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('your transaction begins here')
//         }, 1000);
//           resolve(accountholder);
//     })
//     .then((accountholdername)=>{
//         accountholdername(chooseaccount)
//     })
// }


// function message(){
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('thank you visit again')
//         }, 11000);
//         resolve('success')
//     })
// }


// function withdrawmsg(){
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('withdraw is successfull')
//         }, 9000);
//         resolve(message)
//     })
//     .then((sendoffmsg)=>{
//         sendoffmsg(message)
//     })
    
// }

// function atmpin(){
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('enter the pin')
//         }, 8000);
//         resolve(withdrawmsg)
//     })
//     .then((withdrawtheamt)=>{
//         withdrawtheamt(withdrawmsg)
//     })
// }


// function chooseaccount(){
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('sure you wnat to choose the savings account')
//         }, 6000);
//         resolve(atmpin)
//     })
//     .then((enterthepin)=>{
//         enterthepin(atmpin)
//     })
// }


// function accountholder(){
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('welcome messi the goat')
//         }, 4000);
//         resolve(chooseaccount);
//     })
//     .then((choosetheaccount)=>{
//         choosetheaccount(atmpin)
//     })
// }

//  mytransaction(accountholder)





// 1) Create 5 Student List Each Student should have results -> tamil,Eng,Math,Science,SS and marks

// a) Sum Total for each Student
// b) Find Higest and Lowert marks
// c) Find Failed Student List
// d) Find Best and Worst scored subject 

const studentList = [
    {
        name:'messi',
        examResults:
            [
                {subject:'tamil',marks:88,},
                {subject:'english',marks:68},
                {subject:'maths',marks:58},
                {subject:'science',marks:82},
                {subject:'socialscience',marks:90}
            ]

        
    },

    {
       name:'ronaldo',
       examResults:
        [
            {subject:'tamil',marks:83},
            {subject:'english',marks:65},
            {subject:'maths',marks:38},
            {subject:'science',marks:86},
            {subject:'socialscience',marks:100}
        ]

       

    },

    {
        name:'bob',
        examResults:
            [
                {subject:'tamil',marks:58},
                {subject:'english',marks:88},
                {subject:'maths',marks:28},
                {subject:'science',marks:92},
                {subject:'socialscience',marks:92}
            ]
        
    },

    {
        name:'max',
        examResults:
            [
                {subject:'tamil',marks:86},
                {subject:'english',marks:98},
                {subject:'maths',marks:28},
                {subject:'science',marks:85},
                {subject:'socialscience',marks:100}
            ]

        
    },
    {
        name:'jim',
        examResults:
            [

                {subject:'tamil',marks:28},
                {subject:'english',marks:66},
                {subject:'maths',marks:56},
                {subject:'science',marks:92},
                {subject:'socialscience',marks:100}
            ]
        
        }
    

]

//     studentList.forEach((student)=>{ 
//       let totalMarks = 0;
//     student.examResults.forEach((allmarks)=>{
//         totalMarks += allmarks.marks
//     })
//     console.log({name:student.name,total:totalMarks})
// })


// let highestMarks = -Infinity;
// let lowestMarks = Infinity;

// studentList.forEach((studentMarks)=>{
//     studentMarks.examResults.forEach((results)=>{
//         if(results.marks > highestMarks){
//             highestMarks = results.marks
//         }
//         if(results.marks < lowestMarks){
//             lowestMarks = results.marks
//         }
//     })
//       console.log({name:studentMarks.name,highestMark:highestMarks,lowestMark:lowestMarks})
// })



// let failedStudents = 35
// var failedList =[];
// studentList.forEach((studentsfailed)=>{
//     studentsfailed.examResults.forEach((studentMarks)=>{
//         if(studentMarks.marks < failedStudents){
//            failedList.push(studentMarks.marks)
//            console.log({ name:studentsfailed.name,faildMarks:studentMarks.marks})
//         }
//     })
    
// })

// let bestSocre = -Infinity;
// let worstSocre = Infinity;

// studentList.forEach((results)=>{
//     [90,39,45,93,38].
//     forEach((socre)=>{
//         console.log(socre)
//         if(socre.marks > bestSocre){
//            bestSocre = socre.marks       
//         }
//         if(socre.marks < worstSocre){
//             worstSocre = socre.marks
//         }
//     })
//     console.log({name:results.name,bestSocerdSubject:bestSocre,worstSocredSubject:worstSocre})
// })

 let bestSocre = -Infinity;
 let worstSocre = Infinity;

let arr=[90,39,45,93,38]
  arr.forEach((socre)=>{
    //  console.log(socre)
    if(socre > bestSocre){
        //  console.log(socre)
        //  console.log(bestSocre)
       bestSocre = socre 
      console.log(bestSocre,socre)     
    }
    if(socre < worstSocre){
        //  console.log(worstSocre)
        worstSocre = socre
        console.log(worstSocre,socre)
    }
})


// score 90 bestScore  90 > -In true bestScore 

// in the socre parameter it save all the elemnts from the  variable named arr
//then it moves the first index into the if condition the bestscore value will be in -infinity
//in the if condition the score has the value of 90,93 and the bestscore has the value of -infinity and 90
//in this condition it takes the highest value in our case it takes the value 93 which is higher

// in less than part the score has the value of 90,39,38 and in the worstscore has value of infinity 90,39
//following the condition it takes the lowest value whuch is 38




