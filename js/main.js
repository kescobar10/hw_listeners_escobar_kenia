// First event listener: Click h1 to change its color
var eventOne = document.getElementsByTagName('h1')[0];

eventOne.addEventListener('click', function () {
    eventOne.className = 'blue';
});

//
