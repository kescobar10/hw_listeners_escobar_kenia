var clickme = document.getElementsByTagName('h1')[0];

clickme.addEventListener('click', function () {
    var newParagraph = document.createElement('p');
    var i = 0;
    newParagraph.innerHTML = '<p>This is click number 1</p>' + i++;
    document.getElementsByTagName('body')[0].appendChild(newParagraph);
});
