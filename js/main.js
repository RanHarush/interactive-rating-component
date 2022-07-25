let submit = document.querySelector("#submit");
let rating = document.querySelector(".rating");
let thankYou = document.querySelector(".thank-you");

const submitFunc = () => {
  rating.classList.add("hidden");
  thankYou.classList.remove("hidden");
};

const rateSelected = (a) => {
  document.querySelector(
    ".rate-selected"
  ).innerHTML = `<p>You selected ${a} out of 5</p>`;
};
