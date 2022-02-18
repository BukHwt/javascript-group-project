"use strict";

const landingPageContainer = document.querySelector(".landing-page-container");
const remainingBudget = document.querySelector(".remaining-budget");
const updateBudget = document.querySelector(".update-budget");
const progressContainer = document.querySelector(".progress-container");

const originalText = document.querySelector(".original-text");
const alternateText = document.querySelector(".alternate-text");
const newTransaction = document.querySelector(".new-transaction-initiator");
const cancelButton = document.querySelector(".cancel-button");
const newTransactionForm = document.querySelector(".new-transaction-form");
const transactionHistoryTable = document.querySelector(".transaction-history");
const bustedContainer = document.querySelector(".busted-container");
const newTransactionContainer = document.querySelector(
  ".new-transaction-container"
);
const expenseHistory = document.querySelector(".expense-history");
let array = [];
let runningTotal = 0;
let moneySpent = 0;
let entertainmentTotal = 0;
let foodTotal = 0;
let clothingTotal = 0;
let amountTotal = 0;
let billsTotal = 0;
let progressBarTotal = 0;

const displayFunction = (array) => {
  transactionHistoryTable.innerHTML = " ";
  let header = transactionHistoryTable.insertRow(0);
  let th1 = header.insertCell(0);
  let th2 = header.insertCell(1);
  let th3 = header.insertCell(2);
  let th4 = header.insertCell(3);
  th2.textContent = "Purchase";
  th3.textContent = "Category";
  th4.textContent = "Amount";
  // expenseHistory.innerHTML= " ";
  array.forEach((expense, index) => {
    let row = transactionHistoryTable.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    const trashIconImg = document.createElement("img");
    trashIconImg.src = "assets/trash_icon_128726.png";
    trashIconImg.classList.add("trash-icon");
    trashIconImg.setAttribute("data-index", index);
    cell1.append(trashIconImg);
    cell2.innerHTML = expense.purchase;
    cell3.innerHTML = expense.category;
    cell4.innerHTML = expense.amount;
  });
  array.filter((item) => {
    item;
  });
};

displayFunction(array);

landingPageContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const weeklyInput = document.querySelector("#weeklyIncome").value;
  if (runningTotal === 0 && e.target.classList.contains("budget-form")) {
    runningTotal = parseInt(weeklyInput);
    progressBarTotal = parseInt(weeklyInput);
  } else {
    runningTotal += parseInt(weeklyInput);
    progressBarTotal += parseInt(weeklyInput);
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

cancelButton.addEventListener("click", () => {
  newTransactionContainer.classList.toggle("hidden");
});

newTransactionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const purchase = document.querySelector("#purchase").value;
  const category = document.querySelector("#category").value;
  const amount = document.querySelector("#amount").value;
  array.push({ purchase, category, amount });
  displayFunction(array);
  newTransactionContainer.classList.toggle("hidden");
  // const trashIconImg = document.createElement("img");
  // let foodTotalSpot = document.querySelector(".food-total-spot");
  // let foodTotalPercent = document.querySelector(".food-total-percent");
  // let clothingTotalSpot = document.querySelector(".clothing-total-spot");
  // let clothingTotalPercent = document.querySelector(".clothing-total-percent");
  // let billsTotalSpot = document.querySelector(".bills-total-spot");
  // let billsTotalPercent = document.querySelector(".bills-total-percent");
  // let entertainmentTotalSpot = document.querySelector(
  //   ".entertainment-total-spot"
  // );
  // let entertainmentTotalPercent = document.querySelector(
  //   ".entertainment-total-percent"
  // );
  // let amountTotal = document.querySelector(".amount-total");
  // let row = transactionHistoryTable.insertRow(1);
  // let cell1 = row.insertCell(0);
  // let cell2 = row.insertCell(1);
  // let cell3 = row.insertCell(2);
  // let cell4 = row.insertCell(3);
  // trashIconImg.src = "assets/trash_icon_128726.png";
  // trashIconImg.classList.add("trash-icon");
  // cell1.append(trashIconImg);
  // cell2.innerHTML = purchase;
  // cell3.innerHTML = category;
  // cell4.innerHTML = amount;
  // moneySpent += parseInt(amount);
  // runningTotal -= parseInt(amount);
  // progressBarTotal += parseInt(amount);
  // remainingBudget.textContent = `$${runningTotal}`;
  // if (amount > runningTotal) {
  //   bustedContainer.classList.toggle("hidden");
  // } else if (category === "Food") {
  //   foodTotal += parseInt(amount);
  //   foodTotalSpot.textContent = `$${parseInt(foodTotal)}`;
  // } else if (category === "Clothing") {
  //   clothingTotal += parseInt(amount);
  //   clothingTotalSpot.textContent = `$${parseInt(clothingTotal)}`;
  // } else if (category === "Bills") {
  //   billsTotal += parseInt(amount);
  //   billsTotalSpot.textContent = `$${parseInt(billsTotal)}`;
  // } else if (category === "Entertainment") {
  //   entertainmentTotal += parseInt(amount);
  //   entertainmentTotalSpot.textContent = `$${parseInt(entertainmentTotal)}`;
  // }
  // foodTotalPercent.textContent = `${(foodTotal / moneySpent) * 100}%`;
  // clothingTotalPercent.textContent = `${(clothingTotal / moneySpent) * 100}%`;
  // billsTotalPercent.textContent = `${(billsTotal / moneySpent) * 100}%`;
  // entertainmentTotalPercent.textContent = `${
  //   (entertainmentTotal / moneySpent) * 100
  // }%`;
  // amountTotal.textContent = moneySpent;
  // progressBar.style.width = `${(moneySpent / progressBarTotal) * 100}%`;
  //
  // newTransactionForm.reset();
  // console.log(runningTotal);
  // console.log(moneySpent);
});

transactionHistoryTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash-icon")) {
    const index = e.target.getAttribute("data-index");
    array.splice(index, 1);
  }
  displayFunction(array);
});

console.log(array.filter(billsTotal === true));
