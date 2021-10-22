// Campos de letras y numeros
const letter = document.getElementById("letter");
const numbers = document.getElementById("numbers");
//botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");

//funciones
const fnA1 = () => {
  if (letter.innerHTML == "") {
    letter.innerHTML = "A";
  } else {
    numbers.innerHTML = "1";
  }
};
console.log(letter.innerHTML);
const fnB2 = () => {
  if (letter.innerHTML == "A") {
    letter.innerHTML += "B";
  } else if (numbers.innerHTML == "1") {
    numbers.innerHTML += "2";
  } else if (letter.innerHTML !== "A" || numbers.innerHTML !== "1") {
    alert("Faltan datos");
  }
};
const fnC3 = () => {
  if (letter.innerHTML == "AB") {
    letter.innerHTML += "C";
  } else if (numbers.innerHTML == "12") {
    numbers.innerHTML += "3";
  } else if (letter.innerHTML !== "A" || numbers.innerHTML !== "1") {
    alert("faltan datos");
  }
};
const fnD4 = () => {
  if (letter.innerHTML == "ABC") {
    letter.innerHTML += "D";
  } else if (numbers.innerHTML == "123") {
    numbers.innerHTML += "4";
  } else if (letter.innerHTML !== "A" || numbers.innerHTML !== "1") {
    alert("faltan datos");
  }
};
const fnE5 = () => {
  if (letter.innerHTML == "ABCD") {
    letter.innerHTML += "E";
  } else if (numbers.innerHTML == "1234") {
    numbers.innerHTML += "5";
  } else if (letter.innerHTML !== "A" || numbers.innerHTML !== "1") {
    alert("faltan datos");
  }
};
const fnF6 = () => {
  if (letter.innerHTML == "ABCDE") {
    letter.innerHTML += "F";
  } else if (numbers.innerHTML == "12345") {
    numbers.innerHTML += "6";
  } else if (letter.innerHTML !== "A" || numbers.innerHTML !== "1") {
    alert("faltan datos");
  }
};
const fnG7 = () => {
  if (letter.innerHTML == "ABCDEF") {
    letter.innerHTML += "G";
  } else if (numbers.innerHTML == "123456") {
    numbers.innerHTML += "7";
  } else if (letter.innerHTML !== "A" || numbers.innerHTML !== "1") {
    alert("faltan datos");
  }
};
const fnH8 = () => {
  if (letter.innerHTML == "ABCDEFG") {
    letter.innerHTML += "H";
  } else if (numbers.innerHTML == "1234567") {
    numbers.innerHTML += "8";
  } else if (letter.innerHTML !== "A" || numbers.innerHTML !== "1") {
    alert("faltan datos");
  }
};
const fnI9 = () => {
  if (letter.innerHTML == "ABCDEFGH") {
    letter.innerHTML += "I";
  } else if (numbers.innerHTML == "12345678") {
    numbers.innerHTML += "9";
  } else if (letter.innerHTML !== "A" || numbers.innerHTML !== "1") {
    alert("faltan datos");
  }
};
const fnJ0 = () => {
  if (letter.innerHTML == "ABCDEFGHI") {
    letter.innerHTML += "J";
  } else if (numbers.innerHTML == "123456789") {
    numbers.innerHTML += "0";
  } else if (letter.innerHTML !== "A" || numbers.innerHTML !== "1") {
    alert("faltan datos");
  }
};
const fnCL = () => {
  letter.innerHTML = "";
};
const fnCN = () => {
  numbers.innerHTML = "";
};

//eventos
a1.onclick = () => {
  fnA1();
};
b2.onclick = () => {
  fnB2();
};
c3.onclick = () => {
  fnC3();
};
d4.onclick = () => {
  fnD4();
};
e5.onclick = () => {
  fnE5();
};
f6.onclick = () => {
  fnF6();
};
g7.onclick = () => {
  fnG7();
};
h8.onclick = () => {
  fnH8();
};
i9.onclick = () => {
  fnI9();
};
j0.onclick = () => {
  fnJ0();
};
cl.onclick = () => {
  fnCL();
};
cn.onclick = () => {
  fnCN();
};
