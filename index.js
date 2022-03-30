//decision making 
// if else 
// let a = 10
// if (a==10){

// }
// else{

// }

// if else ladder 
// let a = -10;
// if (a<10){
//     console.log("negative");

// }
// else if(a==0){
//     console.log("zero");
// }
// else{
// console.log("positive");
// }


// let gender = "m";
// switch(gender){
//     case"m" :
//     console.log("male");
//     break;
//     case "f":
//         console.log("female");
//       break;
//       case "t"
// }


// Take age as the variable 
// age < 18 = Child
// greater than 18 but less than 40 = Adult 
// age is greater than 40 = Old age
// let age = 10;

// switch (true) {
//         case age < 18:
//                 console.log("Child");
//                 break;
//         case 18 < age < 40:
//                 console.log("Adult");
//                 break;
//         default:
//                 console.log("old age");
//                 break;
// }

// take variable name as day ,
 //its possible values are 0 1 2 3 4 5
// 0 = Monday 
// 5 : Saturday
// let day = 5;
// switch (day) {
//     case 0 :
//         console.log("Monday");
//         break;
//     case 1 :
//             console.log("thuesday");
//          break;
//     case 2 :
//                 console.log("wed");
//         break;
//     case 3:
//         console.log("thurs");
//         break;
//     case 4 :
//         console.log("fri");
//         break;
//     case 5 :
//         console.log("sat");
//         break;
//     default:
//         console.log("sun");
//         break;
// }

//LOOPS- for, while ,do while(itration)
//1. for loop
//intialization
//condition
//incre,decre
 
//var a :-its a declaration
// var a = 10 :-intialization


// for (let i = 0; i<=10; i++) {
//     console.log(i);
    
// }
 
// SWITCH CASE
// FIRST TYPE OF SCNARIO
// campaire the value of var

// let a = 15;
// switch (a) {
//     case 10:
//         console.log("value is 10");
//         break;
//      case 15:
//         console.log("value is 15 ");
//     default:
//         console.log("value is not 10");
// }

// switch (a){
//     case a>10:
//         console.log("a is positive");
//         break;
//      case a<10:
//         console.log("a is negative");
//     default:
//         console.log("a is zero");
// }
// let i = 0;
// for (; i < 10; ) {
//     console.log("value of i is ",i );
//     i++;
// }

// WHILE LOOP
// let i = 0
// while (i<10) {
//     console.log("value of i is",i);
//     i++;
    
// }
// console.log("outside loop");



// let a=10
// while (a<20) {
//     console.log("value of a is ",a);
//     a++;
    
// }

// let i =0
// do{
//     console.log("value of i is:",i);
//     i++;
// }while(i<10)


// nested loop
//  let a =10
//  do{
//      console.log("value of a is",a);
//      a++;
//  }
//  while(a<20)

// for(let i = 0; i<5; i++){
//     for(let j = 0;  i<2; j++){
//         console.log("valueof i is i",i, "and j is",j);
//     }
// }




// FUNCTION
// let a= 10;
// let b=20;
// // let add=a+b;
// // console.log(add);


// //basic example : 1 
// function add(){   //function defination
//     console.log(a+b);
// }
// add();

// //function excution
// // display();

// //fuction parameter with parameter : 2
// function addTwoNumber(a,b)
// {
//     console.log(a+b);
// }
// addTwoNumber(10,20)
// addTwoNumber(10,40)



//1)basic function
function add(a,b) //parameter
{
    console.log(a+b);
}
add(11,12);//argument


// fuction with return statement

function addTwoNumber(a,b){
 return a+b//any code written afte return statement is not acceble 
}
const result = addTwoNumber(12,13)
console.log(result);


//fuction whuch exisit on in js 
const add=function(){
    console.log("value");
}
add();

//arrow fucti

const a = () =>{
    
}