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

let arr = [];

const update = () => {
    displayCol.innerHTML = "";
    arr = getLocalStorage();

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

randomBtn.addEventListener('click', () => {
    generateDiv.innerHTML = "";
    let num = Math.floor(Math.random() * arr.length);
    let h2 = document.createElement("h2");
    h2.textContent = arr[num];
    h2.className = "light randName";

    generateDiv.append(h2);
})

export { displayCol, update }