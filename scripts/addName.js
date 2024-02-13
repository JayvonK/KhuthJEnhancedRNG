import { displayCol, update } from "./app.js";
import { removeLocalStorage } from "./localStorage.js";

const addName = (name) => {
    let button = document.createElement("button");
    button.className = "names";
    button.textContent = name;

    let img = document.createElement("img");
    img.src = "./assets/x (1).svg";
    img.className = "pointer";
    img.style = "margin-left: 10px";

    button.append(img);

    img.addEventListener('click', () => {
        removeLocalStorage(name);
        update();
    })

    displayCol.append(button);
}

export {addName}