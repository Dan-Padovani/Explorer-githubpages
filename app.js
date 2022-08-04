const buttonDisplayMore = document.querySelector('.show-more')
const allDisplayCards = document.querySelectorAll('.card')

buttonDisplayMore.addEventListener('click', function() {
	allDisplayCards.forEach((element) => {
		element.style.display='block'
		buttonDisplayMore.style.display='none'
	})
})