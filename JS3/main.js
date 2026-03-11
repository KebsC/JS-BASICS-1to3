const numArr = [];

const allNumbers = document.getElementById("allNum");
const number = document.getElementById("num");
const sumSpan = document.getElementById("sumSpan");
const highestSpan = document.getElementById("highsetSpan");
const lowestSpan = document.getElementById("lowestSpan");

function insertNumber() {
  if (!(number.value === "")) {
    const num = Number(number.value);
    numArr.push(num);

    allNumbers.innerHTML = numArr.join("<br>");

    let sum = 0;
    let highest = numArr[0];
    let lowest = numArr[0];

    for (let i = 0; i < numArr.length; i++) {
      const n = numArr[i];

      sum += n;

      if (n > highest) {
        highest = n;
      }

      if (n < lowest) {
        lowest = n;
      }
    }

    sumSpan.textContent = sum;
    highestSpan.textContent = highest;
    lowestSpan.textContent = lowest;

    number.value = "";
  }
}

function deleteAll() {
  numArr.length = 0;
  allNumbers.textContent = "";
  sumSpan.textContent = "";
  highestSpan.textContent = "";
  lowestSpan.textContent = "";
  number.value = "";
  number.focus();
}
