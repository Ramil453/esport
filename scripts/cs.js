document.querySelector('.header-auth-btn').onclick = function () {
	document.querySelector('.registration-menu').style.display = 'block'
	document.querySelector('.background').style.display = 'block'
}
document.querySelector('.cross-btn').onclick = function () {
	document.querySelector('.registration-menu').style.display = 'none'
	document.querySelector('.background').style.display = 'none'
}
document.querySelector('.reg-cross-btn').onclick = function () {
	document.querySelector('.registration-menu').style.display = 'none'
	document.querySelector('.background').style.display = 'none'
}
document.querySelector('.reg-btn').onclick = function () {
	document.querySelector('.reg-menu').style.display = 'block'
	document.querySelector('.registration-menu').style.height = '700px'
	document.querySelector('.up-row').style.display = 'none'
	document.querySelector('.down-row').style.display = 'none'
}
document.getElementById('auth-btn').onclick = function () {
	document.querySelector('.reg-menu').style.display = 'none'
	document.querySelector('.registration-menu').style.height = '450px'
	document.querySelector('.up-row').style.display = 'flex'
	document.querySelector('.down-row').style.display = 'flex'
}

localStorage.setItem('Login', 'admin')
localStorage.setItem('Password', 'admin')

const adminLogin = localStorage.getItem('Login')
const adminPass = localStorage.getItem('Password')

document.querySelector('.auth-button').onclick = function () {
	if (
		document.getElementById('login').value == adminLogin &&
		document.getElementById('pass').value == adminPass
	) {
		console.log('hello admin')
		window.location.href = 'adminIndex.html'
	} else {
		console.log('You not admin!')
	}
}

const finalText = document.querySelector('.relevant-new-title')
finalText.innerHTML = localStorage.getItem('textCs')

const finalText2 = document.querySelector('.relevant-new-title2')
finalText2.innerHTML = localStorage.getItem('textCs2')

const finalText3 = document.querySelector('.relevant-new-title3')
finalText3.innerHTML = localStorage.getItem('textCs3')

const finalText4 = document.querySelector('.relevant-new-title4')
finalText4.innerHTML = localStorage.getItem('textCs4')

const finalText5 = document.querySelector('.relevant-new-title5')
finalText5.innerHTML = localStorage.getItem('textCs5')

const finalText6 = document.querySelector('.relevant-new-title6')
finalText6.innerHTML = localStorage.getItem('textCs6')

const finalText7 = document.querySelector('.relevant-new-title7')
finalText7.innerHTML = localStorage.getItem('textCs7')

const finalText8 = document.querySelector('.relevant-new-title8')
finalText8.innerHTML = localStorage.getItem('textCs8')

const finalText9 = document.querySelector('.relevant-new-title9')
finalText9.innerHTML = localStorage.getItem('textCs9')

const finalText10 = document.querySelector('.relevant-new-title10')
finalText10.innerHTML = localStorage.getItem('textCs10')

const finalNewText = document.querySelector('.news-text')
finalNewText.innerHTML = localStorage.getItem('newsCsText')

const finalNewText2 = document.querySelector('.news-text2')
finalNewText2.innerHTML = localStorage.getItem('newsCsText2')

const finalNewText3 = document.querySelector('.news-text3')
finalNewText3.innerHTML = localStorage.getItem('newsCsText3')

const finalNewText4 = document.querySelector('.news-text4')
finalNewText4.innerHTML = localStorage.getItem('newsCsText4')

const previewImage = document.querySelector('.previewImage')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage')
	if (storedImage) {
		previewImage.src = storedImage
	}

	previewImage.style.width = '700px'
	previewImage.style.height = '365px'
})

const previewImage2 = document.querySelector('.previewImage2')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage2')
	if (storedImage) {
		previewImage2.src = storedImage
	}

	previewImage2.style.width = '700px'
	previewImage2.style.height = '365px'
})

const previewImage4 = document.querySelector('.previewImage4')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage4')
	if (storedImage) {
		previewImage4.src = storedImage
	}

	previewImage4.style.width = '700px'
	previewImage4.style.height = '365px'
})

const previewImage5 = document.querySelector('.previewImage5')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage5')
	if (storedImage) {
		previewImage5.src = storedImage
	}

	previewImage5.style.width = '700px'
	previewImage5.style.height = '365px'
})

const previewImage6 = document.querySelector('.previewImage6')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage6')
	if (storedImage) {
		previewImage6.src = storedImage
	}

	previewImage6.style.width = '700px'
	previewImage6.style.height = '365px'
})

const previewImage7 = document.querySelector('.previewImage7')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage7')
	if (storedImage) {
		previewImage7.src = storedImage
	}

	previewImage7.style.width = '700px'
	previewImage7.style.height = '365px'
})

