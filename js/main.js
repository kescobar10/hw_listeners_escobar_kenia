var clickme = document.getElementsByTagName('h1')[0];
var i = 1;

clickme.addEventListener('click', function () {
    var newParagraph = document.createElement('p');
    newParagraph.innerHTML = '<p>This is click number ' + i++ + '</p>';
    document.getElementsByTagName('article')[0].appendChild(newParagraph);
});
