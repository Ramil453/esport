const fileInput = document.querySelector('.add-file')
const previewImage = document.querySelector('.previewImage')

// Слушаем изменения в поле выбора файла
fileInput.addEventListener('change', function () {
	const file = fileInput.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage')
	if (storedImage) {
		previewImage.src = storedImage
	}

	previewImage.style.width = '700px'
	previewImage.style.height = '365px'
})

const fileInput2 = document.querySelector('.add-file2')
const previewImage2 = document.querySelector('.previewImage2')

// Слушаем изменения в поле выбора файла
fileInput2.addEventListener('change', function () {
	const file = fileInput2.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage2.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage2', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage2')
	if (storedImage) {
		previewImage2.src = storedImage
	}

	previewImage2.style.width = '700px'
	previewImage2.style.height = '365px'
})

const fileInput3 = document.querySelector('.add-file3')
const previewImage3 = document.querySelector('.previewImage3')

// Слушаем изменения в поле выбора файла
fileInput3.addEventListener('change', function () {
	const file = fileInput3.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage3.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage3', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage3')
	if (storedImage) {
		previewImage3.src = storedImage
	}

	previewImage3.style.width = '700px'
	previewImage3.style.height = '365px'
})

const fileInput4 = document.querySelector('.add-file4')
const previewImage4 = document.querySelector('.previewImage4')

// Слушаем изменения в поле выбора файла
fileInput4.addEventListener('change', function () {
	const file = fileInput4.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage4.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage4', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage4')
	if (storedImage) {
		previewImage4.src = storedImage
	}

	previewImage4.style.width = '700px'
	previewImage4.style.height = '365px'
})

const fileInput5 = document.querySelector('.add-file5')
const previewImage5 = document.querySelector('.previewImage5')

// Слушаем изменения в поле выбора файла
fileInput5.addEventListener('change', function () {
	const file = fileInput5.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage5.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage5', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage5')
	if (storedImage) {
		previewImage5.src = storedImage
	}

	previewImage5.style.width = '700px'
	previewImage5.style.height = '365px'
})

const fileInput6 = document.querySelector('.add-file6')
const previewImage6 = document.querySelector('.previewImage6')

// Слушаем изменения в поле выбора файла
fileInput6.addEventListener('change', function () {
	const file = fileInput6.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage6.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage6', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage6')
	if (storedImage) {
		previewImage6.src = storedImage
	}

	previewImage6.style.width = '700px'
	previewImage6.style.height = '365px'
})

const fileInput7 = document.querySelector('.add-file7')
const previewImage7 = document.querySelector('.previewImage7')

// Слушаем изменения в поле выбора файла
fileInput7.addEventListener('change', function () {
	const file = fileInput7.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage7.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage7', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage7')
	if (storedImage) {
		previewImage7.src = storedImage
	}

	previewImage7.style.width = '700px'
	previewImage7.style.height = '365px'
})

const fileInput8 = document.querySelector('.add-file8')
const previewImage8 = document.querySelector('.previewImage8')

// Слушаем изменения в поле выбора файла
fileInput8.addEventListener('change', function () {
	const file = fileInput8.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage8.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage8', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage8')
	if (storedImage) {
		previewImage8.src = storedImage
	}

	previewImage8.style.width = '700px'
	previewImage8.style.height = '365px'
})

const fileInput9 = document.querySelector('.add-file9')
const previewImage9 = document.querySelector('.previewImage9')

// Слушаем изменения в поле выбора файла
fileInput9.addEventListener('change', function () {
	const file = fileInput9.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage9.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage9', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage9')
	if (storedImage) {
		previewImage9.src = storedImage
	}

	previewImage9.style.width = '700px'
	previewImage9.style.height = '365px'
})

const fileInput10 = document.querySelector('.add-file10')
const previewImage10 = document.querySelector('.previewImage10')

// Слушаем изменения в поле выбора файла
fileInput10.addEventListener('change', function () {
	const file = fileInput10.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		previewImage10.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedImage10', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedImage10')
	if (storedImage) {
		previewImage10.src = storedImage
	}

	previewImage10.style.width = '700px'
	previewImage10.style.height = '365px'
})

