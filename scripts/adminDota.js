const dotaFileInput = document.querySelector('.add-file')
const dotaPreviewImage = document.querySelector('.previewImage')

// Слушаем изменения в поле выбора файла
dotaFileInput.addEventListener('change', function () {
	const file = dotaFileInput.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage')
	if (storedImage) {
		dotaPreviewImage.src = storedImage
	}

	dotaPreviewImage.style.width = '700px'
	dotaPreviewImage.style.height = '365px'
})

const dotaFileInput2 = document.querySelector('.add-file2')
const dotaPreviewImage2 = document.querySelector('.previewImage2')

// Слушаем изменения в поле выбора файла
dotaFileInput2.addEventListener('change', function () {
	const file = dotaFileInput2.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage2.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage2', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage2')
	if (storedImage) {
		dotaPreviewImage2.src = storedImage
	}

	dotaPreviewImage2.style.width = '700px'
	dotaPreviewImage2.style.height = '365px'
})

const dotaFileInput3 = document.querySelector('.add-file3')
const dotaPreviewImage3 = document.querySelector('.previewImage3')

// Слушаем изменения в поле выбора файла
dotaFileInput3.addEventListener('change', function () {
	const file = dotaFileInput3.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage3.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage3', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage3')
	if (storedImage) {
		dotaPreviewImage3.src = storedImage
	}

	dotaPreviewImage3.style.width = '700px'
	dotaPreviewImage3.style.height = '365px'
})

const dotaFileInput4 = document.querySelector('.add-file4')
const dotaPreviewImage4 = document.querySelector('.previewImage4')

// Слушаем изменения в поле выбора файла
dotaFileInput4.addEventListener('change', function () {
	const file = dotaFileInput4.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage4.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage4', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage4')
	if (storedImage) {
		dotaPreviewImage4.src = storedImage
	}

	dotaPreviewImage4.style.width = '700px'
	dotaPreviewImage4.style.height = '365px'
})

const dotaFileInput5 = document.querySelector('.add-file5')
const dotaPreviewImage5 = document.querySelector('.previewImage5')

// Слушаем изменения в поле выбора файла
dotaFileInput5.addEventListener('change', function () {
	const file = dotaFileInput5.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage5.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage5', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage5')
	if (storedImage) {
		dotaPreviewImage5.src = storedImage
	}

	dotaPreviewImage5.style.width = '700px'
	dotaPreviewImage5.style.height = '365px'
})

const dotaFileInput6 = document.querySelector('.add-file6')
const dotaPreviewImage6 = document.querySelector('.previewImage6')

// Слушаем изменения в поле выбора файла
dotaFileInput6.addEventListener('change', function () {
	const file = dotaFileInput6.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage6.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage6', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage6')
	if (storedImage) {
		dotaPreviewImage6.src = storedImage
	}

	dotaPreviewImage6.style.width = '700px'
	dotaPreviewImage6.style.height = '365px'
})

const dotaFileInput7 = document.querySelector('.add-file7')
const dotaPreviewImage7 = document.querySelector('.previewImage7')

// Слушаем изменения в поле выбора файла
dotaFileInput7.addEventListener('change', function () {
	const file = dotaFileInput7.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage7.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage7', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage7')
	if (storedImage) {
		dotaPreviewImage7.src = storedImage
	}

	dotaPreviewImage7.style.width = '700px'
	dotaPreviewImage7.style.height = '365px'
})

const dotaFileInput8 = document.querySelector('.add-file8')
const dotaPreviewImage8 = document.querySelector('.previewImage8')

// Слушаем изменения в поле выбора файла
dotaFileInput8.addEventListener('change', function () {
	const file = dotaFileInput8.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage8.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage8', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage8')
	if (storedImage) {
		dotaPreviewImage8.src = storedImage
	}

	dotaPreviewImage8.style.width = '700px'
	dotaPreviewImage8.style.height = '365px'
})

