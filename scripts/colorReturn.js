const colorReturn = () => {
    let index = Math.floor(Math.random() * 8);
    switch (index) {
        case 0:
            return "background-color: #561c24";
            break;
        case 1:
            return "background-color: #141877";
            break;
        case 2:
            return "background-color: #380566";
            break;
        case 3:
            return "background-color: #711f7b";
            break;
        case 4:
            return "background-color: #000000";
            break;
        case 5:
            return "background-color: #0f6624";
            break;
        case 6:
            return "background-color: #167b70";
            break;
        case 7:
            return "background-color: #B95810";
            break;
    }
}

export { colorReturn }