var clickme = document.getElementsByTagName('h1')[0];

clickme.addEventListener('click', function () {
    var newParagraph = document.createElement('p');
    newParagraph.innerHTML = '<p>This is click number 1</p>';
    document.getElementsByTagName('body')[0].appendChild(newParagraph);
});
