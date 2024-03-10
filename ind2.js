const myImage = document.getElementById('myImage');

myImage.addEventListener('mouseover', () => {
    myImage.style.transform = 'scale(1.1)';
});

myImage.addEventListener('mouseout', () => {
    myImage.style.transform = 'scale(1)';
});