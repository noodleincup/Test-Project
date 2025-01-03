
const add = document.getElementById('Add');
const subtract = document.getElementById('Subtract');
const number = document.getElementById('number');
const reset = document.getElementById('Reset');
const theme = document.getElementById("bg-mode"); 

let count = 0;

theme.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode"); // Add a class for dark mode
  } else {
    document.body.classList.remove("dark-mode"); // Remove the dark mode class
  }
});

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

reset.addEventListener('click', () => { 
    count = 0;
    number.innerHTML = `Number is ${count}`;
})

