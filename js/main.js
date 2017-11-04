var clickme = document.getElementsByTagName('h1')[0];

clickme.addEventListener('click', function () {
    var newParagraph = document.createElement('p');
    newParagraph.innerHTML = '<p>Hello</p>';
    document.getElementsByTagName('body')[0].appendChild(newParagraph);
});
