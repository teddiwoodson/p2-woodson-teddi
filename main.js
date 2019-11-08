var hamburgerButton = document.getElementById('hamburger');
var navMenu = document.querySelector('.menu');

function toggleMenu() {
  navMenu.classList.toggle('show-mobile-menu');
}

hamburgerButton.addEventListener('click', toggleMenu);

//accordion
var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');
var accordionDescriptions = document.querySelectorAll('#accordion .accordion-description');

//handles accordion dropdown action
function expandAccordionDescription() {

  //handles toggle indicator
  for (i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].childNodes[3].innerHTML = '+';
    accordionDescriptions[i].classList.remove('accordion-open');
  }

  this.nextElementSibling.classList.add('accordion-open');
  this.childNodes[3].innerHTML = '-';
}
//add event listener for accordion
for (i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}

//API Code
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        console.log(apiResult);

        //variables for the quote
        var quote = document.createTextNode(apiResult.content);
        var author = document.createTextNode(apiResult.author);

        //add quote information
        var quotes = document.querySelectorAll('#quote-wrapper p span');

        quotes[0].appendChild(quote);
        quotes[1].appendChild(author);

    }
};
xmlhttp.open('GET', 'https://api.quotable.io/random', true);
xmlhttp.send();