document.querySelector('.save-button').onclick = function () {
	const text = document.querySelector('.relevant-new-title').textContent
	localStorage.setItem('text', text)
	alert('Изменения были сохранены')
}

document.querySelector('.save-button2').onclick = function () {
	const text2 = document.querySelector('.relevant-new-title2').textContent
	localStorage.setItem('text2', text2)
	alert('Изменения были сохранены')
}
document.querySelector('.save-button3').onclick = function () {
	const text3 = document.querySelector('.relevant-new-title3').textContent
	localStorage.setItem('text3', text3)
	alert('Изменения были сохранены')
}
document.querySelector('.save-button4').onclick = function () {
	const text4 = document.querySelector('.relevant-new-title4').textContent
	localStorage.setItem('text4', text4)
	alert('Изменения были сохранены')
}
document.querySelector('.save-button5').onclick = function () {
	const text5 = document.querySelector('.relevant-new-title5').textContent
	localStorage.setItem('text5', text5)
	alert('Изменения были сохранены')
}
document.querySelector('.save-button6').onclick = function () {
	const text6 = document.querySelector('.relevant-new-title6').textContent
	localStorage.setItem('text6', text6)
	alert('Изменения были сохранены')
}
document.querySelector('.save-button7').onclick = function () {
	const text7 = document.querySelector('.relevant-new-title7').textContent
	localStorage.setItem('text7', text7)
	alert('Изменения были сохранены')
}
document.querySelector('.save-button8').onclick = function () {
	const text8 = document.querySelector('.relevant-new-title8').textContent
	localStorage.setItem('text8', text8)
	alert('Изменения были сохранены')
}
document.querySelector('.save-button9').onclick = function () {
	const text9 = document.querySelector('.relevant-new-title9').textContent
	localStorage.setItem('text9', text9)
	alert('Изменения были сохранены')
}
document.querySelector('.save-button10').onclick = function () {
	const text10 = document.querySelector('.relevant-new-title10').textContent
	localStorage.setItem('text10', text10)
	alert('Изменения были сохранены')
}

document.querySelector('.news-save-button').onclick = function () {
	const newsText = document.querySelector('.news-text').textContent
	localStorage.setItem('newsText', newsText)
	alert('Изменения были сохранены')
}
document.querySelector('.news-save-button2').onclick = function () {
	const newsText2 = document.querySelector('.news-text2').textContent
	localStorage.setItem('newsText2', newsText2)
	alert('Изменения были сохранены')
}
document.querySelector('.news-save-button3').onclick = function () {
	const newsText3 = document.querySelector('.news-text3').textContent
	localStorage.setItem('newsText3', newsText3)
	alert('Изменения были сохранены')
}
document.querySelector('.news-save-button4').onclick = function () {
	const newsText4 = document.querySelector('.news-text4').textContent
	localStorage.setItem('newsText4', newsText4)
	alert('Изменения были сохранены')
}

window.addEventListener('load', function () {
	const finalText = document.querySelector('.relevant-new-title')
	finalText.innerHTML = localStorage.getItem('text')

	const finalText2 = document.querySelector('.relevant-new-title2')
	finalText2.innerHTML = localStorage.getItem('text2')

	const finalText3 = document.querySelector('.relevant-new-title3')
	finalText3.innerHTML = localStorage.getItem('text3')

	const finalText4 = document.querySelector('.relevant-new-title4')
	finalText4.innerHTML = localStorage.getItem('text4')

	const finalText5 = document.querySelector('.relevant-new-title5')
	finalText5.innerHTML = localStorage.getItem('text5')

	const finalText6 = document.querySelector('.relevant-new-title6')
	finalText6.innerHTML = localStorage.getItem('text6')

	const finalText7 = document.querySelector('.relevant-new-title7')
	finalText7.innerHTML = localStorage.getItem('text7')

	const finalText8 = document.querySelector('.relevant-new-title8')
	finalText8.innerHTML = localStorage.getItem('text8')

	const finalText9 = document.querySelector('.relevant-new-title9')
	finalText9.innerHTML = localStorage.getItem('text9')

	const finalText10 = document.querySelector('.relevant-new-title10')
	finalText10.innerHTML = localStorage.getItem('text10')

	const finalNewText = document.querySelector('.news-text')
	finalNewText.innerHTML = localStorage.getItem('newsText')

	const finalNewText2 = document.querySelector('.news-text2')
	finalNewText2.innerHTML = localStorage.getItem('newsText2')

	const finalNewText3 = document.querySelector('.news-text3')
	finalNewText3.innerHTML = localStorage.getItem('newsText3')

	const finalNewText4 = document.querySelector('.news-text4')
	finalNewText4.innerHTML = localStorage.getItem('newsText4')
})

