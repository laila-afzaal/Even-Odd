 function calculate() {
 let num = document.querySelector('#num').value;

 num = Number(num);

  if ((num % 2) === 0) {
   document.querySelector('#result').innerHTML =
   `<mark><b> It\'s an even number </b></mark>`;

  }
  else{
    document.querySelector('#result').innerHTML = 
    `<mark><b> It\'s an odd number </b></mark>`;
 }
}

  var el = document.getElementById("myInputID");
  el.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Enter key was hit
    }
});