const previewImage8 = document.querySelector('.previewImage8')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage8')
	if (storedImage) {
		previewImage8.src = storedImage
	}

	previewImage8.style.width = '700px'
	previewImage8.style.height = '365px'
})

const previewImage9 = document.querySelector('.previewImage9')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage9')
	if (storedImage) {
		previewImage9.src = storedImage
	}

	previewImage9.style.width = '700px'
	previewImage9.style.height = '365px'
})

const previewImage10 = document.querySelector('.previewImage10')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage10')
	if (storedImage) {
		previewImage10.src = storedImage
	}

	previewImage10.style.width = '700px'
	previewImage10.style.height = '365px'
})

const previewImage3 = document.querySelector('.previewImage3')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage3')
	if (storedImage) {
		previewImage3.src = storedImage
	}

	previewImage3.style.width = '700px'
	previewImage3.style.height = '365px'
})

//icon

const iconPreviewImage = document.querySelector('.relevant-new-icon')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage')
	if (storedImage) {
		iconPreviewImage.src = storedImage
	}

	iconPreviewImage.style.width = '50px'
	iconPreviewImage.style.height = '50px'
})

const iconPreviewImage2 = document.querySelector('.relevant-new-icon2')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage2')
	if (storedImage) {
		iconPreviewImage2.src = storedImage
	}

	iconPreviewImage2.style.width = '50px'
	iconPreviewImage2.style.height = '50px'
})

const iconPreviewImage3 = document.querySelector('.relevant-new-icon3')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage3')
	if (storedImage) {
		iconPreviewImage3.src = storedImage
	}

	iconPreviewImage3.style.width = '50px'
	iconPreviewImage3.style.height = '50px'
})

const iconPreviewImage4 = document.querySelector('.relevant-new-icon4')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage4')
	if (storedImage) {
		iconPreviewImage4.src = storedImage
	}

	iconPreviewImage4.style.width = '50px'
	iconPreviewImage4.style.height = '50px'
})

const iconPreviewImage5 = document.querySelector('.relevant-new-icon5')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage5')
	if (storedImage) {
		iconPreviewImage5.src = storedImage
	}

	iconPreviewImage5.style.width = '50px'
	iconPreviewImage5.style.height = '50px'
})

const iconPreviewImage6 = document.querySelector('.relevant-new-icon6')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage6')
	if (storedImage) {
		iconPreviewImage6.src = storedImage
	}

	iconPreviewImage6.style.width = '50px'
	iconPreviewImage6.style.height = '50px'
})

const iconPreviewImage7 = document.querySelector('.relevant-new-icon7')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage7')
	if (storedImage) {
		iconPreviewImage7.src = storedImage
	}

	iconPreviewImage7.style.width = '50px'
	iconPreviewImage7.style.height = '50px'
})

const iconPreviewImage8 = document.querySelector('.relevant-new-icon8')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage8')
	if (storedImage) {
		iconPreviewImage8.src = storedImage
	}

	iconPreviewImage8.style.width = '50px'
	iconPreviewImage8.style.height = '50px'
})

const iconPreviewImage9 = document.querySelector('.relevant-new-icon9')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage9')
	if (storedImage) {
		iconPreviewImage9.src = storedImage
	}

	iconPreviewImage9.style.width = '50px'
	iconPreviewImage9.style.height = '50px'
})

const iconPreviewImage10 = document.querySelector('.relevant-new-icon10')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage10')
	if (storedImage) {
		iconPreviewImage10.src = storedImage
	}

	iconPreviewImage10.style.width = '50px'
	iconPreviewImage10.style.height = '50px'
})

const iconNewPreviewImage = document.querySelector('.news-icon')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewCsIconImage')
	if (storedImage) {
		iconNewPreviewImage.src = storedImage
	}

	iconNewPreviewImage.style.width = '35px'
	iconNewPreviewImage.style.height = '35px'
})

const iconNewPreviewImage2 = document.querySelector('.news-icon2')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewCsIconImage2')
	if (storedImage) {
		iconNewPreviewImage2.src = storedImage
	}

	iconNewPreviewImage2.style.width = '35px'
	iconNewPreviewImage2.style.height = '35px'
})

const iconNewPreviewImage3 = document.querySelector('.news-icon3')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewCsIconImage3')
	if (storedImage) {
		iconNewPreviewImage3.src = storedImage
	}

	iconNewPreviewImage3.style.width = '35px'
	iconNewPreviewImage3.style.height = '35px'
})

const iconNewPreviewImage4 = document.querySelector('.news-icon4')

window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewCsIconImage4')
	if (storedImage) {
		iconNewPreviewImage4.src = storedImage
	}

	iconNewPreviewImage4.style.width = '35px'
	iconNewPreviewImage4.style.height = '35px'
})
