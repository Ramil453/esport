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
		localStorage.setItem('uploadedCsImage', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage')
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
		localStorage.setItem('uploadedCsImage2', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage2')
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
		localStorage.setItem('uploadedCsImage3', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage3')
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
		localStorage.setItem('uploadedCsImage4', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage4')
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
		localStorage.setItem('uploadedCsImage5', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage5')
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
		localStorage.setItem('uploadedCsImage6', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage6')
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
		localStorage.setItem('uploadedCsImage7', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage7')
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
		localStorage.setItem('uploadedCsImage8', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage8')
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
		localStorage.setItem('uploadedCsImage9', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage9')
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
		localStorage.setItem('uploadedCsImage10', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsImage10')
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
	localStorage.setItem('textCs', text)
}

document.querySelector('.save-button2').onclick = function () {
	const text2 = document.querySelector('.relevant-new-title2').textContent
	localStorage.setItem('textCs2', text2)
}
document.querySelector('.save-button3').onclick = function () {
	const text3 = document.querySelector('.relevant-new-title3').textContent
	localStorage.setItem('textCs3', text3)
}
document.querySelector('.save-button4').onclick = function () {
	const text4 = document.querySelector('.relevant-new-title4').textContent
	localStorage.setItem('textCs4', text4)
}
document.querySelector('.save-button5').onclick = function () {
	const text5 = document.querySelector('.relevant-new-title5').textContent
	localStorage.setItem('textCs5', text5)
}
document.querySelector('.save-button6').onclick = function () {
	const text6 = document.querySelector('.relevant-new-title6').textContent
	localStorage.setItem('textCs6', text6)
}
document.querySelector('.save-button7').onclick = function () {
	const text7 = document.querySelector('.relevant-new-title7').textContent
	localStorage.setItem('textCs7', text7)
}
document.querySelector('.save-button8').onclick = function () {
	const text8 = document.querySelector('.relevant-new-title8').textContent
	localStorage.setItem('textCs8', text8)
}
document.querySelector('.save-button9').onclick = function () {
	const text9 = document.querySelector('.relevant-new-title9').textContent
	localStorage.setItem('textCs9', text9)
}
document.querySelector('.save-button10').onclick = function () {
	const text10 = document.querySelector('.relevant-new-title10').textContent
	localStorage.setItem('textCs10', text10)
}

document.querySelector('.news-save-button').onclick = function () {
	const newsText = document.querySelector('.news-text').textContent
	localStorage.setItem('newsCsText', newsText)
}
document.querySelector('.news-save-button2').onclick = function () {
	const newsText2 = document.querySelector('.news-text2').textContent
	localStorage.setItem('newsCsText2', newsText2)
}
document.querySelector('.news-save-button3').onclick = function () {
	const newsText3 = document.querySelector('.news-text3').textContent
	localStorage.setItem('newsCsText3', newsText3)
}
document.querySelector('.news-save-button4').onclick = function () {
	const newsText4 = document.querySelector('.news-text4').textContent
	localStorage.setItem('newsCsText4', newsText4)
}

window.addEventListener('load', function () {
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
})

// //icon

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
		localStorage.setItem('uploadedCsIconImage', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage')
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
		localStorage.setItem('uploadedCsIconImage2', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage2')
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
		localStorage.setItem('uploadedCsIconImage3', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage3')
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
		localStorage.setItem('uploadedCsIconImage4', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage4')
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
		localStorage.setItem('uploadedCsIconImage5', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage5')
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
		localStorage.setItem('uploadedCsIconImage6', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage6')
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
		localStorage.setItem('uploadedCsIconImage7', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage7')
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
		localStorage.setItem('uploadedCsIconImage8', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage8')
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
		localStorage.setItem('uploadedCsIconImage9', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage9')
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
		localStorage.setItem('uploadedCsIconImage10', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedCsIconImage10')
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
		localStorage.setItem('uploadedNewCsIconImage', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewCsIconImage')
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
		localStorage.setItem('uploadedNewCsIconImage2', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewCsIconImage2')
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
		localStorage.setItem('uploadedNewCsIconImage3', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewCsIconImage3')
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
		localStorage.setItem('uploadedNewCsIconImage4', imageUrl)
	}

	// Читаем выбранный файл как Data URL
	reader.readAsDataURL(file)
})

// При загрузке страницы пытаемся извлечь изображение из localStorage и отобразить его
window.addEventListener('load', function () {
	const storedImage = localStorage.getItem('uploadedNewCsIconImage4')
	if (storedImage) {
		iconNewPreviewImage4.src = storedImage
	}

	iconNewPreviewImage4.style.width = '40px'
	iconNewPreviewImage4.style.height = '40px'
})
