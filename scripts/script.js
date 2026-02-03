const addBtn = document.querySelector('#add-btn');
const removeBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');

const consumedVol = document.querySelector('#consumed-vol');
const remainingVol = document.querySelector('#remaining-vol');
const waterPercentage = document.querySelector('#water');

let consumed = 0,
    remaining = 2500,
    percentage = 0;

const maxConsume = 2500,
      minRemaining = 0;

addBtn.addEventListener('click', addWater);
removeBtn.addEventListener('click', removeWater);
resetBtn.addEventListener('click', reset);

function addWater() {
  consumed += 250;
  remaining -= 250;
  percentage = (consumed / 2500) * 100;

  consumedVol.textContent = `${consumed} mL`;
  remainingVol.textContent = `${remaining} mL`;
  waterPercentage.style.height = `${percentage}%`;
}

function removeWater() {
  consumed -= 250;
  remaining += 250;
  percentage = (consumed / 2500) * 100;

  consumedVol.textContent = `${consumed} mL`;
  remainingVol.textContent = `${remaining} mL`;
  waterPercentage.style.height = `${percentage}%`;

  if (remaining === minRemaining) {
    removeBtn.disabled = true;
  } else {
    removeBtn.disabled = false;
  }
}

function reset() {
  consumed = 0;
  remaining = 2500;
  percentage = 0;
  
  consumedVol.textContent = `${consumed} mL`;
  remainingVol.textContent = `${remaining} mL`;
  waterPercentage.style.height = `${percentage}%`;
}