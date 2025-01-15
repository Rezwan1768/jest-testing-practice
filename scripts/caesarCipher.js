
export function caesarCipher(str, shift) {
    const NUM_ALPHABETS = 26;
    let cipheredLetters = [];
    let shiftAmount = shift % NUM_ALPHABETS; 
    // With 26 alpahbets, the amount to shift by is between 0 and 25.
    // If I don't modulo the shift number, then there would be errors 
    // when adding the shift, since the ASCII codes for the letters is 
    // not between 0 and 25.
    
    for(let c of str) {
        // ASCII code for lower case letters is form 97 (a) to 122 (z).
        if(c.charCodeAt() >= 97 && c.charCodeAt() <= 122) {
            let newLetterCode = (c.charCodeAt() - 97 + shiftAmount + NUM_ALPHABETS) % NUM_ALPHABETS + 97;
            cipheredLetters.push(String.fromCharCode(newLetterCode));
        }

        // ASCII code for uppper case letters is form 65 (a) to 90 (z).
        else if(c.charCodeAt() >= 65 && c.charCodeAt() <= 90) {
            let newLetterCode = (c.charCodeAt() - 65 + shiftAmount + NUM_ALPHABETS) % NUM_ALPHABETS + 65; 
            cipheredLetters.push(String.fromCharCode(newLetterCode));
        }
        else {
            cipheredLetters.push(c);
        }
        
    }
    return cipheredLetters.join('');
}


console.log(caesarCipher("Hello World!", 1000));