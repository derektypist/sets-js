// Set Up Variable
let txt = "";

// Create Instances of Set
let metals = new Set(["Lithium","Sodium","Magnesium","Aluminium"]);
let numbers = new Set([1,2,3,4,5,6]);

// Convert Sets to Arrays
let metalsArr = Array.from(metals);
let numbersArr = Array.from(numbers);

// View Original Metals and Numbers
txt += `Original Metals ${metalsArr} <br>`;
txt += `Original Numbers ${numbersArr} <br>`;

// Add Items to Each Set
metals.add("Potassium");
numbers.add(7);

// Convert Updated Sets to Arrays
let updatedMetalsArr = Array.from(metals);
let updatedNumbersArr = Array.from(numbers);

// View Updated Metals and Numbers
txt += `Updated Metals ${updatedMetalsArr} <br>`;
txt += `Updated Numbers ${updatedNumbersArr} <br>`;
txt += `Successfully Added Potassium to Metals <br>`;
txt += `Successfully Added 7 to Numbers <br>`;
document.getElementById("demo").innerHTML = txt;
