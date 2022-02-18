"use strict";

const landingPageContainer = document.querySelector(".landing-page-container");
const remainingBudget = document.querySelector(".remaining-budget");
const updateBudget = document.querySelector(".update-budget");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress-bar-inner");
const originalText = document.querySelector(".original-text");
const alternateText = document.querySelector(".alternate-text");
const newTransaction = document.querySelector(".new-transaction-initiator");
const newTransactionContainer = document.querySelector(
  ".new-transaction-container"
);

let runningTotal = 0;
let moneySpent = 0;

landingPageContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const weeklyInput = document.querySelector("#weeklyIncome").value;
  if (runningTotal === 0 && e.target.classList.contains("budget-form")) {
    runningTotal = parseInt(weeklyInput);
  } else {
    runningTotal += parseInt(weeklyInput);
  }
  landingPageContainer.classList.add("hidden");
  remainingBudget.textContent = `$${runningTotal}`;
});

updateBudget.addEventListener("click", (e) => {
  if (e.target.classList.contains("update-budget", "original-text")) {
    landingPageContainer.classList.remove("hidden");
    originalText.classList.add("hidden");
    alternateText.classList.remove("hidden");
  }
});

newTransaction.addEventListener("click", () => {
  newTransactionContainer.classList.remove("hidden");
});
