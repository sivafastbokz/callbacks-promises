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
// let nameUser = ['siva','ranjith','monj']

// nameUser.forEach((result,index)=>{
//     console.log("test",result,index)
// //     forEach((socre)=>{
// //         console.log(socre)
// //         if(socre.marks > bestSocre){
// //            bestSocre = socre.marks       
// //         }
// //         if(socre.marks < worstSocre){
// //             worstSocre = socre.marks
// //         }
// //     })
// //     console.log({name:results.name,bestSocerdSubject:bestSocre,worstSocredSubject:worstSocre})
//  })

//  let bestSocre = -Infinity;
//  let worstSocre = Infinity;

// let arr=[90,39,45,93,38]
//   arr.forEach((socre)=>{
//     //  console.log(socre)
//     if(socre > bestSocre){
//         //  console.log(socre)
//         //  console.log(bestSocre)
//        bestSocre = socre 
//       console.log(bestSocre,socre)     
//     }
//     if(socre < worstSocre){
//         //  console.log(worstSocre)
//         worstSocre = socre
//         console.log(worstSocre,socre)
//     }
// })


// score 90 bestScore  90 > -In true bestScore 

// in the socre parameter it save all the elemnts from the  variable named arr
//then it moves the first index into the if condition the bestscore value will be in -infinity
//in the if condition the score has the value of 90,93 and the bestscore has the value of -infinity and 90
//in this condition it takes the highest value in our case it takes the value 93 which is higher

// in less than part the score has the value of 90,39,38 and in the worstscore has value of infinity 90,39
//following the condition it takes the lowest value whuch is 38


// var evennumbers = [1,2,3,4,5,6,7,8,9,10]
//  var even = []

//  for(let i = 0; i < evennumbers.length;i++) {
//     if(evennumbers[i] % 2==0){
//         even.push(evennumbers[i])
//     }
//  }
//     console.log(even) 


// function number1(number2){
//     console.log('this is number one')
//      number2(number3)
// }

// function number2(number3){
//     console.log('this is number two')
//      number3(number4)
// }
// function number3(number4){
//     console.log('this is number three')
//     number4(number5)
// }
// function number4(number5){
//     console.log('this is number four')
//     number5(number6)
// }

// function number5(number6){
//     console.log('this is number five')
//     number6()
// }
// function number6(){
//     console.log('this is number six and last function')
// }
// number1(number2)


// map function

const numbers = [1,2,3,4,5,6,7,8,9,10]

// const num = numbers.map((test)=> test / 2)
// console.log(num)
// const num1 = (Math.max(...numbers))
// console.log(num1)

// for (let i = 0; i < 10; i++) {

//     if(numbers[i] % 2 !== 0){
//     console.log( numbers[i])
//     }
    
// }



// for (const num of numbers) {
//     console.log(num)
// }
//  for (let neumeric in numbers){
//     console.log(neumeric,numbers[neumeric])
//  }
//  const msg =10
//  for(let i =0; i<msg;i++){
//       console.log('hello world')
//  }

//  for (let i =1; i <10; i+=2){
//     console.log('the odd numbers are ' + i)
     
//  }
//  for (let i =2; i <10; i+=2){
//     console.log('the even numbers are '+ i)
//  }

//  let evenNumbers = [22,34,56,74,89,32,53,21]
//  for(let i = 0;i< 100;i++){
//     if(evenNumbers[i] % 2 == 0){
//         console.log(evenNumbers[i])
//     }

//  }

 for(let i=2;i<=20; i+=2){
    console.log('the even numbers '+ i)
 }

 const studentsName = ['siva','messi','ronaldo','bruno','muller']

 for(let i = 0;i < studentsName.length;i++){
    console.log(studentsName[i])
 }

 studentsName.forEach(names=>{
    console.log(names)
 })

//  let pin = '12345';
//  let attempts = 4;

//  while(attempts>0){
//     const guess = prompt('enter  your password to login into your account')
//     if(guess === pin){
//         alert('you have successfully loged in')
//         break;
//     }else{
//         alert(`sorry! your password is worng now you have only ${attempts--} attempts`)
//         // attempts--;
//     }
    
//  }
//  if(attempts===0){
//     alert('sorry! your have tired all of your four attempts, please try again later')
//  }


//  studentList.forEach((obj)=>{
//     obj.examResults.forEach(marks=>{
//          console.log(marks)
        
//     })
//  })

//  const result = studentList[0].examResults
//  console.log(result)

//  const filteredmarks = studentList.filter(obj=>{
//     obj.examResults.filter(marks=>{
//         marks.marks > 90
//     })
    
//  })
//  console.log(filteredmarks)

//  studentList[0].examResults.forEach(marks=>{
//     console.log(marks)
// })

// const filteredaMarks = studentList[0].examResults.filter(higherMarks=>{
//    return  higherMarks.marks >= 90