const dotaFileInput9 = document.querySelector('.add-file9')
const dotaPreviewImage9 = document.querySelector('.previewImage9')

// Слушаем изменения в поле выбора файла
dotaFileInput9.addEventListener('change', function () {
	const file = dotaFileInput9.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage9.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage9', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage9')
	if (storedImage) {
		dotaPreviewImage9.src = storedImage
	}

	dotaPreviewImage9.style.width = '700px'
	dotaPreviewImage9.style.height = '365px'
})

const dotaFileInput10 = document.querySelector('.add-file10')
const dotaPreviewImage10 = document.querySelector('.previewImage10')

// Слушаем изменения в поле выбора файла
dotaFileInput10.addEventListener('change', function () {
	const file = dotaFileInput10.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		dotaPreviewImage10.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaImage10', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaImage10')
	if (storedImage) {
		dotaPreviewImage10.src = storedImage
	}

	dotaPreviewImage10.style.width = '700px'
	dotaPreviewImage10.style.height = '365px'
})

// const saveBtn = document.querySelectorAll('.save-button')
// saveBtn.forEach(e => {
// 	e.addEventListener('click', () => {
// 		const text = e.previousElementSibling.textContent
// 		localStorage.setItem('textDota', text)
// 	})
// })

document.querySelector('.save-button').onclick = function () {
	const text = document.querySelector('.relevant-new-title').textContent
	localStorage.setItem('textDota', text)
}

document.querySelector('.save-button2').onclick = function () {
	const text2 = document.querySelector('.relevant-new-title2').textContent
	localStorage.setItem('textDota2', text2)
}
document.querySelector('.save-button3').onclick = function () {
	const text3 = document.querySelector('.relevant-new-title3').textContent
	localStorage.setItem('textDota3', text3)
}
document.querySelector('.save-button4').onclick = function () {
	const text4 = document.querySelector('.relevant-new-title4').textContent
	localStorage.setItem('textDota4', text4)
}
document.querySelector('.save-button5').onclick = function () {
	const text5 = document.querySelector('.relevant-new-title5').textContent
	localStorage.setItem('textDota5', text5)
}
document.querySelector('.save-button6').onclick = function () {
	const text6 = document.querySelector('.relevant-new-title6').textContent
	localStorage.setItem('textDota6', text6)
}
document.querySelector('.save-button7').onclick = function () {
	const text7 = document.querySelector('.relevant-new-title7').textContent
	localStorage.setItem('textDota7', text7)
}
document.querySelector('.save-button8').onclick = function () {
	const text8 = document.querySelector('.relevant-new-title8').textContent
	localStorage.setItem('textDota8', text8)
}
document.querySelector('.save-button9').onclick = function () {
	const text9 = document.querySelector('.relevant-new-title9').textContent
	localStorage.setItem('textDota9', text9)
}
document.querySelector('.save-button10').onclick = function () {
	const text10 = document.querySelector('.relevant-new-title10').textContent
	localStorage.setItem('textDota10', text10)
}

document.querySelector('.news-save-button').onclick = function () {
	const newsText = document.querySelector('.news-text').textContent
	localStorage.setItem('newsDotaText', newsText)
}
document.querySelector('.news-save-button2').onclick = function () {
	const newsText2 = document.querySelector('.news-text2').textContent
	localStorage.setItem('newsDotaText2', newsText2)
}
document.querySelector('.news-save-button3').onclick = function () {
	const newsText3 = document.querySelector('.news-text3').textContent
	localStorage.setItem('newsDotaText3', newsText3)
}
document.querySelector('.news-save-button4').onclick = function () {
	const newsText4 = document.querySelector('.news-text4').textContent
	localStorage.setItem('newsDotaText4', newsText4)
}

