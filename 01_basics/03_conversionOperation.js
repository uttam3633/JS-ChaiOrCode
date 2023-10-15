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