// })
// console.log(filteredaMarks)


//loops concepts

let intiger =[22,33,45,67,82,94,29,98,86,96,50,65,125,25,55,88];
let valueAbove90 = [];
let valueLess30 = [];
let evenNumbers = [];
let oddNumbers = [];

for(let i =0; i<intiger.length;i++){
    if(intiger[i]>90){
        valueAbove90.push(intiger[i])
    }
}
console.log(valueAbove90)


for(let i =0; i<intiger.length;i++){
    if(intiger[i]<30){
       valueLess30.push(intiger[i])
    }
}
console.log(valueLess30)

intiger.forEach(even=>{
    if(even % 2 == 0){
        evenNumbers.push(even)
    }
})
console.log(evenNumbers)

intiger.forEach(odd=>{
    if(odd % 2 !== 0){
        oddNumbers.push(odd)
    }
})
console.log(oddNumbers)

for(let divid of intiger){
    console.log(divid / 2)
}
for (let num in intiger){
    console.log(num,intiger[num])
}


for(let i = 0; i <=6; i++){
 console.log('for loop number' + i)
}

let num = 0;
while(num < 10){
    console.log('while loop numbers'+num)
    num++
}
let i = 10

do{
    if(i % 2 ==0){
        console.log('do-while number '+i);
    }
    i++;
}while(i<10)

// let arr = 5
// let num1 ="" 

// for(let i =0; i <arr;i++){ // columns
//     for(let s = 0;s <arr;s++){ // rows
//         num1 += " siva "
//     }
//     num1 +="\n"
// }
// console.log(num1)

let n = 4;
let string = "";

for(let i = 0; i<n; i++){
    console.log('firstloop',i)
    for(let l = 0; l <n; l++){
        console.log('secondloop',l)
        for(let m = 0; m <n; m++){
            console.log('thirdloop',m)
            string = string + " * "
        }
    }
    
    string = string + "\n"
}
console.log(string)

//in the first loop the i has the value of 0,1,2,3,4 and the n has the value of 4 if the condition is true the code is executed.
//if false the code is blocked and it creates a columns of *. in the second loop prints the  value  if the condition is true it executes in rows if the condition is false it blockes the code
//in the first loop when the value of i is 0 the value of l will be 0,1,2,3 

var m = 5;
let string2 = "";
 
for(let i = 0; i<=m; i++){
    // console.log('firstloop',i)

    for(let k =0; k<=i; k++){
        // console.log('secondloop',k)
          string2  = string2 + " * "
    }
//     for(let j = 0; j<m;j++){
//         // console.log('thirdloop',j)
//         string2 = string2 + "  "
//    }
    string2 = string2 + "\n"
}
console.log(string2)


var s = 5;
let string3 = "";

for(let i =0; i<=s;i++){

    for(var a = 0; a<=s-i;a++){
        string3 = string3 + " * "
    }
    string3 = string3 + "\n"
}
console.log(string3)


var p = 5;
let string4 = "";

for(let i=0;i<=p;i++){
    // console.log('firstloop',i)
    // string4 += " * "
    for(let v =0; v<=p;v++){
        // console.log('secondloop',v)
        string4 += " * "
    }
    
    string4 += "\n"
}
console.log(string4)

var t =6;
let string5 = ""
for(let i = 0; i<=t;i++){
   for(let h = 0;h<=t-i;h++){
    string5 +="    "
   }
   for(let x = 0; x<t-i; x++){
    string5+= " * "
   }
   string5 +="\n"
}
console.log(string5)

// var u = 5;
// var string6 ="";

// for(let i = 0; i<=u; i++){
//     console.log('firstloop',i)
//     for(let c =0; c<=u-i; c++){
//         console.log('secondloop',c)
//         string6 += " "
//     }
//     for(let a =0; a<=2*i-i; a++){
//         console.log('thirdloop',a)
//         string6 +=" * "
//     }
//     string6 += "\n"
// }
// console.log(string6)

// var r = 5;
// var string7 = "";

// for(let i = 0; i <=r; i++){
//     for(ler g = 0; g<=2*i-i)
// }

function reverseStr(str){
    var emptyStr = '';
    for(let i = str.length-1;i>=0;i--){
        emptyStr += str[i]
    }
    return emptyStr;
}
console.log(reverseStr('siva'))

function inBuilt(str){
    // var string = '';
   return str.split('').reverse().join('')
    // return str

}
console.log(inBuilt('hello'))

var sum = 0;
for(let i = 0; i<intiger.length;i++){
    sum += intiger[i]
}
console.log(sum)

var numberPattern = 8;
var printNumber = ''
for(let i = 0; i<=numberPattern;i++){
    for(let b=0;b<=i;b++){
        printNumber += b+ ""
    }
    printNumber += "\n";
}
console.log(printNumber)