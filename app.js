const buttonDisplayMore = document.querySelector('.show-more')
const allDisplayCards = document.querySelectorAll('.card')

buttonDisplayMore.addEventListener('click', function() {
	allDisplayCards.forEach((element) => {
		element.classList.remove('hide')
		buttonDisplayMore.classList.add('hide')
	})
})