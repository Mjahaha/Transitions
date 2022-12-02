/* 
Project Milestones
- make my transitions project work
- make my mix messages project work 
- make my transitions accept message text nicely 
- use modules to pull in mixed messages code 
- add listeners write mixed message text into transition elements
- optional: add a form element box and use what is writting into the form input

Mixed Messages goals
- make an array of nouns
- make an array of strings
- make a function that randomly selects three nouns and adds them into a random string, returning result
*/


const sentences = 
    [`I once saw ${word1} walking by a lake. Then BAM! It was ${word2}, right to the face. I thanked ${word3} and left.`, 
    `I never understood ${word1}, they always seem to be around ${word2} when it makes much more sences to be with ${word3}.`,
    `If ${word1} did a fraction of what ${word2} does, I think ${word3} would have a meltdown!`,
    `Don't tell me that ${word1} didn't know what ${word2} was up to, because ${word3} told me years ago.`,
    `Once ${word1} told me hate is a powerful emotion. That's why I never trust ${word2} or ${word3}.`,
    `Someone once told me they saw ${word1} and ${word2} together. I said that's a load of ${word3}.`];

const messages = () => {
    
    let nouns = ['a swan', 'Michael Jackson', 'Joseph Smith', 'a hairy pinnaple', 'five apples', 'Dr Evil', 
    'bags of teeth', 'pork', 'Tarzan', 'Goofy' ]; 

    let word1 = nouns.splice(Math.floor(Math.random() * nouns.length), 1).join('');
    let word2 = nouns.splice(Math.floor(Math.random() * nouns.length), 1).join('');
    let word3 = nouns.splice(Math.floor(Math.random() * nouns.length), 1).join('');

    

    let output1 = sentences.splice(Math.floor(Math.random() * sentences.length), 1).join('');
    let output2 = sentences.splice(Math.floor(Math.random() * sentences.length), 1).join('');
    let output3 = sentences.splice(Math.floor(Math.random() * sentences.length), 1).join('');
    return output1 + ' ' + output2 + ' ' + output3;

}

console.log(messages());
console.log(messages());
console.log(messages());

