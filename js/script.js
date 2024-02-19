const productsList = document.querySelector('tbody');
const menuBtns = document.querySelectorAll('.category-btn');
const navigation = document.querySelector('nav');
const menuNavBtn = document.querySelector('.menu-bars-btn');
const iconBars = document.querySelector('.fa-bars');
const iconXmark = document.querySelector('.fa-xmark');
const navItem = document.querySelectorAll('.item');

const coffee = [
	[
		{
			name: 'Espresso',
			size: '30ml',
			price: '7zł',
		},
		{
			name: 'Americana',
			size: '250ml',
			price: '7zł',
		},
		{
			name: 'Frappe',
			size: '200ml',
			price: '9zł',
		},
		{
			name: 'Doppio',
			size: '60ml',
			price: '9zł',
		},
		{
			name: 'Caffe Latte',
			size: '300ml',
			price: '12zł',
		},
		{
			name: 'Flat White',
			size: '200ml',
			price: '12zł',
		},
		{
			name: 'Ice Latte',
			size: '200ml',
			price: '12zł',
		},
		{
			name: 'Cappucino',
			size: '250ml',
			price: '12zł',
		},
		{
			name: 'Latte Macchiato',
			size: '300ml',
			price: '12zł',
		},
		{
			name: 'Mokka',
			size: '300ml',
			price: '15zł',
		},
		{
			name: 'Kawa niespodzianka',
			size: '300ml',
			price: '20zł',
		},
	],
	[
		{
			name: 'Coca-Cola',
			size: '330ml',
			price: '7zł',
		},
		{
			name: 'Ice Tea',
			size: '500ml',
			price: '8zł',
		},
		{
			name: 'Pepsi',
			size: '330ml',
			price: '7zł',
		},
		{
			name: 'Tonic',
			size: '500ml',
			price: '8zł',
		},
		{
			name: 'Woda',
			size: '500ml',
			price: '5zł',
		},
		{
			name: '7up',
			size: '330ml',
			price: '7zł',
		},
	],
	[
		{
			name: 'Sernik',
			size: '200g',
			price: '10zł',
		},
		{
			name: 'Szarlotka',
			size: '200g',
			price: '8zł',
		},
		{
			name: 'Karpatka',
			size: '200g',
			price: '12zł',
		},
		{
			name: 'Tort czekoladowy',
			size: '300g',
			price: '15zł',
		},
		{
			name: 'Muffinka',
			size: '100g',
			price: '5zł',
		},
		{
			name: 'Lody (puchar)',
			size: '200g',
			price: '15zł',
		},
		{
			name: 'Deser Kinder',
			size: '200g',
			price: '15zł',
		},
		{
			name: 'Tiramisu',
			size: '200g',
			price: '20zł',
		},
		{
			name: 'Deser Pavlova',
			size: '200g',
			price: '20zł',
		},
	],
		[
		{
			name: 'Ciastka kokosowe',
			size: '3szt',
			price: '6zł',
		},
		{
			name: 'Croisant',
			size: '80g',
			price: '8zł',
		},
		{
			name: 'Paluszki słone',
			size: '70g',
			price: '5zł',
		},
		{
			name: 'Ciastka korzenne',
			size: '6szt',
			price: '10zł',
		},
		{
			name: 'Sezamki',
			size: '5szt',
			price: '5zł',
		},
		{
			name: 'Herbatniki Migdałowe',
			size: '200g',
			price: '15zł',
		},
	],
];

const handleMenu = () => {
navigation.classList.toggle('active');
iconBars.classList.toggle('icon-hide');
iconXmark.classList.toggle('icon-active');
}

const closeOnClickItem = () => {
	navigation.classList.remove('active');
	iconBars.classList.remove('icon-hide');
    iconXmark.classList.remove('icon-active');
}

const showProducts = (categoryIndex) => {
	productsList.innerHTML = ``;
	coffee[categoryIndex].map((product, index) => {
		const productElement = document.createElement('tr');
		productElement.innerHTML = `<td class="product-name">${product.name}</td>
    <td class="price"><span>${product.size}</span>${product.price}</td>`;
		productsList.appendChild(productElement);
	});
};

menuNavBtn.addEventListener('click', handleMenu);
menuBtns.forEach((button, index) =>
	button.addEventListener('click', () => showProducts(index))
);
navItem.forEach((item, index)=> {
	item.addEventListener('click', () => closeOnClickItem(index))
})
