const emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

function validateEmail(email) {
    return emailRegex.test(email);
}

//emailUC1
console.log(validateEmail("abc@bridgelabz.co"));
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));
console.log(validateEmail("abc@bridgelabz.com"));