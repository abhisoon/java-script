let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 33 => 33
// "33" => 33
// "33ag" => NaN 
// true => 1 false = 0
//  null = NaN

let IsLogedIn = "abhishek"
let BooleanIsLogedIn = Boolean (IsLogedIn)
console.log(BooleanIsLogedIn);

// 1 = true, 0 = false
// ""= false, "abhishek"= true

let someNumber = 33
let stringNumber = String (someNumber)
console.log(typeof (stringNumber));
console.log(stringNumber);