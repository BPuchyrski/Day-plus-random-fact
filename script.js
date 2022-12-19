const currentDay = document.querySelector(".current-day");
const funFact = document.querySelector(".fun-fact");

const facts = [
  "Krokodyl nie potrafi wystawić języka.",
  "Każdy człowiek spędził około pół godziny jako pojedyncza komórka.",
  "Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.",
  "Leniwce potrzebują dwóch tygodni na strawienie jedzenia.",
  "Goryle śpią nawet czternaście godzin dziennie.",
  "Język kameleona jest dwukrotnie dłuższy od jego ciała.",
  "Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.",
  "Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.",
];

const daysOfWeek = [
  "niedziela",
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
];

const date = new Date();
const dayOfWeekNumber = date.getDay();
const dayOfWeek = daysOfWeek[dayOfWeekNumber];

currentDay.textContent = `${daysOfWeek[dayOfWeekNumber]}`;

const randomIndex = Math.floor(Math.random() * facts.length);
const randomElement = facts[randomIndex];

funFact.textContent = `${facts[randomIndex]}`;
