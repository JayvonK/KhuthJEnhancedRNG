const randomGroup = (arr, num) => {
    if(num !== "0") {
        let array = [];
        let randArr = arr;

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
        console.log(array);
    } 
}

export { randomGroup }