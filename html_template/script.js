// Select DOM element
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

//initial State
let counter = 0;

// incrementing Value
incrementEl.addEventListener("click", function () {
    counter++;
    counterEl.innerHTML = counter;
});

//Decrementing Value
decrementEl.addEventListener("click", function () {
    counter--;
    counterEl.innerHTML = counter;
});
