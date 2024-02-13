import { generateDiv } from "./app.js";

const randomGroup = (arr, num) => {
    if(num !== "0") {
        let array = [];
        let randArr = arr;
        let count = 0;

        for (let i = 0; i < num; i++) {
            let empty = [];
            array.push(empty);
        }

        while (randArr.length >= 1) {
            for (let i = 0; i < num; i++) {
                if (randArr.length !== 0) {
                    let index = Math.floor(Math.random() * randArr.length);
                    array[i].push(randArr[index]);
                    randArr.splice(index, 1);
                }
            }
        }

        generateDiv.innerHTML = "";

        array.map(ray => {
            count++;
            let h2 = document.createElement("h2");
            h2.textContent = "Group " + count + ": ";
            h2.className = "light groups";

            for(let i = 0; i < ray.length; i++){
                if(ray.length > 1){
                    if(i === ray.length - 1){
                    h2.textContent += ray[i];
                    }else {
                       h2.textContent += ray[i] + ", "; 
                    }
                } else {
                    h2.textContent += ray[i];
                }
            }

            generateDiv.append(h2);
        })
    } 
}

export { randomGroup }