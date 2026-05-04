export class RegexHelper {
  static isEmailValid(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  static isPasswordValid(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  }

  static isWebsiteValid(website) {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
    return regex.test(website);
  }

  static isAzerbaijaniPhoneNumberValid(phoneNumber) {
    const regex = /^(?:\+994|0)(?:50|51|55|70|77|60|99|10|12)\d{7}$/;
    return regex.test(phoneNumber);
  }
}
