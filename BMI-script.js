const ageInput = document.querySelector('.js-age-inputs');

const feetInput = document.querySelector('.js-feet-inputs');

const inchesInput = document.querySelector('.js-inches-inputs');

const poundsInput = document.querySelector('.js-pounds-inputs');

const cmInput = document.querySelector('.js-cm-inputs');


const kgInput = document.querySelector('.js-kg-inputs');

////


document.querySelector('.js-us-units-button').addEventListener('click', () => {
  usUnitsInputs();
});

document.querySelector('.js-metric-units-button').addEventListener('click', () => {
  metricUnitsSwitch();
});



function metricUnitsSwitch() {
  const unitsInputs = document.querySelector('.js-units');

  unitsInputs.innerHTML = `
    <div>
      <input class="height-cm-input js-cm-inputs" type="text" placeholder="cm">
      <div class="error-cm js-error-cm"></div>
    </div>
    <div>
      <input class="js-weight weight-kg-input js-kg-inputs" type="text" placeholder="kg">
      <div class="error-kg js-error-kg"></div>
    </div>
  `

  document.querySelector('.js-us-units-button').classList.add('unclick-us-units');

  document.querySelector('.js-metric-units-button').classList.remove('unclick-metric-units'); 

  metricUnitsInput();
}


usUnitsInputs();



function usUnitsInputs() {
  const unitsInputs = document.querySelector('.js-units');

  unitsInputs.innerHTML = `
    <div class="js-height-inputs us-height-inputs">
      <div>
        <input class="height-feet-input js-feet-inputs" type="text" placeholder="feet">
        <div class="error-feet js-error-feet"></div>
      </div>
      <div>
        <input class="height-inches-input js-inches-inputs" type="text" placeholder="inches">
        <div class="error-inches js-error-inches"></div>
      </div> 
    </div>
    <div>
      <input class="js-weight weight-pounds-input js-pounds-inputs" type="text" placeholder="pounds">
      <div class="error-pounds js-error-pounds"></div>
    </div>
  `

  document.querySelector('.js-metric-units-button').classList.add('unclick-metric-units');

  document.querySelector('.js-us-units-button').classList.remove('unclick-us-units');

  usUnitsInput();
}



document.querySelector('.js-calculator-button').addEventListener('click', () => {
  uncorectAgeInput();
  uncorectValuesInput(feetInput, 'feet', 10);
  uncorectValuesInput(inchesInput, 'inches', 12);
  uncorectValuesInput(poundsInput, 'pounds', 1300);
  uncorectValuesInput(cmInput, 'cm', 300);
  uncorectValuesInput(kgInput, 'kg', 600);

  
  document.querySelector('.js-bmi-result').innerHTML = resultOfBMI() + ' kg/m²';

  document.querySelector('.js-classification-result').innerHTML = classification();

  document.querySelector('.js-BMI-prime-result').innerHTML = resultOfBMIprime().toFixed(2);

  document.querySelector('.js-ponderal-index-result').innerHTML = ponderalIndex() + ' kg/m²';
});


document.querySelector('.js-calculator-button').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('.js-bmi-result').innerHTML = resultOfBMI() + ' kg/m²';

    document.querySelector('.js-classification-result').innerHTML = classification();

    document.querySelector('.js-BMI-prime-result').innerHTML = resultOfBMIprime().toFixed(2);

    document.querySelector('.js-ponderal-index-result').innerHTML = ponderalIndex() + ' kg/m²';
  }
});


document.querySelector('.js-clear-button').addEventListener('click', () => {
  ageInput.value = '';
  feetInput.value = '';
  inchesInput.value = '';
  poundsInput.value = '';
  cmInput.value = '';
  kgInput.value = '';
});


function usBMIcalculator() {
  const feetHeighth = document.querySelector('.js-feet-inputs');
  const inchesHeighth = document.querySelector('.js-inches-inputs');
  const poundsWeighth = document.querySelector('.js-pounds-inputs');

  let usHeighth = (Number(feetHeighth.value) * 12) + Number(inchesHeighth.value);
  
  return 703 * (Number(poundsWeighth.value) / (usHeighth * usHeighth))
}


function metricMBIcalculator() {
  const cmHeight = document.querySelector('.js-cm-inputs');
  const kgWeight = document.querySelector('.js-kg-inputs');

  const mHeight = Number(cmHeight.value) / 100

  return Number(kgWeight.value) / (mHeight * mHeight);
}



function resultOfBMI() {
  const weightElement = document.querySelector('.js-weight');

  if (weightElement.classList.contains('js-pounds-inputs')) {
    return usBMIcalculator().toFixed(2);
  } else if (weightElement.classList.contains('js-kg-inputs')) {
    return metricMBIcalculator().toFixed(2);
  }
}

function ponderalIndex() {
  const weightElement = document.querySelector('.js-weight');

  if (weightElement.classList.contains('js-pounds-inputs')) {
    return usPonderalIndex().toFixed(2);
  } else if (weightElement.classList.contains('js-kg-inputs')) {
    return metricPonderalIndex().toFixed(2);
  }
}


function classification() {
  const BMIelement = Number(resultOfBMI());

  if (BMIelement < 16) {
    return 'Severe Thinness';
  } else if (BMIelement >= 16 && BMIelement <= 17) {
    return 'Moderate Thinness';
  } else if (BMIelement > 17 && BMIelement <= 18.5) {
    return 'Mild Thinness';
  } else if (BMIelement > 18.5 && BMIelement <= 25) {
    return 'Normal';
  } else if (BMIelement > 25 && BMIelement <= 30) {
    return 'Overweight';
  } else if (BMIelement > 30 && BMIelement <= 35) {
    return 'Obese Class I';
  } else if (BMIelement > 35 && BMIelement <= 40) {
    return 'Obese Class II';
  } else if (BMIelement > 40) {
    return 'Obese Class III';
  }
}


function resultOfBMIprime() {
  const BMIelement = Number(resultOfBMI());

  return BMIelement / 25
}


function usPonderalIndex() {
  const feetHeighth = document.querySelector('.js-feet-inputs');
  const inchesHeighth = document.querySelector('.js-inches-inputs');
  const poundsWeighth = document.querySelector('.js-pounds-inputs');

  const usHeighth = (Number(feetHeighth.value) * 12) + Number(inchesHeighth.value);

  const pi = usHeighth / Math.cbrt(Number(poundsWeighth.value));

  return pi;
}


function metricPonderalIndex() {
  const cmHeight = document.querySelector('.js-cm-inputs');
  const kgWeight = document.querySelector('.js-kg-inputs');

  const mHeight = Number(cmHeight.value) / 100

  const pi = Number(kgWeight.value) / Math.pow(mHeight, 3);

  return pi;
}



///////




document.querySelector('.js-age-inputs').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key ===  'Tap') {
    uncorectAgeInput();
  } else if (event.key === 'Backspace') {
    document.querySelector('.js-error-age').innerHTML = '';
  }
});




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
