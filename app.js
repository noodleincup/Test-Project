
const add = document.getElementById('Add');
const subtract = document.getElementById('Subtract');
const number = document.getElementById('number');

let count = 0;

add.addEventListener('click', () => { 
    count++;
    number.innerHTML = `Number is ${count}`;
    // alert("Add button is clicked");
})

add.addEventListener('dblclick', () => { 
    count += 5;
    number.innerHTML = `Number is ${count}`;
})

subtract.addEventListener('click', () => {
    count--;
    number.innerHTML = `Number is ${count}`;
    // alert("Subtract button is clicked");
})

subtract.addEventListener("dblclick", () => {
  count -= 5;
  number.innerHTML = `Number is ${count}`;
});

number.innerHTML = `Number is ${count}`;

