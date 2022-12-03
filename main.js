let forest = document.getElementsByClassName('forest')[0];
let sand = document.getElementsByClassName('sand')[0];
let teal = document.getElementsByClassName('teal')[0];
let navy = document.getElementsByClassName('navy')[0];
let red = document.getElementsByClassName('red')[0];
let babyBlue = document.getElementsByClassName('babyBlue')[0];

let elements = [forest, sand, teal, navy, red, babyBlue]; 

const transition = () => {
    elements.forEach(e => {
        if (e.id.includes('1')) {
            e.id = e.id.substring(0, e.id.length - 1) + '2';
        } 
        else if (e.id.includes('2')) {
            e.id = e.id.substring(0, e.id.length - 1) + '3';
        }
        else {
            e.id = e.id.substring(0, e.id.length - 1) + '1';
        }
    });
}

setInterval( 
    transition,
    4000
);
 