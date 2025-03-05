const pinCodeRegex = /^[1-9][0-9]{5}$/;

function validatePinCode(pinCode) {
    return pinCodeRegex.test(pinCode);
}


console.log(validatePinCode("400088")); //UC1
console.log(validatePinCode("000088")); //UC1
