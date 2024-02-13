import { addName } from "./addName.js";
import { saveLocalStorage, getLocalStorage } from "./localStorage.js";

let nameInput = document.getElementById("nameInput");
let addBtn = document.getElementById("addBtn");
let groupSlider = document.getElementById("groupSlider");
let groupVal = document.getElementById("groupVal");
let generateBtn = document.getElementById("generateBtn");
let randomBtn = document.getElementById("randomBtn");
let generateDiv = document.getElementById("generateDiv");
let displayCol = document.getElementById("displayCol");

const update = () => {
    displayCol.innerHTML = "";
    let arr = getLocalStorage();

    arr.map(el => addName(el)); 
    groupSlider.max = arr.length;
}

update();

const updateSlider = () => {
    groupVal.textContent = groupSlider.value;
    console.log("change");
}

groupSlider.onchange = () => {
    updateSlider();
};

nameInput.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        saveLocalStorage(e.target.value);
        update();
    }
})

addBtn.addEventListener('click', () => {
    saveLocalStorage(nameInput.value);
    update();
})



export { displayCol, update }