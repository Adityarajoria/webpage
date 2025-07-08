
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const specialEl = document.getElementById('special');
const generateBtn = document.getElementById('generate');


const charSets = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    special: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};


function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}


function generatePassword() {
    const length = +lengthEl.value; 
    const includeUpper = uppercaseEl.checked;
    const includeNumber = numbersEl.checked;
    const includeSpecial = specialEl.checked;

    let characterPool = charSets.lower;
    let password = [];

    
    
    password.push(getRandomChar(charSets.lower));

    
    if (includeUpper) {
        characterPool += charSets.upper;
        password.push(getRandomChar(charSets.upper));
    }
    if (includeNumber) {
        characterPool += charSets.number;
        password.push(getRandomChar(charSets.number));
    }
    if (includeSpecial) {
        characterPool += charSets.special;
        password.push(getRandomChar(charSets.special));
    }

    
    const remainingLength = length - password.length;
    for (let i = 0; i < remainingLength; i++) {
        password.push(getRandomChar(characterPool));
    }

    

    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    
    resultEl.innerText = password.join('');
}


generateBtn.addEventListener('click', generatePassword);


generatePassword();