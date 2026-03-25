let myList = [2,4,5,7,8];

function onlyEvens(array) {
    return array.filter(n => n % 2 === 0);
}

console.log(onlyEvens(myList));