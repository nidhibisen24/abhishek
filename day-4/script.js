// User se 2 number input lo dono ko check kro or jo number bada ho use alert krao
// Is bar user se 5 numbers input lo sare numbers ko check kro or jo number bada ho use alert krao
// for loop se 1 se 15 tk number print kro. or agr number even 1 to show krao even and odd h to show krao odd.
// exa: 
// "0 is even"
// "1 is odd"
// "2 is even"



// ===================task-1
// let value1 =  Number(prompt("enter first value"));
// let value2 = Number(prompt("enter second value "));

// if (value1>value2) {
//     alert(value1 + " is greater than " + value2);
// }
// else if(value1<value2){
//     alert(value2 + " is greater than " + value1);
// }
// else{
//     alert("both are equal");

// }


// =================task-3
for (let value = 0; value < 16; value++) {
    if (value % 2 == 0) {
        console.log(value + " is even ");
    }
    else {
        console.log(value + " is odd");
    }
}

