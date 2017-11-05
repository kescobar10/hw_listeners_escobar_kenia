// FIRST EVENT LISTENER
// It listens when the user mouses over the h1 element.
// The listener changes the h1 to a class teal and changes the color when it hears the mouseover event.
var eventOne = document.getElementsByTagName('h1')[0];

eventOne.addEventListener('mouseover', function () {
    eventOne.className = 'teal';
});

// SECOND EVENT LISTENER
// It listens when the user double clicks on the image.
// The listener adds a caption below the image when it hears the double click.
var eventTwo = document.getElementsByTagName('img')[0];

eventTwo.addEventListener('dblclick', function () {
    var seeCaption = document.createElement('caption');
    seeCaption.innerHTML = '<caption>This is a stock photo of snowy branches.</caption>';
    document.getElementsByTagName('figure')[0].appendChild(seeCaption);
});

// THIRD EVENT LISTENER
// It listens when the user clicks on the button.
// The listener replaces the container's HTML with a new paragraph.
var eventThree = document.getElementsByTagName('button')[0];

eventThree.addEventListener('click', function () {
    event.preventDefault();
    var newText = document.getElementById('container');
    newText.innerHTML = '<p>Why did you click!? You broke the page. Just kidding. Reload to go back.</p>';
});
