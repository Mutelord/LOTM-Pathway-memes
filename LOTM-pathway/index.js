import { memesArray } from './data.js';
const memeContainer = document.querySelector('#memeContainer');
const memeBtn = document.querySelector("#meme-btn")
const modalInner = document.querySelector(".modal-inner")
const modalContainer = document.querySelector(".modal-container")
const closeBtn = document.querySelector("#close-btn")
memeBtn.addEventListener("click", showSingleObject)
closeBtn.addEventListener("click", close)
memeContainer.addEventListener("change", highlightOption)











function pickingAndChoosing () {
    if (document.querySelector("input[type='radio']:checked")) {
     const selectedCharacter = document.querySelector("input[type='radio']:checked").value
     const isGif = document.querySelector("#isGif").checked
        const characterShowArray = memesArray.filter(function(character) { 
         if(isGif) {
            return character.character.includes(selectedCharacter) && character.isGif
            } else  {
                return character.character.includes(selectedCharacter)
            }
        })
        return characterShowArray
    } else {modalInner.innerHTML = `
    <p class="sweet-message">
    MAROON 5 YA GOTTA PICK A CHARACTER, YA TARD </p>`
    modalContainer.style.display = "flex"}

    }
function weNeedASingleObject () {
    const newArray = pickingAndChoosing ()
    if (newArray.length === 1) {
        return newArray[0]

    } else {
        return newArray[Math.floor(Math.random()*newArray.length)   ]
    }
}
function showSingleObject () {
    const shownCharacter = weNeedASingleObject()
    modalInner.innerHTML = `
    <img 
    src="${shownCharacter.src}" 
    alt="${shownCharacter.alt}"
    class="meme-img"
    >
    `
    modalContainer.style.display ="flex"
}
function charactersArray(champions) {
    const character = []
    for (let chars of champions) {
        for (let char of chars.character ) {
            if (!character.includes(char)) {
                character.push(char)
            }
        }
    }
    return character
}
function displayCharacters (champions) {
    const character = charactersArray(champions)
    let listItem = ""
for (let person of character) {
    listItem +=   `
    <div class="character radio">
    <label for="${person}">${person}</label>
    <input
    id="${person}"
    value="${person}"
    name="character-choice"
    type="radio"> 
    </div>`
}
 memeContainer.innerHTML = listItem
}
displayCharacters(memesArray)

function close() {
    modalContainer.style.display = "none"
}
function highlightOption (e) {
    const radios = document.querySelectorAll(".radio")
    for (let radio of radios) {
        radio.classList.remove("highlight")
    }

    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}