//icon

const iconFileInput = document.querySelector('.icon-add-file')
const iconPreviewImage = document.querySelector('.relevant-new-icon')

// Слушаем изменения в поле выбора файла
iconFileInput.addEventListener('change', function () {
	const file = iconFileInput.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage')
	if (storedImage) {
		iconPreviewImage.src = storedImage
	}

	iconPreviewImage.style.width = '50px'
	iconPreviewImage.style.height = '50px'
})

const iconFileInput2 = document.querySelector('.icon-add-file2')
const iconPreviewImage2 = document.querySelector('.relevant-new-icon2')

// Слушаем изменения в поле выбора файла
iconFileInput2.addEventListener('change', function () {
	const file = iconFileInput2.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage2.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage2', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage2')
	if (storedImage) {
		iconPreviewImage2.src = storedImage
	}

	iconPreviewImage2.style.width = '50px'
	iconPreviewImage2.style.height = '50px'
})
const iconFileInput3 = document.querySelector('.icon-add-file3')
const iconPreviewImage3 = document.querySelector('.relevant-new-icon3')

// Слушаем изменения в поле выбора файла
iconFileInput3.addEventListener('change', function () {
	const file = iconFileInput3.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage3.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage3', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage3')
	if (storedImage) {
		iconPreviewImage3.src = storedImage
	}

	iconPreviewImage3.style.width = '50px'
	iconPreviewImage3.style.height = '50px'
})
const iconFileInput4 = document.querySelector('.icon-add-file4')
const iconPreviewImage4 = document.querySelector('.relevant-new-icon4')

// Слушаем изменения в поле выбора файла
iconFileInput4.addEventListener('change', function () {
	const file = iconFileInput4.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage4.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage4', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage4')
	if (storedImage) {
		iconPreviewImage4.src = storedImage
	}

	iconPreviewImage4.style.width = '50px'
	iconPreviewImage4.style.height = '50px'
})
const iconFileInput5 = document.querySelector('.icon-add-file5')
const iconPreviewImage5 = document.querySelector('.relevant-new-icon5')

// Слушаем изменения в поле выбора файла
iconFileInput5.addEventListener('change', function () {
	const file = iconFileInput5.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage5.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage5', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage5')
	if (storedImage) {
		iconPreviewImage5.src = storedImage
	}

	iconPreviewImage5.style.width = '50px'
	iconPreviewImage5.style.height = '50px'
})
const iconFileInput6 = document.querySelector('.icon-add-file6')
const iconPreviewImage6 = document.querySelector('.relevant-new-icon6')

// Слушаем изменения в поле выбора файла
iconFileInput6.addEventListener('change', function () {
	const file = iconFileInput6.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage6.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage6', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage6')
	if (storedImage) {
		iconPreviewImage6.src = storedImage
	}

	iconPreviewImage6.style.width = '50px'
	iconPreviewImage6.style.height = '50px'
})
const iconFileInput7 = document.querySelector('.icon-add-file7')
const iconPreviewImage7 = document.querySelector('.relevant-new-icon7')

