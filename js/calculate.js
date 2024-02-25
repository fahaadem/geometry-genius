// Global function:-
function getItemsById(items){
    const itemsValue = document.getElementById(items).value;
    return itemsValue;
}

function setInnerText(id, area){
    const element = document.getElementById(id);
    element.innerText = area;
}

// Parallelogram Calculator:-
function parallelogramCalculator(){
    const b = getItemsById('parallelogram-base');
    const h = getItemsById('parallelogram-height');
    const area = b * h;
    setInnerText('parallelogram-area', area);
}

// Rhombus Calculator:-
function rhombusCalculator(){
    const length = getItemsById('rhombus-length');
    const width = getItemsById('rhombus-width');
    const area = length * width;
    setInnerText('rhombus-area', area);
}

// Pentagon Calculator:-
function pentagonCalculator(){
    const perimeter = getItemsById('Pentagon-perimeter');
    const apothem = getItemsById('Pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInnerText('Pentagon-area', area);
}

// Ellipse Calculator:-
function ellipseCalculator(){
    const base = getItemsById('Ellipse-base');
    const angle = getItemsById('Ellipse-angle');
    const areaValue = 3.14 * angle * base;
    const area = parseFloat(areaValue.toFixed(2))
    setInnerText('Ellipse-area', area);
}