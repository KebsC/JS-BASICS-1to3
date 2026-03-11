const fnameTxt = document.getElementById("fname");
const mnameTxt = document.getElementById("mname");
const lnameTxt = document.getElementById("lname");

const fullName = document.getElementById("fullName");

function concatenate() {
  fullName.innerHTML =
    fnameTxt.value + " " + mnameTxt.value + " " + lnameTxt.value;
}

function clearEntries() {
  fnameTxt.value = "";
  mnameTxt.value = "";
  lnameTxt.value = "";

  fullName.innerHTML = "";
}