window.addEventListener('load', function () {
	const finalText = document.querySelector('.relevant-new-title')
	finalText.innerHTML = localStorage.getItem('textDota')

	const finalText2 = document.querySelector('.relevant-new-title2')
	finalText2.innerHTML = localStorage.getItem('textDota2')

	const finalText3 = document.querySelector('.relevant-new-title3')
	finalText3.innerHTML = localStorage.getItem('textDota3')

	const finalText4 = document.querySelector('.relevant-new-title4')
	finalText4.innerHTML = localStorage.getItem('textDota4')

	const finalText5 = document.querySelector('.relevant-new-title5')
	finalText5.innerHTML = localStorage.getItem('textDota5')

	const finalText6 = document.querySelector('.relevant-new-title6')
	finalText6.innerHTML = localStorage.getItem('textDota6')

	const finalText7 = document.querySelector('.relevant-new-title7')
	finalText7.innerHTML = localStorage.getItem('textDota7')

	const finalText8 = document.querySelector('.relevant-new-title8')
	finalText8.innerHTML = localStorage.getItem('textDota8')

	const finalText9 = document.querySelector('.relevant-new-title9')
	finalText9.innerHTML = localStorage.getItem('textDota9')

	const finalText10 = document.querySelector('.relevant-new-title10')
	finalText10.innerHTML = localStorage.getItem('textDota10')

	const finalNewText = document.querySelector('.news-text')
	finalNewText.innerHTML = localStorage.getItem('newsDotaText')

	const finalNewText2 = document.querySelector('.news-text2')
	finalNewText2.innerHTML = localStorage.getItem('newsDotaText2')

	const finalNewText3 = document.querySelector('.news-text3')
	finalNewText3.innerHTML = localStorage.getItem('newsDotaText3')

	const finalNewText4 = document.querySelector('.news-text4')
	finalNewText4.innerHTML = localStorage.getItem('newsDotaText4')
})

//icon

const iconDotaFileInput = document.querySelector('.icon-add-file')
const iconDotaPreviewImage = document.querySelector('.relevant-new-icon')

// Слушаем изменения в поле выбора файла
iconDotaFileInput.addEventListener('change', function () {
	const file = iconDotaFileInput.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconDotaPreviewImage.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaIconImage', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage')
	if (storedImage) {
		iconDotaPreviewImage.src = storedImage
	}

	iconDotaPreviewImage.style.width = '50px'
	iconDotaPreviewImage.style.height = '50px'
})

const iconDotaFileInput2 = document.querySelector('.icon-add-file2')
const iconDotaPreviewImage2 = document.querySelector('.relevant-new-icon2')

// Слушаем изменения в поле выбора файла
iconDotaFileInput2.addEventListener('change', function () {
	const file = iconDotaFileInput2.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconDotaPreviewImage2.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaIconImage2', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage2')
	if (storedImage) {
		iconDotaPreviewImage2.src = storedImage
	}

	iconDotaPreviewImage2.style.width = '50px'
	iconDotaPreviewImage2.style.height = '50px'
})
const iconDotaFileInput3 = document.querySelector('.icon-add-file3')
const iconDotaPreviewImage3 = document.querySelector('.relevant-new-icon3')

// Слушаем изменения в поле выбора файла
iconDotaFileInput3.addEventListener('change', function () {
	const file = iconDotaFileInput3.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconDotaPreviewImage3.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaIconImage3', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage3')
	if (storedImage) {
		iconDotaPreviewImage3.src = storedImage
	}

	iconDotaPreviewImage3.style.width = '50px'
	iconDotaPreviewImage3.style.height = '50px'
})
const iconDotaFileInput4 = document.querySelector('.icon-add-file4')
const iconDotaPreviewImage4 = document.querySelector('.relevant-new-icon4')

// Слушаем изменения в поле выбора файла
iconDotaFileInput4.addEventListener('change', function () {
	const file = iconDotaFileInput4.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconDotaPreviewImage4.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaIconImage4', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage4')
	if (storedImage) {
		iconDotaPreviewImage4.src = storedImage
	}

	iconDotaPreviewImage4.style.width = '50px'
	iconDotaPreviewImage4.style.height = '50px'
})
const iconDotaFileInput5 = document.querySelector('.icon-add-file5')
const iconDotaPreviewImage5 = document.querySelector('.relevant-new-icon5')

