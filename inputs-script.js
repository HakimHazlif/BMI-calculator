


document.querySelector('.js-age-inputs').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key ===  'Tap') {
    uncorectAgeInput();
  } else if (event.key === 'Backspace') {
    document.querySelector('.js-error-age').innerHTML = '';
  }
});


usUnitsInput();

function usUnitsInput() {
  document.querySelector('.js-feet-inputs').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key ===  'Tap') {
      uncorectValuesInput(feetInput, 'feet', 10);
    } else if (event.key === 'Backspace') {
      document.querySelector('.js-error-feet').innerHTML = '';
    }
  });
  
  
  document.querySelector('.js-inches-inputs').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key ===  'Tap') {
      uncorectValuesInput(inchesInput, 'inches', 12);
    } else if (event.key === 'Backspace') {
      document.querySelector('.js-error-inches').innerHTML = '';
    }
  });
  
  
  document.querySelector('.js-pounds-inputs').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key ===  'Tap') {
      uncorectValuesInput(poundsInput, 'pounds', 1300);
    } else if (event.key === 'Backspace') {
      document.querySelector('.js-error-pounds').innerHTML = '';
    }
  });
}




function metricUnitsInput() {
  document.querySelector('.js-cm-inputs').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key ===  'Tap') {
      uncorectValuesInput(cmInput, 'cm', 300);
    } else if (event.key === 'Backspace') {
      document.querySelector('.js-error-cm').innerHTML = '';
    }
  });
  
  
  document.querySelector('.js-kg-inputs').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key ===  'Tap') {
      uncorectValuesInput(kgInput, 'kg', 600);
    } else if (event.key === 'Backspace') {
      document.querySelector('.js-error-kg').innerHTML = '';
    }
  });
};




function uncorectAgeInput() {
  const agaNum = Number(ageInput.value);

  if (!isNaN(ageInput.value) && agaNum < 2 || agaNum > 120) {
    document.querySelector('.js-error-age').innerHTML = `
      <div class="error-age-text">
        <p>Age must be greater than 2 and younger than 120</p>
      </div>
    `
  } else if (isNaN(ageInput.value)) {
    document.querySelector('.js-error-age').innerHTML = `
        <div class="error-age-text">
          <p>please type numbers only</p>
        </div>
    `
  } 
}


function uncorectValuesInput(domValue, unit, maximum) {
  const num = Number(domValue.value);

  if (!isNaN(domValue.value) && num < 0) {
    document.querySelector(`.js-error-${unit}`).innerHTML = `
      <div class="error-${unit}-text">
        <p>please type positive number only</p>
      </div>
    `
  } else if (!isNaN(domValue.value) && num > maximum) {
    document.querySelector(`.js-error-${unit}`).innerHTML = `
      <div class="error-${unit}-text">
        <p>please type number less than ${maximum}</p>
      </div>
    `
  } else if (isNaN(domValue.value)) {
    document.querySelector(`.js-error-${unit}`).innerHTML = `
        <div class="error-${unit}-text">
          <p>please type numbers only</p>
        </div>
    `
  } 
}