// Слушаем изменения в поле выбора файла
iconFileInput7.addEventListener('change', function () {
	const file = iconFileInput7.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage7.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage7', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage7')
	if (storedImage) {
		iconPreviewImage7.src = storedImage
	}

	iconPreviewImage7.style.width = '50px'
	iconPreviewImage7.style.height = '50px'
})
const iconFileInput8 = document.querySelector('.icon-add-file8')
const iconPreviewImage8 = document.querySelector('.relevant-new-icon8')

// Слушаем изменения в поле выбора файла
iconFileInput8.addEventListener('change', function () {
	const file = iconFileInput8.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage8.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage8', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage8')
	if (storedImage) {
		iconPreviewImage8.src = storedImage
	}

	iconPreviewImage8.style.width = '50px'
	iconPreviewImage8.style.height = '50px'
})
const iconFileInput9 = document.querySelector('.icon-add-file9')
const iconPreviewImage9 = document.querySelector('.relevant-new-icon9')

// Слушаем изменения в поле выбора файла
iconFileInput9.addEventListener('change', function () {
	const file = iconFileInput9.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage9.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage9', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage9')
	if (storedImage) {
		iconPreviewImage9.src = storedImage
	}

	iconPreviewImage9.style.width = '50px'
	iconPreviewImage9.style.height = '50px'
})
const iconFileInput10 = document.querySelector('.icon-add-file10')
const iconPreviewImage10 = document.querySelector('.relevant-new-icon10')

// Слушаем изменения в поле выбора файла
iconFileInput10.addEventListener('change', function () {
	const file = iconFileInput10.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconPreviewImage10.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedIconImage10', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedIconImage10')
	if (storedImage) {
		iconPreviewImage10.src = storedImage
	}

	iconPreviewImage10.style.width = '50px'
	iconPreviewImage10.style.height = '50px'
})

const iconNewFileInput = document.querySelector('.icon-new-file')
const iconNewPreviewImage = document.querySelector('.news-icon')

// Слушаем изменения в поле выбора файла
iconNewFileInput.addEventListener('change', function () {
	const file = iconNewFileInput.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconNewPreviewImage.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedNewIconImage', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewIconImage')
	if (storedImage) {
		iconNewPreviewImage.src = storedImage
	}

	iconNewPreviewImage.style.width = '40px'
	iconNewPreviewImage.style.height = '40px'
})

const iconNewFileInput2 = document.querySelector('.icon-new-file2')
const iconNewPreviewImage2 = document.querySelector('.news-icon2')

// Слушаем изменения в поле выбора файла
iconNewFileInput2.addEventListener('change', function () {
	const file = iconNewFileInput2.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconNewPreviewImage2.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedNewIconImage2', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewIconImage2')
	if (storedImage) {
		iconNewPreviewImage2.src = storedImage
	}

	iconNewPreviewImage2.style.width = '40px'
	iconNewPreviewImage2.style.height = '40px'
})

const iconNewFileInput3 = document.querySelector('.icon-new-file3')
const iconNewPreviewImage3 = document.querySelector('.news-icon3')

// Слушаем изменения в поле выбора файла
iconNewFileInput3.addEventListener('change', function () {
	const file = iconNewFileInput3.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconNewPreviewImage3.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedNewIconImage3', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewIconImage3')
	if (storedImage) {
		iconNewPreviewImage3.src = storedImage
	}

	iconNewPreviewImage3.style.width = '40px'
	iconNewPreviewImage3.style.height = '40px'
})

const iconNewFileInput4 = document.querySelector('.icon-new-file4')
const iconNewPreviewImage4 = document.querySelector('.news-icon4')

// Слушаем изменения в поле выбора файла
iconNewFileInput4.addEventListener('change', function () {
	const file = iconNewFileInput4.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconNewPreviewImage4.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedNewIconImage4', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewIconImage4')
	if (storedImage) {
		iconNewPreviewImage4.src = storedImage
	}

	iconNewPreviewImage4.style.width = '40px'
	iconNewPreviewImage4.style.height = '40px'
})
