function rectangleCalculator(){
    const length = document.getElementById('rectangle-length').value;
    const width = document.getElementById('rectangle-width').value;
    const result = length * width;

    // Show result
    const areaResult = document.getElementById('rect-area-value');
    areaResult.innerText = result;
}