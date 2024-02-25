
function triangleCalculator() {
    const height = document.getElementById('triangle-height').value;
    const base = document.getElementById('triangle-base').value;
    const result = 0.5 * height * base;
    console.log(result);
    // document.getElementById('height').value = '';
    // document.getElementById('base').value = '';

    // display triangle height and width
    // const heightBaseValue = document.getElementById('result-container');
    // heightBaseValue.innerHTML = `
    // <p class="text-lg font-normal">Height= ${height} cm<sup>2</sup></p>
    // <p class="text-lg font-normal">Base= ${base} cm<sup>2</sup></p>
    // `;
    // const baseValue = document.getElementById('base-value');
    // baseValue.innerText = base;


    // display triangle area value

    // One Way: 
    // const areaResult = document.getElementById('result-area');
    // areaResult.innerHTML = `
    // <p class="text-center text-lg font-semibold">Area: ${result} <span>cm<sup>2</sup></span></p>
    // `;

    // Another Way: 
    const areaValue = document.getElementById('triangle-area');
    areaValue.innerText = result;
}