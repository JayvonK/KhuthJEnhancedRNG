import { addName } from "./addName.js";

let nameInput = document.getElementById("nameInput");
let addBtn = document.getElementById("addBtn");
let groupSlider = document.getElementById("groupSlider");
let groupVal = document.getElementById("groupVal");
let generateBtn = document.getElementById("generateBtn");
let randomBtn = document.getElementById("randomBtn");
let generateDiv = document.getElementById("generateDiv");
let displayCol = document.getElementById("displayCol");

nameInput.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        addName(e.target.value);
    }
})





















export { displayCol }