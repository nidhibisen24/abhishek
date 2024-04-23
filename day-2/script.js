// --------------task-1
// create data types
// number
// const num = 12;
// console.log(typeof num , num+4);

// // string and string with number
// const str="nidhi";
// console.log(typeof str, str, str+num);

// // boolean
// const bool = true;
// console.log(typeof bool,bool);


// // ====================task-2 

// let age = prompt ("enter your age");
// const myage = Number(age);
// console.log("data type is "+typeof myage ," , ","my age is "+myage);


// // =============task-3

// let age = prompt ("Please Enter your age ");
// const myage = Number(age);
// console.log("data type is "+typeof myage ," , ","my age is "+myage);

// let ageconfirm = confirm("are you sure you are 18");
// console.log(ageconfirm);

// if (ageconfirm==true) {
//     alert("Bhai congrats ho tum vote de skte ho 😀");
// }
// else{
//     alert("Rukh jao abhi bacche ho ");
// }


// // =============task-4
// //1.1  number into string

// const num = 12;
// console.log(typeof num);
// const newnum = String(num);
// console.log(typeof newnum)

// //  1.2 str into num

// const str = "12";
// console.log(typeof str);
// const number = Number(str);
// console.log(typeof number);

// //1.3 boolean into num

// const num2 = 1;
// console.log(typeof num2);
// const bool = Boolean(num2);
// console.log(typeof bool);


// ===========task-5

// let age =NaN;
// while(age!=age)
// {
//     age=prompt("age enter kro bhai but string nhi number me")
//     age=Number(age);
// }
// console.log("", age); 

// let age = prompt("age enter kro bhai but string nhi number me");
// let myage = parseInt(age);
// while (true) {

//     if (myage==parseInt){
//         console.log(myage);
//     }
//     else{
//      myage = prompt("age enter kro bhai but string nhi number me");
//     }
// }

// let age = prompt("Please enter your age:");

// while (true) {
//     let myage = Number(age);
//     if (typeof myage ===typeof age) 
//     {
//         console.log("User's age is:", myage);
//         break;
//     } else {
//         age = prompt("Invalid input! Please enter your age again:");
//     }
// }

// let age = null;

// while (true) {
//     let userInput = prompt("Please enter your age:");

//     age = Number(userInput);

//     if (!isNaN(age) && Number.isInteger(age)) {
//         break;
//     }

//     alert("Invalid input! Please enter a valid age.");
// }

// console.log("User's age:", age);

// let age = prompt("enter your age");

// // console.log(typeof numage , numage);

// while(typeof age == Number)
// {
//     let numage = Number(age);
//   console.log(numage);
// }n
//    numage = prompt("enter your age");

// let age = prompt("Enter your age:");

// while (true) {
//     let numage = Number(age); // Convert input to number

//     if (!isNaN(numage) && Number.isInteger(numage)) { // Check if input is a valid integer
//         console.log("User's age:", numage);
//         break;
//     } else {
//         age = prompt("Enter your age:");
//     }
// }

// =========== task-5
let age = prompt("please enter your age");

while (true) {

    let numage = Number(age);

    if (numage == Number(age)) {
        console.log("finally age is", numage);
        break;
    }
    else {
        age = prompt("galat hai bhai age enter karna hai string nahi");
    }
}






