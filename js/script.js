const array = [];
const numerirandom = 10;
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

while (array.length < numerirandom){
    array.push(randomNum(1,100));
}

console.log(array);

const min = 1;
const max = 10;

let filter = [];

const filtrato = (Array,a,b) => {
    return Array.filter((element,index) => index >= a && index <= b);
};
console.log(filtrato(array,min,max));