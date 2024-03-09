var day_input = document.getElementById("day_input");
var month_input = document.getElementById("month_input");
var year_input = document.getElementById("year_input");
var day_result = document.getElementById("day_result");
var month_result = document.getElementById("month_result");
var year_result = document.getElementById("year_result");
var day_error = document.getElementById("day_error");
var month_error = document.getElementById("month_error");
var year_error = document.getElementById("year_error");
var day_name = document.getElementById("day_name");
var month_name = document.getElementById("month_name");
var year_name = document.getElementById("year_name");



function handleClick() {
 var currentDate = new Date();

 // Get user input values
 var birthDay = parseInt(day_input.value);
 var birthMonth = parseInt(month_input.value);
 var birthYear = parseInt(year_input.value);

 // Create a Date object for the user's birthday
 var birthday = new Date(birthYear, birthMonth - 1, birthDay);

 
 var ageInMilliseconds = currentDate - birthday;


 var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

 
 var ageInMonths = Math.floor(ageInDays / 30.44); // Average days in a month
 var remainingDays = ageInDays % 30.44;
 var ageInYears = Math.floor(ageInMonths / 12);
 var remainingMonths = ageInMonths % 12;

 
 

   const currentYear = new Date().getFullYear(); 
  if (day_input.value === "" || isNaN(birthDay)) {
    day_result.innerText = "--";
    day_error.style.display = "block";
    day_name.style.color = "hsl(0, 100%, 67%)";
    day_input.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (day_input.value > 31) {
    day_error.style.display = "block";
    day_error.innerText = "Invalid Day";
    day_name.style.color = "hsl(0, 100%, 67%)";
    day_input.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    day_error.style.display = "none";
    day_name.style.color = "black";
    day_input.style.borderColor = "hsl(0, 0%, 86%)";
    day_result.innerText = Math.ceil(remainingDays);
  }
  if (month_input.value === "" || isNaN(birthMonth)) {
    month_result.innerText = "--";
    month_error.style.display = "block";
    month_name.style.color = "hsl(0, 100%, 67%)";
    month_input.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (month_input.value > 12) {
    month_error.style.display = "block";
    month_error.innerText = "Invalid Month";
    month_name.style.color = "hsl(0, 100%, 67%)";
    month_input.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    month_error.style.display = "none";
    month_name.style.color = "black";
    month_input.style.borderColor = "hsl(0, 0%, 86%)";
    month_result.innerText = remainingMonths;
  }
  if (year_input.value === "" || isNaN(birthYear)) {
    year_result.innerText = "--";
    year_error.style.display = "block";
    year_name.style.color = "hsl(0, 100%, 67%)";
    year_input.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (year_input.value > currentYear) {
    year_error.style.display = "block";
    year_error.innerText = "Invalid Year";
    year_name.style.color = "hsl(0, 100%, 67%)";
    year_input.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    year_error.style.display = "none";
    year_name.style.color = "black";
    year_input.style.borderColor = "hsl(0, 0%, 86%)";
    const new_year = currentYear - year_input.value;
    year_result.innerText = ageInYears;
  }
}
