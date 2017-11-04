// First event listener: Click h1 to change its color
var eventOne = document.getElementsByTagName('h1')[0];

eventOne.addEventListener('click', function () {
    eventOne.className = 'blue';
});

// Second event listener: Double click the image to see the caption
var eventTwo = document.getElementsByTagName('img')[0];

eventTwo.addEventListener('dblclick', function () {
    var seeCaption = document.createElement('caption');
    seeCaption.innerHTML = '<caption>This is a stock photo of snowy branches.</caption>';
    document.getElementsByTagName('figure')[0].appendChild(seeCaption);
});
