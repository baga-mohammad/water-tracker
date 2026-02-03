// visual indicators
const waterLevel = document.querySelector('#water');
const waterConsumed = document.querySelector('#consumed-vol');
const waterRemaining = document.querySelector('#remaining-vol');

// buttons
const addBtn = document.querySelector('#add-btn');
const removeBtn = document.querySelector('#remove-btn');
const resetBtn = document.querySelector('#reset-btn');

// assigning values
let consumed = 0,
    remaining = 2500,
    percentage = 0;

addBtn.addEventListener('click', addWater);
removeBtn.addEventListener('click', removeWater);
resetBtn.addEventListener('click', resetVal);

function addWater() {
  if (consumed === 2500) return;

  consumed += 250;
  remaining -= 250;

  updateVal();
  // percentage = (consumed / 2500) * 100; 
}

function removeWater() {
  if (consumed === 0) return;

  consumed -= 250;
  remaining += 250;
  // percentage = (consumed / 2500) * 100;

  updateVal();
}

function resetVal() {
  consumed = 0;
  remaining = 2500;
  percentage = 0;

  updateVal();
}

function updateVal() {
  percentage = (consumed / 2500) * 100;
  
  waterConsumed.textContent = `${consumed} mL`;
  waterRemaining.textContent = `${remaining} mL`;
  waterLevel.style.height = `${percentage}%`;
}