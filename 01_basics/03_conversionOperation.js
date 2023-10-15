let score ="33"
console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof (valueInNumber));


let newNumber ="33abc"
let toNumber = Number(newNumber)
console.log(toNumber);   //not a number

let newNumber1= null
let new_Number= Number(newNumber1)
console.log(new_Number);    //NULL value converted to 0


let check= undefined
let check_undefined = Number(check)
console.log(check_undefined);    // Not a number


let isLoggedIn =1
let is_Bollean = Boolean(isLoggedIn)
console.log(is_Bollean);    //Converted to Boolean
// 1 => true, 0=> False
// "" => True, "uttam" => False

let someNumber =33
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof(StringNumber));

//********************* Operations *****************************

let value =3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Uttam"
let str3 =str1+ str2
// console.log(str3);

// console.log( 1 + "2" );
// console.log( "1" + 2 );
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log((3+20)+5*3%10);

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter =100
++ gameCounter
console.log(gameCounter);
gameCounter++
console.log(gameCounter);
// prefix and postfix in js in mdn

