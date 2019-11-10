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
};

//API Code
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

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


//Read More button
var readMore = document.getElementById('read-more');
var readLess = document.getElementById('read-less');
var more = document.getElementById('more');

function showMore() {
  //shows the #more
  more.style.display = "block";
  readMore.classList.add('hide');
}
readMore.addEventListener('click', showMore);
//dissappear
function showLess() {
  more.style.display = "none";
  readMore.classList.remove('hide');
}
readLess.addEventListener('click', showLess);

//Read More 2
var readMore2 = document.getElementById('read-more-2');
var readLess2 = document.getElementById('read-less-2');
var more2 = document.getElementById('more-2');

function showMore2() {
  //shows the #more
  more2.style.display = "block";
  readMore2.classList.add('hide');
}
readMore2.addEventListener('click', showMore2);
//dissappear
function showLess2() {
  more2.style.display = "none";
  readMore2.classList.remove('hide');
}
readLess2.addEventListener('click', showLess2);

//Read More 3
var readMore3 = document.getElementById('read-more-3');
var readLess3 = document.getElementById('read-less-3');
var more3 = document.getElementById('more-3');

function showMore3() {
  //shows the #more
  more3.style.display = "block";
  readMore3.classList.add('hide');
}
readMore3.addEventListener('click', showMore3);
//dissappear
function showLess3() {
  more3.style.display = "none";
  readMore3.classList.remove('hide');
}
readLess3.addEventListener('click', showLess3);

//Read More 4
var readMore4 = document.getElementById('read-more-4');
var readLess4 = document.getElementById('read-less-4');
var more4 = document.getElementById('more-4');

function showMore4() {
  //shows the #more
  more4.style.display = "block";
  readMore4.classList.add('hide');
}
readMore4.addEventListener('click', showMore4);
//dissappear
function showLess4() {
  more4.style.display = "none";
  readMore4.classList.remove('hide');
}
readLess4.addEventListener('click', showLess4);

//Read More 5
var readMore5 = document.getElementById('read-more-5');
var readLess5 = document.getElementById('read-less-5');
var more5 = document.getElementById('more-5');

function showMore5() {
  //shows the #more
  more5.style.display = "block";
  readMore5.classList.add('hide');
}
readMore5.addEventListener('click', showMore5);
//dissappear
function showLess5() {
  more5.style.display = "none";
  readMore5.classList.remove('hide');
}
readLess5.addEventListener('click', showLess5);

//Read More 6
var readMore6 = document.getElementById('read-more-6');
var readLess6 = document.getElementById('read-less-6');
var more6 = document.getElementById('more-6');

function showMore6() {
  //shows the #more
  more6.style.display = "block";
  readMore6.classList.add('hide');
}
readMore6.addEventListener('click', showMore6);
//dissappear
function showLess6() {
  more6.style.display = "none";
  readMore6.classList.remove('hide');
}
readLess6.addEventListener('click', showLess6);
