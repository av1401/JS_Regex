const pinCodeRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;

function validatePinCode(pinCode) {
    return pinCodeRegex.test(pinCode);
}


console.log(validatePinCode("400088")); //UC1
console.log(validatePinCode("000088")); //UC1
console.log(validatePinCode("A400088")); //UC2
console.log(validatePinCode("400088B")); //UC3
console.log(validatePinCode("400 088")); //UC4