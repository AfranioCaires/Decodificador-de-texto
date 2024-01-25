export class EncryptedCharactersCodes {
  constructor() {
    this.codes = new Map();
  }

  addCode(letter, code) {
    this.codes.set(letter, code);
  }

  hasCode(letter) {
    return this.codes.has(letter);
  }

  getCode(letter) {
    return this.codes.get(letter);
  }

  getCodes() {
    return this.codes;
  }
}
