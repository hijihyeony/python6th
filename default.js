var text = prompt("Enter your name:");
document.write("Your name : " + text + "<br/>");

var len =text.length;
document.write("Number of characters : " + len + "<br/>");

document.write(text.charAt(2) + "<br/>"); //두번째에 있는 문자 하나 가져오는 함수
//0부터 시작함


document.write(text.toUpperCase() + "<br/>");
document.write(text.toLowerCase() + "<br/>");
//대,소문자로 변환하는 함수

var text1 = " hi";
var text2 = "bye";
var text3 = text1.concat(text2);
var text4 = text1 + text2;
document.write(text3 + "<br/>");
document.write(text4 + "<br/>");

var text4 = "hello";
var result = text4.slice(0,2); //문자열의 부분 잘라주는 함수
document.write(result + "<br/>");


//var lastName = "홍";
//var firstName = "길동";
//
//var fullName = lastName + firstName;
//
//console.log(fullName);
//console.log("Today is " + "a "+"beautiful day");
//console.log("My name is "+ fullName);
//
//var num1 = 20;
//var num2 = 30;
//var sum = num1 + num2;
//console.log(num1 + num2);
//console.log("" + num1 + num2); //num1, num2 문자열 취급
//console.log(num1 + " + " + num2 + " = " + sum);


//var name = "이승훈";
//var age = 29;
//var cgpa = 3.92;
//var lineBreak = "<br/>";
//
//document.write("이름 : " + name + lineBreak);
//document.write("나이 : " + age + lineBreak);
//document.write("학점 : " + cgpa + lineBreak);







//console.log(typeof 123);
////console.log(typeof 123.5);
////console.log(typeof "123");
////console.log(true, typeof true);
////console.log(false, typeof false);
//
//var car;
//console.log(typeof car);
//var car="";
//console.log(typeof car);
//
//var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//console.log(typeof person, person);
//person=null;
//console.log(typeof person, person);
//
//
//
//
///*document.write('Hello World 2');
//document.write("<h1>Welcome to JS Program<h1/>");
//document.write("<h2>Welcome to JS Program<h2/>");
//
//console.log("Welcome JS Program");
//console.info("Welcome JS Program");
//console.warn("Welcome JS Program");
//console.error("Welcome JS Program");
//
//alert('Welcome JS Program');
//var a = prompt('Welcome JS Program');
//console.log(a);
//*/