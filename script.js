"use strict";

// general
const expenses = [];
let totalSpent = 0;
let bills = 0;
let clothing = 0;
let entertainment = 0;
let food = 0;

const progressBar = document.querySelector(".progress-bar-inner");
const transactionHistoryTable = document.querySelector(".transaction-history");
const cancelTransactionLink = document.querySelector(".cancel-button");
const foodTotalSpot = document.querySelector(".food-total-spot");
const foodTotalPercent = document.querySelector(".food-total-percent");
const billsTotalPercent = document.querySelector(".bills-total-percent");
const billsTotalSpot = document.querySelector(".bills-total-spot");
const clothingTotalSpot = document.querySelector(".clothing-total-spot");
const clothingTotalPercent = document.querySelector(".clothing-total-percent");
const entertainmentTotalSpot = document.querySelector(
  ".entertainment-total-spot"
);
const entertainmentTotalPercent = document.querySelector(
  ".entertainment-total-percent"
);
const bustedContainer = document.querySelector(".busted-container");
const updateLink = document.querySelector(".update-budget");
const amountTotal = document.querySelector(".amount-total");
const totalSpentSpot = document.querySelector(".total-spent-spot");

//starting budget form
const budgetForm = document.querySelector(".budget-form");
const landingPage = document.querySelector(".landing-page-container");
const remainingBudget = document.querySelector(".remaining-budget");
let budget = 0;

//new transaction form
const newTransactionContainer = document.querySelector(
  ".new-transaction-container"
);
const newTransactionInitiator = document.querySelector(
  ".new-transaction-initiator"
);
const transactionForm = document.querySelector(".new-transaction-form");

const updateRemainingBalanceAndProgressBar = () => {
  totalSpent = expenses.reduce((prev, curr) => prev + curr.amount, 0);
  remainingBudget.textContent = `$${budget - totalSpent}.00`;
  progressBar.style.width = `${(totalSpent / budget) * 100}%`;

  if (totalSpent > budget) {
    bustedContainer.classList.remove("hidden");
  }
  totalSpentSpot.textContent = `$${totalSpent}.00`;
};

const updateTransactionTable = () => {
  transactionHistoryTable.textContent = "";
  let header = transactionHistoryTable.insertRow(0);
  header.insertCell(0);
  header.classList.add("table-header");
  let th2 = header.insertCell(1);
  let th3 = header.insertCell(2);
  let th4 = header.insertCell(3);
  th2.textContent = "Purchase";
  th3.textContent = "Category";
  th4.textContent = "Amount";

  console.log(expenses);
  expenses.forEach((expense, index) => {
    let row = transactionHistoryTable.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    const trashIconImg = document.createElement("img");
    trashIconImg.src = "assets/trash_icon_128726.png";
    trashIconImg.classList.add("trash-icon");
    trashIconImg.dataset.index = index;
    cell1.append(trashIconImg);
    cell2.innerHTML = expense.purchase;
    cell3.innerHTML = expense.category;
    cell4.innerHTML = expense.amount;
  });
};

const calcSumForCategory = (category) => {
  let sum = 0;
  expenses.forEach((item) => {
    if (item.category === category) {
      sum += item.amount;
    }
  });
  return sum;
};

const updateExpensesTable = () => {
  totalSpent += 0.00000000001;
  bills = calcSumForCategory("Bills");
  clothing = calcSumForCategory("Clothing");
  entertainment = calcSumForCategory("Entertainment");
  food = calcSumForCategory("Food");
  billsTotalSpot.textContent = `$${bills}.00`;
  billsTotalPercent.textContent = `${((bills / totalSpent) * 100).toFixed(2)}%`;
  clothingTotalSpot.textContent = `$${clothing}.00`;
  clothingTotalPercent.textContent = `${((clothing / totalSpent) * 100).toFixed(
    2
  )}%`;
  entertainmentTotalSpot.textContent = `$${entertainment}.00`;
  entertainmentTotalPercent.textContent = `${(
    (entertainment / totalSpent) *
    100
  ).toFixed(2)}%`;
  foodTotalSpot.textContent = `$${food}.00`;
  foodTotalPercent.textContent = `${((food / totalSpent) * 100).toFixed(2)}%`;
  amountTotal.textContent = `$${totalSpent.toFixed(2)}`;
};

updateLink.addEventListener("click", (e) => {
  const originalText = document.querySelector(".original-text");
  const alternateText = document.querySelector(".alternate-text");
  originalText.classList.add("hidden");
  alternateText.classList.remove("hidden");
  landingPage.classList.remove("hidden");
});

const display = () => {
  updateRemainingBalanceAndProgressBar();
  updateTransactionTable();
  updateExpensesTable();
};

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (budget === 0) {
    budget = parseInt(document.querySelector("#weeklyIncome").value);
    remainingBudget.textContent = `$${budget}.00`;
    landingPage.classList.add("hidden");
  } else {
    budget += parseInt(document.querySelector("#weeklyIncome").value);
    remainingBudget.textContent = `$${budget}.00`;
    landingPage.classList.add("hidden");
  }
  display();
  budgetForm.reset();
});

newTransactionInitiator.addEventListener("click", () => {
  newTransactionContainer.classList.remove("hidden");
});

transactionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const purchase = document.querySelector("#purchase").value;
  const category = document.querySelector("#category").value;
  const amount = parseInt(document.querySelector("#amount").value);
  expenses.push({ purchase, category, amount });
  newTransactionContainer.classList.add("hidden");
  display();
  transactionForm.reset();
});

transactionForm.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel-button")) {
    newTransactionContainer.classList.toggle("hidden");
  }
  display();
});

transactionHistoryTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash-icon")) {
    const index = e.target.dataset.index;
    expenses.splice(index, 1);
    display();
  }
});

bustedContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel-button")) {
    bustedContainer.classList.add("hidden");
  }
});
