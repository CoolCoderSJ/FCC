let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let display = document.getElementById('display');
let decimalAllowed = true;

for (let i = 0; i < numbers.length; i++) {
  let numberBtn = document.getElementById(numbers[i]);
  numberBtn.addEventListener('click', function () {
    if (display.value == "0" || display.value == "") {
      display.value = "";
      display.value += numbers2[i];
    } else
    {
      display.value += numbers2[i];
    }
  });

}

document.getElementById('clear').addEventListener('click', function () {
  display.value = '0';
  decimalAllowed = true;
});

document.getElementById('equals').addEventListener('click', function () {
  display.value = eval(display.value);
});

document.getElementById("decimal").addEventListener("click", function () {
  if (decimalAllowed) {
    display.value += ".";
    decimalAllowed = false;
  }
});

document.getElementById("add").addEventListener("click", function () {
  while (display.value[display.value.length - 1].match(/[+*/-]/)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += "+";
  decimalAllowed = true;
});

document.getElementById("subtract").addEventListener("click", function () {
  display.value += "-";
  decimalAllowed = true;
});

document.getElementById("multiply").addEventListener("click", function () {
  while (display.value[display.value.length - 1].match(/[+*/-]/)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += "*";
  decimalAllowed = true;
});

document.getElementById("divide").addEventListener("click", function () {
  while (display.value[display.value.length - 1].match(/[+*/-]/)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += "/";
  decimalAllowed = true;
});