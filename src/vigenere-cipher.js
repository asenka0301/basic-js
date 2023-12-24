const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const ASCII_A = 65;
const ASCII_Z = 90;
const ALPHABET_SIZE = (ASCII_Z - ASCII_A + 1);

class VigenereCipheringMachine {
  constructor (isDirect) {
    this.isDirect = isDirect !== 'undefined' && isDirect === false ? false : true;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encodedMessage = '';
    let keyPosition = 0;
    for (let i = 0; i < message.length; i++) {
      const charToEncode = message[i];

      if (charToEncode === ' ') {
        encodedMessage += ' ';
        continue;
      }

      const charToEncodeAlphabetPosition = charToEncode.charCodeAt(0) - ASCII_A;

      if (charToEncodeAlphabetPosition + ASCII_A < ASCII_A
          || charToEncodeAlphabetPosition + ASCII_A > ASCII_Z
        ) {
          encodedMessage += charToEncode;
          continue;
        }

      const charEncodeBy = key[keyPosition % key.length];
      const shiftSize = charEncodeBy.charCodeAt(0) - ASCII_A;
      const charEncodedAlphabetPosition = (charToEncodeAlphabetPosition + shiftSize) % ALPHABET_SIZE + ASCII_A;
      const charEncoded = String.fromCharCode(charEncodedAlphabetPosition);

      encodedMessage += charEncoded;
      keyPosition += 1;
    }

    if (!this.isDirect) {
      return encodedMessage.split('').reverse().join('');
    }

    return encodedMessage;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decodedMessage = '';
    let keyPosition = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      const charToDecode = encryptedMessage[i];

      if (charToDecode === ' ') {
        decodedMessage += ' ';
        continue;
      }

      const charToDecodeAlphabetPosition = charToDecode.charCodeAt(0) - ASCII_A;

      if (charToDecodeAlphabetPosition + ASCII_A < ASCII_A
          || charToDecodeAlphabetPosition + ASCII_A > ASCII_Z
        ) {
          decodedMessage += charToDecode;
          continue;
        }

      const charEncodedBy = key[keyPosition % key.length];
      const shiftSize = charEncodedBy.charCodeAt(0) - ASCII_A;
      const charDecodedAlphabetPosition = (charToDecodeAlphabetPosition - shiftSize + ALPHABET_SIZE) % ALPHABET_SIZE + ASCII_A;
      const charDecoded = String.fromCharCode(charDecodedAlphabetPosition);

      decodedMessage += charDecoded;
      keyPosition += 1;
    }

    if (!this.isDirect) {
      return decodedMessage.split('').reverse().join('');
    }

    return decodedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
