const answers = [
	'Yes, definitely',
	'It is certain',
	'Without a doubt',
	'Most likely',
	'Outlook good',
	'Yes',
	'Signs point to yes',
	'Reply hazy, try again',
	'Better not tell you now',
	'Ask again later',
	'Cannot predict now',
	'Concentrate and ask again',
	"Don't count on it",
	'Outlook not so good',
	'My sources say no',
	'Very doubtful',
	'No',
	'Definitely not',
	"I'm sorry, I cannot answer that",
	'It is not clear',
	'Unclear, try again',
	'You may rely on it',
	'As I see it, yes',
	'Most definitely',
	'Very likely',
	'It is decidedly so',
	'Signs point to no',
	'My reply is no',
	"Don't bet on it",
	'Ask again tomorrow',
	'Out of scope',
	'Not sure',
	'It is possible',
	'It is unlikely',
	"There's a chance",
	"There's no chance",
	'Maybe',
	'Maybe not',
	"I'm not sure",
	"I don't know",
	"I'm not certain",
	"I'm uncertain",
	"I'm hesitant to say",
	"I'm leaning towards yes",
	"I'm leaning towards no",
	"It's up to you",
	'You decide',
	"It's unclear at this time",
	"It's not the right time to answer",
	"I'm not able to answer that right now",
	'Let me think about that',
	"I'll need more information before I can answer",
	"I'm sorry, I cannot provide a response",
	'The answer is unclear',
	'The answer is unknown',
	'I cannot say for certain',
	"It's possible, but unlikely",
	"It's unlikely, but possible",
	"It's too soon to tell",
	"It's too difficult to say",
	"That's a difficult question to answer",
	"That's a question for another time",
	"I'm sorry, I cannot answer that question",
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
