/* 
Project Milestones
- make my transitions project work 
- make my mix messages project work CHECK
- make my transitions accept message text nicely 
- use modules to pull in mixed messages code - NOPE, CANT DO THAT LOCALLY
- add listeners write mixed message text into transition elements
- optional: add a form element box and use what is writting into the form input

Mixed Messages goals
- make an array of nouns CHECK
- make an array of strings CHECK
- make a function that randomly selects three nouns and adds them into a random string, returning result CHECK
*/

const sentences = 
    [`I once saw PLACEHOLDER1 walking by a lake. Then BAM! It was PLACEHOLDER2, right to the face. I thanked PLACEHOLDER3 and left.`, 
    `I never understood PLACEHOLDER1, they always seem to be around PLACEHOLDER2 when it makes much more sences to be with PLACEHOLDER3.`,
    `If PLACEHOLDER1 did a fraction of what PLACEHOLDER2 does, I think PLACEHOLDER3 would have a meltdown!`,
    `Don't tell me that PLACEHOLDER1 didn't know what PLACEHOLDER2 was up to, because PLACEHOLDER3 told me years ago.`,
    `Once PLACEHOLDER1 told me hate is a powerful emotion. That's why I never trust PLACEHOLDER2 or PLACEHOLDER3.`,
    `Someone once told me they saw PLACEHOLDER1 and PLACEHOLDER2 together. I said that's a load of PLACEHOLDER3.`];

const messages = () => {
    let nouns = ['a swan', 'Michael Jackson', 'Joseph Smith', 'a hairy pinnaple', 'five apples', 'Dr Evil', 
    'bags of teeth', 'pork', 'Tarzan', 'Goofy' ]; 

    let word1 = nouns.splice(Math.floor(Math.random() * nouns.length), 1).join('');
    let word2 = nouns.splice(Math.floor(Math.random() * nouns.length), 1).join('');
    let word3 = nouns.splice(Math.floor(Math.random() * nouns.length), 1).join('');

    let output = sentences.splice(Math.floor(Math.random() * sentences.length), 1).join('');
    output = output.replace('PLACEHOLDER1', word1);
    output = output.replace('PLACEHOLDER2', word2);
    output = output.replace('PLACEHOLDER3', word3);
    return output;

}

const addMessage = () => {
    let newText = document.createElement('div');
    newText.innerHTML = '<p>' + messages() + '</p>';
    newText.class = 'text';
    event.target.appendChild(newText);
    event.target.removeEventListener('click', addMessage);    
}

forest.addEventListener('click', addMessage);
sand.addEventListener('click', addMessage);
teal.addEventListener('click', addMessage);
navy.addEventListener('click', addMessage);
red.addEventListener('click', addMessage);
babyBlue.addEventListener('click', addMessage);

 
