const emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

function validateEmail(email) {
    return emailRegex.test(email);
}


console.log(validateEmail("abc@bridgelabz.co"));//UC1
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));//UC2
console.log(validateEmail("abc@bridgelabz.com"));//UC2
console.log(validateEmail("xyz@bridgelabz.co"));//UC3
console.log(validateEmail("abc@xyz.co"));//UC3
console.log(validateEmail("abc+xyz@bridgelabz.co.in"));//Uc4

console.log(validateEmail("xyz@bridgelabz.co"));//UC5
console.log(validateEmail("abc@xyz.co"));//UC5