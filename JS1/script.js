const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");

const sumSpan = document.getElementById("sum");
const diffSpan = document.getElementById("diff");
const prodSpan = document.getElementById("prod");
const quoSpan = document.getElementById("quo");

let sum = 0;

function calculate() {
  getSum();
  getDiff();
  getProd();
  getQuo();
}

function getSum() {
  if (!(num1Txt.value === "" || num2Txt.value === "")) {
    sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
    sumSpan.innerHTML = sum;
  }
}

function getDiff() {
  if (!(num1Txt.value === "" || num2Txt.value === "")) {
    diff = parseInt(num1Txt.value) / parseInt(num2Txt.value);
    diffSpan.innerHTML = diff;
  }
}

function getProd() {
  if (!(num1Txt.value === "" || num2Txt.value === "")) {
    prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
    prodSpan.innerHTML = prod;
  }
}

function getQuo() {
  if (!(num1Txt.value === "" || num2Txt.value === "")) {
    quo = parseInt(num1Txt.value) % parseInt(num2Txt.value);
    quoSpan.innerHTML = quo;
  }
}

function clearEntries() {
  num1Txt.value = "";
  num2Txt.value = "";
  resultTxt.innerHTML = "";
  sum = 0;
}
