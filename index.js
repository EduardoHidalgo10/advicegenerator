let spanNumber = document.getElementById('number');
let advice = document.getElementById('advice');
let adviceGenerator = document.getElementById('advicegen');



fetch('https://api.adviceslip.com/advice')
.then(response => response.json())
.then(data => {
    spanNumber.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
});


adviceGenerator.addEventListener("click", function() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        spanNumber.innerHTML = data.slip.id;
        advice.innerHTML = data.slip.advice;
    });
});
