



let codes = ["HTML", "CSS", "JavaScript"];
let lastcode = codes.pop();
  
let codesString = "This page was built using: " + codes.join(", ") + " and " + lastcode + ".";
  
document.getElementById("built-using").innerHTML = codesString;
  