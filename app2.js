let name = prompt("Please enter your name : ");
var gen = "";
gen =gender(gen);

/********/
function gender(gen){
while (gen != "male" && gen != "female") {
   gen = prompt("Please enter your gender : ");
}
    alert("Your gender is " + gen);
return gen;
}

if (gen == "male") {
  var m = "Mr";
} else {
  var m = "Ms";
}

if (gen == "male") {
  alert("Welcome " + m + " " + name);
} else if (gen == "female") {
  alert("Welcome " + m + " " + name);
} else {
  alert("Welcome ");
}
/********/
let order = prompt(
  "We have \n 1-Shawarma \n 2-Zinger \n 3-Burger \n Please enter your order : "
);
alert("Your order is being prepared");
if ((gen = "male")) {
  var m = "Mr";
} else {
  var m = "Ms";
}
console.log(m + " " + name + "\n Your order is " + order + "");
/********/
let n = 5;
switch (n) {
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
    break;
  case 3:
    console.log("THREE");
    break;
  case 4:
    console.log("FOUR");
    break;
  case 5:
    console.log("FIVE");
    break;
  case 6:
    console.log("SIX");
    break;
  case 7:
    console.log("SEVEN");
    break;
  case 8:
    console.log("EIGHT");
    break;
  case 9:
    console.log("NINE");
    break;
  default:
    console.log("PLEASE TRY AGAIN");
}
/**********/
let array=[name,gen,order];
for(let i=0;i<=2;i++){
console.log(array[i]);
}


for (let i = 0; i <= 5; i++) {
  alert("The number is : " + i);
}
let num = "";
for (let i = 0; i <= 5; i++) {
  num = num + "\n" + i;
}
alert(num);

let mul = "";
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    mul = mul + "\n" + i;
  }
}
alert(mul);
/*********** */

do {
  var r = prompt("Please enter a number in range (0...100) : ");
} while (r > 100 || r < 0);
alert("Your number is : " + r);
/****** */
let b = prompt("Please enter an integer : ");
var sum = 0;
for (let i = 0; i <= b; i++) {
  sum = sum + i;
}
alert("The sum from 0 to " + b + " = " + sum);
