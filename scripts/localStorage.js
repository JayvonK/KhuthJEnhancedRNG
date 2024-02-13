const getLocalStorage = () => {
    if(localStorage.getItem("randomNames") === null)
    {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("randomNames"));
    }
}

const saveLocalStorage = (param) => {
    let names = getLocalStorage();

    if(!names.includes(param)){
        names.push(param);
    }

    localStorage.setItem("randomNames", JSON.stringify(names));
}

const removeLocalStorage = (param) => {
    let names = getLocalStorage();
    let index = names.indexOf(param);

    names.splice(index, 1);
    localStorage.setItem("randomNames", JSON.stringify(names));
}

export {getLocalStorage, saveLocalStorage, removeLocalStorage}