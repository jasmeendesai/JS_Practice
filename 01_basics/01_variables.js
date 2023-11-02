const accountId = 1444553 //camelCase
let accountEmail = "jas@gmail.com"
var accountPassword = "123"
accountCity = "Jaipur" //not a good practice
let accountState; //variable is declared but not assigned any value--- gives undefined -- value is not defined

// accountId =2 // not allowed -- can't reassign the new value

accountEmail = "jasmeen@gmail.com" //reassign the new value
accountPassword = '21212' 
accountCity = "Banglore" 

/*
Prefer not to use var
bcz of issue in block scope and functional scope

*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])