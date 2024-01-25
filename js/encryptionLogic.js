export class EncryptionLogic {
  constructor(encryptedCharactersCodes) {
    this.encryptedCharactersCodes = encryptedCharactersCodes;
  }

  encrypt(valueString) {
    let encryptedString = "";
    for (let i = 0; i < valueString.length; i++) {
      const char = valueString.charAt(i).toLowerCase();
      if (this.encryptedCharactersCodes.hasCode(char)) {
        encryptedString += this.encryptedCharactersCodes.getCode(char);
      } else {
        encryptedString += char;
      }
    }
    return encryptedString;
  }

  decrypt(valueString) {
    let decryptedString = "";
    let i = 0;
    while (i < valueString.length) {
      let found = false;
      for (const [key, value] of Object.entries(
        this.encryptedCharactersCodes.getCodes()
      )) {
        if (valueString.startsWith(value, i)) {
          decryptedString += key;
          i += value.length;
          found = true;
          break;
        }
      }
      if (!found) {
        decryptedString += valueString.charAt(i);
        i++;
      }
    }
    return decryptedString;
  }
}
