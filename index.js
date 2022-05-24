const birdImage = document.querySelector('.bird-image')

const randomAmountOfMs = () => {
	return Math.random(1) * 500
}

const birdAnswer = () => {
	const intervalID = setInterval(() => {
		if (randomAmountOfMs() > 170) {
			birdImage.src = './media/400x bird talking.png'
		} else {
			birdImage.src = './media/400x bird.png'
		}
	}, 100)

	setTimeout(() => {
		window.clearInterval(intervalID)
		birdImage.src = './media/400x bird.png'
	}, 3000)
}

const answerH2Button = document.querySelector('.answer')

answerH2Button.addEventListener('click', birdAnswer)
