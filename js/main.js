// First event listener: Over over h1 to change its color
var eventOne = document.getElementsByTagName('h1')[0];

eventOne.addEventListener('mouseover', function () {
    eventOne.className = 'teal';
});

// Second event listener: Double click the image to see the caption
var eventTwo = document.getElementsByTagName('img')[0];

eventTwo.addEventListener('dblclick', function () {
    var seeCaption = document.createElement('caption');
    seeCaption.innerHTML = '<caption>This is a stock photo of snowy branches.</caption>';
    document.getElementsByTagName('figure')[0].appendChild(seeCaption);
});

//Third event listener: Click the button to get a surprise message
var eventThree = document.getElementsByTagName('button')[0];

eventThree.addEventListener('click', function () {
    event.preventDefault();
    var newText = document.getElementById('container');
    newText.innerHTML = '<p>Why did you click!? You broke the page. Just kidding. Reload to go back.</p>';
});
