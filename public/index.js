const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		navbar.classList.add('opacity-95');
		navbar.classList.add('bg-gray-50');
		navbar.classList.add('h-24');
	} else {
		navbar.classList.remove('opacity-95');
		navbar.classList.remove('bg-gray-50');
		navbar.classList.remove('h-24');
	}
});
