document.getElementById('ecotopia-roof-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const roofArea = document.getElementById('roof-area').value;
    const floors = document.getElementById('floors').value;
    const rooftopImage = document.getElementById('rooftop-image').files[0];

    // Process the form data, such as sending it to a server for further processing.
    // For example, you can use the following code to display the form data in a modal:
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    modal.innerHTML = `
        <p>Roof Area: ${roofArea} sqft</p>
        <p>Number of Floors: ${floors}</p>
        <img src="${URL.createObjectURL(rooftopImage)}" alt