import { EncryptedCharactersCodes } from "./charCodes.js";
import { UI } from "./encryptionInterace.js";

const encryptedCharactersCodes = new EncryptedCharactersCodes();
encryptedCharactersCodes.addCode("a", "ai");
encryptedCharactersCodes.addCode("e", "enter");
encryptedCharactersCodes.addCode("i", "imes");
encryptedCharactersCodes.addCode("o", "ober");
encryptedCharactersCodes.addCode("u", "ufat");

const ui = new UI(encryptedCharactersCodes);
