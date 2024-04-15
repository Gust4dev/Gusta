const calendar = document.querySelector(".calendar");
date = document.querySelector(".date");
daysContainer = document.querySelector(".days");
prev = document.querySelector(".prev");
next = document.querySelector(".next");

let today = new Date();
let activeday;
let month = today.getFullMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//Adicionar dias ao calendario
function initCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
}