// Слушаем изменения в поле выбора файла
iconDotaFileInput5.addEventListener('change', function () {
	const file = iconDotaFileInput5.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconDotaPreviewImage5.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaIconImage5', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage5')
	if (storedImage) {
		iconDotaPreviewImage5.src = storedImage
	}

	iconDotaPreviewImage5.style.width = '50px'
	iconDotaPreviewImage5.style.height = '50px'
})
const iconDotaFileInput6 = document.querySelector('.icon-add-file6')
const iconDotaPreviewImage6 = document.querySelector('.relevant-new-icon6')

// Слушаем изменения в поле выбора файла
iconDotaFileInput6.addEventListener('change', function () {
	const file = iconDotaFileInput6.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconDotaPreviewImage6.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaIconImage6', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage6')
	if (storedImage) {
		iconDotaPreviewImage6.src = storedImage
	}

	iconDotaPreviewImage6.style.width = '50px'
	iconDotaPreviewImage6.style.height = '50px'
})
const iconDotaFileInput7 = document.querySelector('.icon-add-file7')
const iconDotaPreviewImage7 = document.querySelector('.relevant-new-icon7')

// Слушаем изменения в поле выбора файла
iconDotaFileInput7.addEventListener('change', function () {
	const file = iconDotaFileInput7.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconDotaPreviewImage7.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaIconImage7', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage7')
	if (storedImage) {
		iconDotaPreviewImage7.src = storedImage
	}

	iconDotaPreviewImage7.style.width = '50px'
	iconDotaPreviewImage7.style.height = '50px'
})
const iconDotaFileInput8 = document.querySelector('.icon-add-file8')
const iconDotaPreviewImage8 = document.querySelector('.relevant-new-icon8')

// Слушаем изменения в поле выбора файла
iconDotaFileInput8.addEventListener('change', function () {
	const file = iconDotaFileInput8.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconDotaPreviewImage8.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaIconImage8', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage8')
	if (storedImage) {
		iconDotaPreviewImage8.src = storedImage
	}

	iconDotaPreviewImage8.style.width = '50px'
	iconDotaPreviewImage8.style.height = '50px'
})
const iconDotaFileInput9 = document.querySelector('.icon-add-file9')
const iconDotaPreviewImage9 = document.querySelector('.relevant-new-icon9')

// Слушаем изменения в поле выбора файла
iconDotaFileInput9.addEventListener('change', function () {
	const file = iconDotaFileInput9.files[0]
	const reader = new FileReader()

	reader.onload = function (e) {
		const imageUrl = e.target.result
		iconDotaPreviewImage9.src = imageUrl

		// Сохраняем изображение в localStorage
		localStorage.setItem('uploadedDotaIconImage9', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage9')
	if (storedImage) {
		iconDotaPreviewImage9.src = storedImage
	}

	iconDotaPreviewImage9.style.width = '50px'
	iconDotaPreviewImage9.style.height = '50px'
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
		localStorage.setItem('uploadedDotaIconImage10', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedDotaIconImage10')
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
		localStorage.setItem('uploadedNewDotaIconImage', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewDotaIconImage')
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
		localStorage.setItem('uploadedNewDotaIconImage2', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewDotaIconImage2')
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
		localStorage.setItem('uploadedNewDotaIconImage3', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewDotaIconImage3')
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
		localStorage.setItem('uploadedNewDotaIconImage4', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewDotaIconImage4')
	if (storedImage) {
		iconNewPreviewImage4.src = storedImage
	}

	iconNewPreviewImage4.style.width = '40px'
	iconNewPreviewImage4.style.height = '40px'
})
