let input = document.querySelector(".input");
let button = document.querySelector(".buttonform");
  
button.disabled = true; //setting button state to disabled
  
input.addEventListener("change", stateHandle);
  
  function stateHandle() {
    if (document.querySelector(".input1").value === "" || document.querySelector(".input2").value === "" || document.querySelector(".input3").value === "") {
      button.disabled = true; //button remains disabled
    } else {
      button.disabled = false; //button is enabled
    }
  }
  
  
  function details() {
    
    var input1 = document.getElementById('first name');
    var input2 = document.getElementById('last name');
    var input3 = document.getElementById('email').value;
    var input4 = document.querySelector('input[name="age"]:checked');
    var input5 = document.getElementById('comments');
    
    console.log("First Name:", input1.value);
    console.log("Last Name:", input2.value);
    console.log("Email:", input3);
    console.log("Comments:", input5.value);
    console.log("Age:", input4.value);
   
  } 

  






  



let codes = ["HTML", "CSS", "JavaScript"];
let lastcode = codes.pop();
  
let codesString = "This page was built using: " + codes.join(", ") + " and " + lastcode + ".";
  
document.getElementById("built-using").innerHTML = codesString;