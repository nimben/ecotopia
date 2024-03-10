const gardenPlan = document.getElementById('garden-plan');
const gardenContainer = document.getElementById('garden-container');
const shop = document.getElementById('shop');
const crops = [
	{
		name: 'Blueberry',
		harvestTime: 4,
		likes: 'full sun',
		img: 'blueberry.jpg'
	},
	{
		name: 'Strawberry',
		harvestTime: 3,
		likes: 'full sun',
		img: 'strawberry.jpg'
	},
	{
		name: 'Tomato',
		harvestTime: 3,
		likes: 'full sun',
		img: 'tomato.jpg'
	}
];

crops.forEach((crop) => {
	const cropDiv = document.createElement('div');
	cropDiv.classList.add('crop');
	cropDiv.dataset.crop = crop.name.toLowerCase();
	cropDiv.innerHTML = `
		<h2>${crop.name}</h2>
		<p>Harvest in ${crop.harvestTime} months</p>
		<p>Likes ${crop.likes}</p>
		<button>Start growing</button>
	`;
	gardenPlan.appendChild(cropDiv);
	cropDiv.addEventListener('click', () => {
		addToGarden(crop);
	});
});

function addToGarden(crop) {
	const gardenCropDiv = document.createElement('div');
	gardenCropDiv.classList.add('garden-crop');
	gardenCropDiv.innerHTML = `
		<img src="${crop.img}" alt="${crop.name}">
		<h2>${crop.name}</h2>
		<p>Harvest in ${crop.harvestTime} months</p>
		<p>Likes ${crop.likes}</p>
	`;
	gardenContainer.appendChild(gardenCropDiv);
	const cropDiv = document.querySelector([data-crop="${crop.name.toLowerCase()}"]);
	cropDiv.remove();
}

shop.addEventListener('click', () => {
	const cropDivs = document.querySelectorAll('.crop');
	cropDivs.forEach((cropDiv) => {
		gardenPlan.appendChild(cropDiv);
	});
	gardenContainer.innerHTML = '';
});