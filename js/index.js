// first common function to get data using getElementById method 
function getData(id1, id2, id3, id4) {
   // get the data from htm using id
   const geometryTitle = document.getElementById(id1).innerText;
   const inputValueOne = document.getElementById(id2).value;
   const inputValueTwo = document.getElementById(id3).value;


   const geometry = {
      geometryTitle: geometryTitle,
      inputValueOne: inputValueOne,
      inputValueTwo: inputValueTwo,
   };
   return geometry;
}
// second common function to get dada using getElementById 
function getDataTwo(id4, id5, id6) {
   const geometryTitle = document.getElementById(id4).innerText;
   const geometryFormulaOne = document.getElementById(id5).innerText;
   const geometryFormulaTwo = document.getElementById(id6).innerText;

   const geometryString = {
      geometryTitle: geometryTitle,
      geometryFormulaOne: geometryFormulaOne,
      geometryFormulaTwo: geometryFormulaTwo,
   };
   return geometryString;
}



let serial = 0;
// triangle
document.getElementById('triangle-output').addEventListener('click', function () {
   serial += 1;
   // const geometryName = document.getElementById('triangle').innerText;
   // const base = document.getElementById('base').value;
   // const height = document.getElementById('height').value;

   const geometry = getData("triangle", "triangle-base", "triangle-height")

   if (isNaN(geometry.inputValueOne) || isNaN(geometry.inputValueTwo) || geometry.inputValueOne <= 0 || geometry.inputValueTwo <= 0) {
      alert("আপনারটা  ভুল হয়েছে , নম্বর দিয়ে ক্যালকুলেট করেন");
      return
   }
   const triangleOutput = 0.5 * parseFloat(geometry.inputValueOne) * parseFloat(geometry.inputValueTwo);
   displayData(geometry.geometryTitle, triangleOutput.toFixed(2));
})

// rectangle
document.getElementById('rectangle-output').addEventListener('click', function () {
   // const geometryName = document.getElementById('rectangle').innerText;
   // const rectangleWidth = document.getElementById('rectangle-width').value;
   // const rectangleHeight = document.getElementById('rectangle-height').value;

   serial += 1;
   const geometry = getData("rectangle", "rectangle-width", "rectangle-height");
   if (isNaN(geometry.inputValueOne) || isNaN(geometry.inputValueTwo) || geometry.inputValueOne <= 0 || geometry.inputValueTwo <= 0) {
      alert("আপনারটা  ভুল হয়েছে , নম্বর দিয়ে ক্যালকুলেট করেন");
      return
   }
   const rectangleOutput = parseFloat(geometry.inputValueOne) * parseFloat(geometry.inputValueTwo);
   displayData(geometry.geometryTitle, rectangleOutput.toFixed(2))

})

// Parallelogram
document.getElementById("parallelogram-output").addEventListener('click', function () {
   serial += 1;
   const geometryString = getDataTwo("parallelogram-title", "parallelogram-formula-one", "parallelogram-formula-two");
   const parallelogramOutput = geometryString.geometryFormulaOne * geometryString.geometryFormulaTwo;
   displayData(geometryString.geometryTitle, parallelogramOutput);

})

// Rhombus
document.getElementById('rhombus-output').addEventListener('click', function () {
   serial += 1;
   const geometryString = getDataTwo("rhombus-title", "rhombus-formula-one", "rhombus-formula-two");
   const rhombusOutput = 0.5 * parseFloat(geometryString.geometryFormulaOne) * parseFloat(geometryString.geometryFormulaTwo);
   displayData(geometryString.geometryTitle, rhombusOutput.toFixed(2));

})

// Pentagon
document.getElementById('pentagon-output').addEventListener('click', function () {
   serial += 1;
   const geometryString = getDataTwo("pentagon-title", "pentagon-formula-one", "pentagon-formula-two");
   const pentagonOutput = 0.5 * parseFloat(geometryString.geometryFormulaOne) * parseFloat(geometryString.geometryFormulaTwo);
   displayData(geometryString.geometryTitle, pentagonOutput.toFixed(2));
})

// Ellipse
document.getElementById('ellipse-output').addEventListener('click', function () {
   serial += 1;
   const geometryString = getDataTwo("ellipse-title", "ellipse-formula-one", "ellipse-formula-two");
   const ellipseOutput = 3.1416 * parseFloat(geometryString.geometryFormulaOne) * parseFloat(geometryString.geometryFormulaTwo);
   displayData(geometryString.geometryTitle, ellipseOutput.toFixed(2));
})

// common function of display data
function displayData(geometryName, output) {
   const container = document.getElementById('table-container');
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td>${serial}</td>
   <td>${geometryName}</td>
   <td>${output}cm<sup>2</sup></td>
   <td><button class="btn btn-sm outline-none bg-green-400">Covert to m<sup>2</sup></button></td>
   `
   container.appendChild(tr);
}


