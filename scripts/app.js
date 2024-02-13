import { addName } from "./addName.js";
import { saveLocalStorage, getLocalStorage } from "./localStorage.js";
import { randomGroup } from "./randomGroup.js";
import { colorReturn } from "./colorReturn.js";

let nameInput = document.getElementById("nameInput");
let addBtn = document.getElementById("addBtn");
let groupSlider = document.getElementById("groupSlider");
let groupVal = document.getElementById("groupVal");
let generateBtn = document.getElementById("generateBtn");
let randomBtn = document.getElementById("randomBtn");
let generateDiv = document.getElementById("generateDiv");
let displayCol = document.getElementById("displayCol");
let userBtn = document.getElementById("userBtn");

const randomUser = async () => {
    const promise = await fetch('https://randomuser.me/api/');
    const data = await promise.json();
    return data.results[0].name.first + " " + data.results[0].name.last;
}


let arr = [];
const updateSlider = () => {
    groupVal.textContent = groupSlider.value;
    console.log("change");
}

const update = () => {
    generateDiv.innerHTML = "";
    displayCol.innerHTML = "";
    arr = getLocalStorage();

    arr.map(el => addName(el)); 
    groupSlider.max = arr.length;
    updateSlider();
}

update();

groupSlider.onchange = () => {
    updateSlider();
};

nameInput.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        saveLocalStorage(e.target.value);
        update();
        e.target.value = "";
    }
})

addBtn.addEventListener('click', () => {
    saveLocalStorage(nameInput.value);
    update();
    nameInput.value = "";
})

userBtn.addEventListener('click', async () => {
    saveLocalStorage(await randomUser());
    update();
})

randomBtn.addEventListener('click', () => {
    let newArr = getLocalStorage();
    generateDiv.innerHTML = "";
    console.log('hi');
    let num = Math.floor(Math.random() * newArr.length);
    let h2 = document.createElement("h2");
    h2.textContent = newArr[num];
    h2.className = "light randName ";
    console.log(newArr);
    generateDiv.append(h2);
})

generateBtn.addEventListener('click', () => {
    let groupArr = getLocalStorage();
    randomGroup(groupArr, groupSlider.value);
})

export { displayCol, update, generateDiv }