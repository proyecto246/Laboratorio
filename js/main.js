document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const lightbox = document.querySelector('.galeria');
	lightGallery(lightbox, {
		selector: '.materialboxed',
		autoplayFirstVideo: false
	});
});



