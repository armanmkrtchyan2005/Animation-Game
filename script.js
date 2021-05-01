let block1 = document.querySelector(".block1");
let block2 = document.querySelector(".block2");
let block3 = document.querySelector(".block3");
let btn = document.querySelector(".btn");
let start = true;

let rotate1 = 0;
let rotate2 = 0;
let rotate3 = 0;

function interval() {
    block1.style.transform = `rotate(${rotate1 + 5 + "deg"})`;
    rotate1 = rotate1 % 360 + 1;
    block2.style.transform = `rotate(${rotate2 + 5 + "deg"})`;
    rotate2 = rotate2 % 360 + 1;
    block3.style.transform = `rotate(${rotate3 + 5 + "deg"})`;
    rotate3 = rotate3 % 360 + 1;
}

let myInterval = setInterval(interval, 0.1);

btn.addEventListener("click", function () {
    start ? clearInterval(myInterval) : myInterval = setInterval(interval, 0.1);

    start = !start;
});
