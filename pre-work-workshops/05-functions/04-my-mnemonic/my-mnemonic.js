// YOUR CODE BELOW

/*
myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
myMnemonic('We', 'Eat', 'Eggs'); // => WEE
*/

/* function myMnemonic(string1, string2, string3, string4) {
    
    let Mnemonic = '';

    if(string1 !== undefined && string2 !== undefined && string3 !== undefined && string4 !== undefined) {
        Mnemonic = string1[0] + string2[0] + string3[0] + string4[0];
        return Mnemonic;
    }
    else if (string4 === undefined) {
        Mnemonic = string1[0] + string2[0] + string3[0];
        return Mnemonic; 
    }
    else if (string4 === undefined && string3 === undefined) {
        Mnemonic = string1[0] + string2[0];
        return Mnemonic; 
    }
    else if (string4 === undefined && string3 === undefined && string2 === undefined) {
        Mnemonic = string1[0];
        return Mnemonic;
    }
    else {
        return 'Please input words'
    }
}
*/

function myMnemonic(...words){
   let mnemonic = '';

    for (let i = 0; i < words.length; ++i) {
        const currentWord = words[i];
        const currentCharacter = currentWord[0];
       
        mnemonic += currentCharacter;
    }
    
    return mnemonic;
}


    