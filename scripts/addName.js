import { displayCol } from "./app.js";

const addName = (name) => {
    let button = document.createElement("button");
    button.className = "names";
    button.textContent = name;

    let img = document.createElement("img");
    img.src = "./assets/x (1).svg";
    img.className = "pointer";

    button.append(img);

    img.addEventListener('click', () => {
        button.remove();
    })

    displayCol.append(button);
}

export {addName}