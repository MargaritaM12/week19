class Validator {
    constructor() {}
    isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1))
    }
    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null
            ? false
            : true;
    }
    isPhone(str) {
        let phone = str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
        return phone === null
            ? false
            : true;
    }

}
const validator = new Validator();
console.log(validator.isEmail('test@mail.ru'));
console.log(validator.isDomain('test.ru'));
console.log(validator.isDate('09.01.2023'));
console.log(validator.isPhone('+7(916)125-26-54'));

class ValidatorStatic {
    constructor() {}
    static isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    static isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1))
    }
    static isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null
            ? false
            : true;
    }
    static isPhone(str) {
        let phone = str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
        return phone === null
            ? false
            : true;
    }

}

console.log(ValidatorStatic.isEmail('test@mail.ru'));
console.log(ValidatorStatic.isDomain('test.ru'));
console.log(ValidatorStatic.isDate('09.01.2023'));
console.log(ValidatorStatic.isPhone('+7(916)125-26-54'));