const answers = [
	`The magic bird prefers to not waste its precious time with this question`,
	`Most certainly`,
	`You'll find the answer to this question under your bed`,
	`Many still wonder about the answer to this question`,
	`No`,
	`Yes`,
	`You should really ask this question to your mother`,
	`Most certainly NOT`,
	`You'll never know`,
	`The fact that you don't know the answer to this question, certifies that you are an idiot`,
	`Not gonna answer that`,
	`If I were you, I would stop asking such questions`,
	`Only by night, whatever that means`,
	`Flip a coin, and you shall have your answer`,
	`Impossible`,
	`You will get the answer to this question tomorrow morning`,
]

const birdImage1 = document.querySelector('.bird-image-1')
const birdImage2 = document.querySelector('.bird-image-2')

const answerText = document.querySelector('.answer-text')
const answerButton = document.querySelector('.answer-button')

const randomAmountOfMs = () => {
	return Math.random(1) * 500
}

const randomIndex = () => {
	return Math.floor(Math.random() * answers.length - 1) + 1
}

const birdAnswer = () => {
	const answerIndex = randomIndex()
	const durationBirdTalking = answers[answerIndex].length
	answerButton.innerHTML = answers[answerIndex]
	answerButton.classList = ''
	answerButton.removeEventListener('click', birdAnswer)
	const intervalID = setInterval(() => {
		if (randomAmountOfMs() > 170) {
			birdImage2.style.visibility = 'visible'
			birdImage1.style.visibility = 'hidden'
		} else {
			birdImage1.style.visibility = 'visible'
			birdImage2.style.visibility = 'hidden'
		}
	}, 100)

	setTimeout(() => {
		window.clearInterval(intervalID)
		birdImage2.style.visibility = 'hidden'
		birdImage1.style.visibility = 'visible'
		setTimeout(() => {
			answerButton.classList = 'answer-button'
			answerButton.innerHTML = 'Ask the magic bird'
			answerButton.addEventListener('click', birdAnswer)
		}, 1500)
	}, 50 * durationBirdTalking)
}

answerButton.addEventListener('click', birdAnswer)
