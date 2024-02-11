const arithmetic = ["+", "-", "/", "*"];
const mapping = { p: "+", s: "-", d: "/", m: "*" };

function add00() {
  if (check0()) {
    value = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = value + "00";
  } else {
    document.getElementById("display").innerHTML = 0;
  }
}

function dispVal(digit) {
  if (check0()) {
    value = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = value + digit;
  } else {
    document.getElementById("display").innerHTML = digit;
  }
}

function delete1() {
  if (check0()) {
    value = document.getElementById("display").innerHTML;
    if (value.length == 1) document.getElementById("display").innerHTML = 0;
    else document.getElementById("display").innerHTML = value.slice(0, -1);
  } else {
    document.getElementById("display").innerHTML = 0;
  }
}

function clearDisplay() {
  document.getElementById("display").innerHTML = 0;
}
function check0() {
  if (document.getElementById("display").innerHTML == 0) return false;
  else return true;
}

function math(sym) {
  value = document.getElementById("display").innerHTML;
  if (!arithmetic.includes(value.slice(-1))) {
    document.getElementById("display").innerHTML = value + mapping[sym.value];
  }
}

function getResult() {
  value = document.getElementById("display").innerHTML;
  try {
    result = eval(value);
    document.getElementById("display").innerHTML = result;
  } catch (err) {
    alert("Invalid Expression");
  }
}

function dot() {
  value = document.getElementById("display").innerHTML;
  l = value.split(/[\+\*\-\/\(\)]/);
  arr = Array.from(l[l.length - 1]);
  if (!arr.includes(".")) {
    if (l[l.length - 1] == "")
      document.getElementById("display").innerHTML = value + "0.";
    else document.getElementById("display").innerHTML = value + ".";
  }
}

function brac() {
  value = document.getElementById("display").innerHTML;
  arr = Array.from(value);
  openCount = 0;
  closeCount = 0;
  for (i of arr) {
    if (i == "(") openCount++;
    else if (i == ")") closeCount++;
  }
  if (value == "0") document.getElementById("display").innerHTML = "(";
  else if (openCount == closeCount)
    document.getElementById("display").innerHTML = value + "(";
  else document.getElementById("display").innerHTML = value + ")";
}
