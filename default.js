
var num1 = 20;
var num2 = 10;
var num3 = "10";
var num4 = 20;
var num5 = 15;

console.log('일반 크기 비교');
console.log(num1 > num2, num1, '>', num2);
console.log(num1 >= num2, num1, '>=', num2);
console.log(num1 < num2, num1, '<', num2);
console.log(num1 <= num2, num1, '<=', num2);

console.log('같은지 여부 확인');
console.log(num1 == num4, num1, '==', num4); // == : 비교 연산자 같다 (값 비교)
console.log(num1 != num4, num1, '!=', num4); // != : 같지 않다 (! : ~이 아니다)

console.log('===');
console.log(num1 === num3, num1, '===', num3); // === : 타입이 같다
console.log(num2 === num3, num2, '===', num3);
console.log(num2 == num3, num2, '==', num3);

console.log('논리 연산자');
console.log('num1 > num2 && num1 < num5', num1 > num2 && num1 < num5);
// And 연산자 : 둘다 참이어야 참
console.log('num1 > num2 || num1 < num5', num1 > num2 || num1 < num5);
// Or 연산자 : 둘 중에 하나만 참이어도 참
console.log('num1 > num2 && !(num1 < num5)', num1 > num2 && !(num1 < num5));
// Or 연산자 : 둘 중에 하나만 참이어도 참



//var cels =parseFloat(prompt("섭씨 입력: ")); //Float = 소수점이 있는 수
//var farn = cels * (9 / 5) + 32; //섭씨 온도 화씨 온도로 변환
//
//document.write("화씨 : " + farn);


//var base = parseFloat(prompt("밑변 입력 : "));
//var height = parseFloat(prompt("높이 입력 : "));
//
//var area = base * height * 0.5;
//
//document.write("삼각형의 넓이 : " + area);

//var input = prompt("Enter first number : ");
//var num1 = parseInt(input);
//
//var num2 = parseInt(prompt("Enter second number : "));
//var LineBreak = "<br/>";
////integer = 정수형 변수.  prompt <- 문자
////ParseInt 정수로 변환. 정수형이 아니면 NaN 출력
//
//var result = num1 + num2;
//document.write("the sum is : " + result + LineBreak);
//
//var result = num1 - num2;
//document.write("the sub is : " + result + LineBreak);
//
//var result = num1 * num2;
//document.write("the multiplication is : " + result + LineBreak);
//
//var result = num1 / num2;
//document.write("the division is : " + result + LineBreak);
//
//var result = num1 % num2;
//document.write("the remainder is : " + result + LineBreak);

//var num = "20";
//num = num.toString(); //메소드
//console.log(typeof num);
//
//var number = 20;
//console.log(typeof number);
//
//number = number.toString();
//console.log(number, typeof number);
//
//var x = 2.56367;
//console.log(x.toFixed(1), typeof x.toFixed(1));
////반올림해주는 메소드(소수점 첫째 자리까지 출력)
//console.log(x.toFixed(2));
//
//console.log(x.toPrecision(1), typeof x.toPrecision(1));
////반올림해주는 메소드(소수점 첫째 자리에서 반올림)
//console.log(x.toPrecision(2));
//
//console.log(Number(true)); //숫자 객체를 나타내는 생성자 함수
//console.log(Number(false));
//console.log(Number(" 10"));
//console.log(Number(" 10 "));
//console.log(Number("10.25"));

//var text = prompt("Enter your name:");
//document.write("Your name : " + text + "<br/>");
//
//var len =text.length;
//document.write("Number of characters : " + len + "<br/>");
//
//document.write(text.charAt(2) + "<br/>"); //두번째에 있는 문자 하나 가져오는 함수
////0부터 시작함
//
//
//document.write(text.toUpperCase() + "<br/>");
//document.write(text.toLowerCase() + "<br/>");
////대,소문자로 변환하는 함수
//
//var text1 = " hi";
//var text2 = "bye";
//var text3 = text1.concat(text2);
//var text4 = text1 + text2;
//document.write(text3 + "<br/>");
//document.write(text4 + "<br/>");
//
//var text4 = "hello";
//var result = text4.slice(0,2); //문자열의 부분 잘라주는 함수
//document.write(result + "<br/>");
//
//
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
//console.log(typeof 123.5);
//console.log(typeof "123");
//console.log(true, typeof true);
//console.log(false, typeof false);
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
//document.write('Hello World 2');
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
//