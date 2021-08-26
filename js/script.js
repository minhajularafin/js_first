var num ="20.20";

num=parseFloat(num);

console.log(typeof(num));

var number=2.5684;
console.log(number.toFixed(2));
console.log(number.toPrecision(1));
console.log(Number(true));

document.write("Minhajul" + " Arafin" + " Sakib </br>");
var firstName = "Muhammad";
var lastName =" Minhajul</br>";
var fullName= firstName+lastName;
document.write("My name is "+fullName );
var fullName="Minhajul Arafin ";
document.write(fullName + "is my name </br>");
document.write("My name is "+fullName+" Sakib</br>");
var num1=20;
var num2=30;
document.write("Num1 = " +num1 +" and Num2 = " +num2+ "<br>");
var text ="Bangladesh";
text.length;
document.write("The length of Bangladesh is "+text.length+"<br>");
// var text= prompt("Enter your name :");
// document.write(text.length)+"<br>";
var firstName="Minhajul ";
var lastName="Arafin";
var fullName= firstName+lastName;
document.write(fullName+"<br>");
document.write(fullName.length+"<br>");
document.write(fullName.toUpperCase()+"<br>");
document.write(fullName.toLowerCase()+"<br>");
document.write(fullName.charAt(5) +"<br/");


// start 
function textchange(){

	document.getElementById('c_t').innerHTML="I am a student of full stack web development.";

}

var num1 =prompt("Enter your first number : ");
var num2 =prompt("Enter your last number : ");

num1= parseInt(num1 , 10);
num2= parseInt(num2 , 10);

var sum , sub , mutiple , div ,modulas ;


sum=num1+num2;
document.write(num1 + "+" + num2 + "=" + sum + "<br/>");
sub=num1-num2;
document.write(num1 + "-" + num2 + "=" + sub + "<br/>");
mul=num1*num2;
document.write(num1 + "*" + num2 + "=" + mul + "<br/>");
div=num1/num2;
document.write(num1 + "/" + num2 + "=" + div + "<br/>");
modulas=num1%num2;
document.write(num1 + "%" + num2 + "=" + modulas + "<br/>");