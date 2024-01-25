import { EncryptionLogic } from "./encryptionLogic.js";
export class UI extends EncryptionLogic {
  constructor(encryptedCharactersCodes) {
    super(encryptedCharactersCodes);
    this.textAreaMain = document.querySelector(".textarea");
    this.textareaSecond = document.querySelector(".textarea2");
    this.button1 = document.querySelector("#btnEncrypt");
    this.button2 = document.querySelector("#btnDecrypt");
    this.button3 = document.querySelector("#btnCopy");
    this.encryptedText = document.querySelector(".encrypted-text");
    this.noContent = document.querySelector(".no-content");
    this.button3.addEventListener("click", () =>
      this.copy(this.textareaSecond.value)
    );
    this.button1.addEventListener("click", () => this.encryptText());
    this.button2.addEventListener("click", () => this.decryptText());
  }

  encryptText() {
    this.textareaSecond.value = this.textAreaMain.value;
    if (this.textareaSecond.value == "") {
      this.noContent.classList.remove("none");
    } else {
      let words = this.encrypt(this.textAreaMain.value);
      this.textareaSecond.value = words;
      this.encryptedText.classList.add("com");
      this.noContent.classList.add("none");
    }
  }

  decryptText() {
    this.textareaSecond.value = this.textAreaMain.value;
    if (this.textareaSecond.value == "") {
      this.noContent.classList.remove("none");
    } else {
      let word = this.decrypt(this.textareaSecond.value);
      this.textareaSecond.value = word;
      this.encryptedText.classList.add("com");
      this.noContent.classList.add("none");
    }
  }

  copy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.button3.innerHTML = "Copiado";
        setTimeout(() => (this.button3.innerHTML = "Copiar"), 1000);
      })
      .catch(() => alert("Falha ao copiar o texto"));
  }
}
