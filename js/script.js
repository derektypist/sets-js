// Set Up Variable
let txt = "";

// Create Instances of Set
let metals = new Set(["Lithium","Sodium","Magnesium","Aluminium"]);

// Convert Set to Array
let metalsArr = Array.from(metals);
txt += `Original Metals ${metalsArr}`;
document.getElementById("demo").innerHTML = txt;
