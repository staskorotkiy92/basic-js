class VigenereCipheringMachine {
    constructor(mode) {
        this.mode = mode;
        if (this.mode === undefined) this.mode = true;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
        this.alphabetTb = new Map();
        this.alphabet.forEach((element, i) => {
            this.alphabetTb.set(element, i);
        });
    }
    encrypt(message, key) {
        if (!(message || key)) throw 'Error';
        let msgValue = message.toUpperCase();
        let keyValue = key.toUpperCase();
        let encodedWord = [];
        let j = 0;
        let keyCharIdx = 0;
        let encodedCharIdx = 0;
        for (let i = 0; i < message.length; i++) {
            if (!this.alphabetTb.has(msgValue[i])) {
                encodedWord.push(msgValue[i]);
            }
            else {
                if (j > (key.length - 1)) {
                    j = 0;
                }
                keyCharIdx = this.alphabetTb.get(keyValue[j]);
                encodedCharIdx = (this.alphabetTb.get(msgValue[i]) + keyCharIdx) % this.alphabetTb.size;
                j++;
                encodedWord.push(this.alphabet[encodedCharIdx]);
            }
        }
        return this.mode ? encodedWord.join('') : encodedWord.reverse().join('');
    }

    decrypt(message, key) {
        if (!(message || key)) throw 'Error';
        let msgValue = message.toUpperCase();
        let keyValue = key.toUpperCase();
        let decodedWord = [];
        let j = 0;
        let keyCharIdx = 0;
        let decodedCharIdx = 0;
        for (let i = 0; i < message.length; i++) {
            if (!this.alphabetTb.has(msgValue[i])) {
                decodedWord.push(msgValue[i]);
            }
            else {
                if (j > (key.length - 1)) {
                    j = 0;
                }
                keyCharIdx = this.alphabetTb.get(keyValue[j]);
                decodedCharIdx = (this.alphabetTb.get(msgValue[i]) +
                    this.alphabetTb.size - keyCharIdx) % (this.alphabetTb.size);
                j++;
                decodedWord.push(this.alphabet[decodedCharIdx]);
            }

        }
        return this.mode ? decodedWord.join('') : decodedWord.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;



