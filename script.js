// Div 4 script
function hover_div(element) {
    element.style.backgroundColor = 'rgba(0, 102, 255, 0.836)';
    element.style.height = 'fit-content';
    element.style.color ='white';
    var innerText = element.getElementsByClassName('div_4inncertext')[0];
    innerText.style.display = 'block';
}


function mouseout_div(element) {
    element.style.backgroundColor = 'white'; // Revert to default background color
    element.style.height = '150px'; // Revert to default height
    var innerText = element.getElementsByClassName('div_4inncertext');
    for (var i = 0; i < innerText.length; i++) {
        innerText[i].style.display = 'none'; // Hide all elements with class 'div_4inncertext'
    }
    element.style.color = 'black'; // Revert to default text color
}


// Div 6
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
  });
  


































































































