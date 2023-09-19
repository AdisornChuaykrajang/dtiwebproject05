let quiz = document.getElementById("quiz");
let midterm = document.getElementById("midterm");
let final = document.getElementById("final");

let btcalsumgrade = document.getElementById("bt-calsumgrade");
let btcancel = document.getElementById("bt-cancel");

let showsum = document.getElementById("showsum");
let showgrade = document.getElementById("showgrade");

function calSum() {
  let sum =
    parseInt(quiz.value) +
    parseInt(midterm.value) +
    parseInt(final.value);
  return sum;
}

function varidateData() {
    if (quiz.value.length == 0) {
        alert('ป้อน quiz ด้วย')
        return false;
    }else if (isNaN(quiz.value)) {
        alert('ป้อน quiz เป็นตัวเลขเท่านั้น')
        return false;
    }if (midterm.value.length == 0) {
        alert('ป้อน midterm ด้วย')
        return false;
    }else if (isNaN(midterm.value)) {
        alert('ป้อน midterm เป็นตัวเลขเท่านั้น')
        return false;
    }if (final.value.length == 0) {
        alert('ป้อน final ด้วย')
        return false;
    }else if (isNaN(final.value)) {
        alert('ป้อน final เป็นตัวเลขเท่านั้น')
        return false;
    }
}

function calGrade(sum) {
  if (sum >= 80) {
    showsum.innerHTML = "<strong> ได้คะแนนรวม " + sum + " คะแนน </strong>";
    showgrade.innerHTML = "<strong> ได้เกรด A </strong>";
  } else if (sum >= 50) {
    showsum.innerHTML = "<strong> ได้คะแนนรวม " + sum + " คะแนน </strong>";
    showgrade.innerHTML = "<strong>ได้เกรด B </strong>";
  } else {
    showsum.innerHTML = "<strong> ได้คะแนนรวม " + sum + " คะแนน </strong>";
    showgrade.innerHTML = "<strong> ได้เกรด C </strong>";
  }
}

btcalsumgrade.addEventListener("click", () => {
  varidateData(calGrade(calSum()));
});

btcancel.addEventListener("click", () => {
    showsum.innerHTML = "";
    showgrade.innerHTML = "";
    quiz.value = ""
    midterm.value = ""
    final.value = ""
  });
