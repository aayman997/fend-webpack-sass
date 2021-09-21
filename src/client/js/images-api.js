//Key: ZDM2NzNiNzYtYjBhMC00MjI4LWFiYWMtMDhhZWMyZjQ5MzU0
//API: https://api.unsplash.com/photos/random?client_id=y8NlGpDwdNg3XTj8v-rSRnEYNpEL5Z6zD3mlbYoJfMI
function getImages() {

	fetch('https://api.unsplash.com/photos/random?client_id=y8NlGpDwdNg3XTj8v-rSRnEYNpEL5Z6zD3mlbYoJfMI')
		.then(res => {
			return res.json();
		}).then(data => {
		console.log(data);
		document.getElementById('resultsCon').innerHTML = `
			<img src='${data.urls.full}' width='auto' height='500px' alt='${data.alt_description}'>
			`;
	});
}

export { getImages };
