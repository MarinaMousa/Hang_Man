const letters = "abcdefghijklmnopqrstuvwxyz"

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    
    let span = document.createElement("span");

    let theLetter = document.createTextNode(letter);

    span.appendChild(theLetter);

    span.className = 'letter-box';

    lettersContainer.appendChild(span);
});

const words = {
    animals: ["Cat", "Dog", "Fish", "Tiger", "Lion", "Horse", "Rabbit", "Sheep", "Cow", "Giraffe", "Elephant", "Monkey", "Goat", "Hen", "Duck", "Camel", "Donkey"],
    clothes: ["Sweater", "Dress", "Jacket", "Pants", "Skirt", "Shorts", "Shirt", "Jeans", "Sock", "Hat","Shoes", "Vest", "Coat", "Boot", "Scarf", "Suit", "Gloves"],
    names: ["Marina", "Martina", "Nardeen", "Youstina", "Kerolos", "Karas", "Sara", "Safaa", "Liza", "Sonya", "Mark", "Ramy", "Samy", "Fady", "Tony", "Joy", "Peter"],
    countries: ["Syria", "Kuwait", "Egypt", "Paris", "Bahrain", "Qatar", "Canada", "China", "Italy", "Brazil", "United States", "France", "Germany", "Japan", "Saudi Arabia"]
}

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomePropName = allKeys[randomPropNumber];
let randomPropValue = words[randomePropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomePropName;

let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach(letter => {

    let emptySpan = document.createElement("span");

    if (letter === ' ') {

        emptySpan.className = 'with-space';
    }

    lettersGuessContainer.appendChild(emptySpan);

})

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;


let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {

    let theStatus = false;

    if (e.target.className === 'letter-box') {

        e.target.classList.add("clicked");

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        theChosenWord.forEach((wordLetter, wordIndex) => {

            if (theClickedLetter == wordLetter) {

                theStatus = true;

                guessSpans.forEach((span, spanIndex) => {

                    if (wordIndex === spanIndex) {

                        span.innerHTML = theClickedLetter;
                    }
                });

            }
        });

        if (theStatus !== true) {

            wrongAttempts++;

            theDraw.classList.add(`wrong-${wrongAttempts}`);

            document.getElementById("fail").play();

            if (wrongAttempts === 8) {

                endGame();

                lettersContainer.classList.add("finished");
            }

        } else {

            document.getElementById("success").play();

        }
        
    }
});

function endGame () {

    let div = document.createElement("div");

    let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

    div.appendChild(divText);

    div.className = 'popup';
    
    document.body.appendChild(div);
}


