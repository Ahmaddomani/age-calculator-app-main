//define the error color
let red = document.styleSheets[0].rules[1].style.getPropertyValue(
  "--Light--red"
);
//define the correct color
let green = "#4caf50";
// define the inputs
let inputs = document.querySelectorAll("input");
// change the borders color if the input in not foramted or not eqal to maxlength and some options to red
for (let i = 0; i < inputs.length; i++) {
  inputs[i].oninput = function () {
    if (inputs[i].value.length === 0) {
      inputs[i].style.borderColor = red;
      inputs[i].parentElement.querySelector("label").style.color = green;
      inputs[i].parentElement.querySelector("label").style.color = red;
      return;
    }
    if (
      inputs[i].value.length === inputs[i].maxLength &&
      inputs[0].value <= 31 &&
      inputs[1].value <= 12 &&
      inputs[2].value <= new Date().getFullYear()
    ) {
      if (i === 2) {
        inputs[i].style.borderColor = green;
        inputs[i].parentElement.querySelector("label").style.color = green;
        inputs[i].parentElement.querySelector("span").style.opacity = "0";
        return;
      }
      inputs[i + 1].focus();
      inputs[i].style.borderColor = green;
      inputs[i].parentElement.querySelector("label").style.color = green;
      inputs[i].parentElement.querySelector("span").style.opacity = "0";
    } else {
      inputs[i].style.borderColor = red;
      inputs[i].parentElement.querySelector("label").style.color = red;
      inputs[i].parentElement.querySelector("span").style.opacity = "1";
    }
  };
}
// start calc the age
// define the arrow
let arrow = document.querySelector(".arrow");
//define the inputs values
let day = document.getElementById("1");
let month = document.getElementById("2");
let year = document.getElementById("3");
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getDate();

// clacualte the age when click on the arrow button
arrow.addEventListener("click", (e) => {
  let yourYears = document.querySelector(".birth-year");
  let yourMonths = document.querySelector(".birth-month");
  let yourDays = document.querySelector(".birth-day");
  let test = new Date(`${year.value}-${month.value}-${+day.value + 1}`);
  if (test != "Invalid Date") {
    if (
      day.value == false ||
      day.value.length != day.maxLength ||
      day.value > 31 ||
      month.value == false ||
      month.value.length != month.maxLength ||
      month.value > 12 ||
      year.value.length != year.maxLength ||
      year.value < 1000 ||
      year.value >= currentYear ||
      year.value == false
    ) {
      e.preventDefault();
      return;
    } else {
      document.querySelector(".NotValidError").style.opacity = "0";
      document.querySelectorAll("input").forEach((input) => {
        input.style.borderColor = green;
      });
      document.querySelectorAll("label").forEach((label) => {
        label.style.color = green;
      });
      yourYears.innerHTML = currentYear - year.value;
      yourMonths.innerHTML = currentMonth - month.value;
      yourDays.innerHTML = currentDay - day.value;
      if (month.value >= currentMonth) {
        yourYears.innerHTML--;
        yourMonths.innerHTML = 12 + (currentMonth - month.value);
      }
      if (yourMonths.innerHTML == 12) {
        yourYears.innerHTML++;
        yourMonths.innerHTML = 0;
      }
      if (day.value > currentDay) {
        if (yourMonths.innerHTML != 0) {
          yourMonths.innerHTML--;
        }
        yourDays.innerHTML = 30 + ( currentDay- day.value  );
      }
      if (yourDays.innerHTML == 30) {
        yourMonths.innerHTML++;
        yourDays.innerHTML = 0;
      }
    }
  } else {
    // show not valid date error
    document.querySelector(".NotValidError").style.opacity = "1";
    // red borders for inputs and labels
    document.querySelectorAll("input").forEach((input) => {
      input.style.borderColor = red;
    });
    document.querySelectorAll("label").forEach((label) => {
      label.style.color = red;
    });
  }
});
// end calc the age
//---------------------------------------------The End------------------------------------------
