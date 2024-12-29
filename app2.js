var gen ="";

while(gen !="male" && gen != "female"){
var gen =  prompt("Please enter your gender : ");
}
alert("Your gender is "+gen);
for(let i=0;i<=5;i++){
    alert("The number is : "+ i);
}
let num="";
for(let i=0;i<=5;i++){
    num=num +"\n"+i;
}
alert(num);




let mul = "";
for (let i = 1; i <= 20; i++) {
  if(i%3==0){
    mul=mul+"\n"+i; }
}
alert(mul);
/*********** */

do {
   var r = prompt("Please enter a number in range (0...100) : ");


}while(r>100 || r<0);
alert("Your number is : "+r);
/****** */
let b= prompt("Please enter an integer : ");
var sum =0;
for(let i=0;i<=b;i++){
    sum=sum+i;
}
alert("The sum from 0 to "+b+" = "+sum);
