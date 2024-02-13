import { displayCol, update } from "./app.js";
import { removeLocalStorage } from "./localStorage.js";
import { colorReturn } from "./colorReturn.js";

const addName = (name) => {
    let button = document.createElement("button");
    button.className = "names";
    button.textContent = name;
    button.style = colorReturn();

    let img = document.createElement("img");
    img.src = "./assets/x (1).svg";
    img.className = "pointer";
    img.style = "margin-left: 20px";

    button.append(img);

    img.addEventListener('click', () => {
        removeLocalStorage(name);
        update();
    })

    displayCol.append(button);
}

export {addName}