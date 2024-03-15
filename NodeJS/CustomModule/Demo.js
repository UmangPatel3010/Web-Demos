const CheckDemo = require("./CustModule");

const obj = new CheckDemo();

if (obj.isPalindrome(123321))
    console.log("number is palindrome");
else
    console.log("number is not palindrome");

if (obj.isPrime(7))
    console.log("number is Prime");
else
    console.log("number is not Prime");

if (obj.isArmstrong(153))
    console.log("number is Armstrong");
else
    console.log("number is not Armstrong");

prime_lst = obj.primeInRange(10, 50)
console.log(prime_lst);


console.log(obj.GCD(6, 3));