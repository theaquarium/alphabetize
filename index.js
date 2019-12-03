window.addEventListener('load', () => {
	const colors = ['#ff8757', '#00728f', '#00b579', '#b58800', '#b53300', '#5200b5', '#b50088', '#4ab500', '#c0d000', '#41008f', '#a60017', '#0079a8', '#4a6233', '#335062', '#623333', '#623347'];
	const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	let ready = true;
	let score = 0;
	let highScore = 0;

	let top;
	let topLetter;
	let bottom;
	let bottomLetter;
	let topCurrent = '';
	let bottomCurrent = '';
	let topCurrentColor = '';
	let bottomCurrentColor = '';

	const beforeButton = document.querySelector('.Before');
	const afterButton = document.querySelector('.After');
	const scoreCounter = document.querySelector('.CurrentScore');
	const highScoreCounter = document.querySelector('.HighScore-score');

	const highScoreNum = Number(localStorage.getItem('highScore'));
	highScore = isNaN(highScoreNum) ? 0 : highScoreNum;
	if (highScore !== 0) {
		let highScoreWord = highScore === 1 ? 'Point' : 'Points';
		highScoreCounter.innerHTML = highScore + ' ' + highScoreWord;
	}

	top = document.createElement('div');
	top.className = 'Part Part-full';
	topLetter = document.createElement('div');
	topLetter.className = 'Letter';
	top.appendChild(topLetter);

	topCurrent = letters[Math.floor(Math.random()*letters.length)];
	topLetter.innerHTML = topCurrent;
	topCurrentColor = colors[Math.floor(Math.random()*colors.length)];
	top.style.background = topCurrentColor;

	bottom = document.createElement('div');
	bottom.className = 'Part Part-full';
	bottomLetter = document.createElement('div');
	bottomLetter.className = 'Letter';
	bottom.appendChild(bottomLetter);

	bottomCurrent = letters[Math.floor(Math.random()*letters.length)];
	while (bottomCurrent === topCurrent) {
		bottomCurrent = letters[Math.floor(Math.random()*letters.length)];
	}
	bottomLetter.innerHTML = bottomCurrent;
	bottomCurrentColor = colors[Math.floor(Math.random()*colors.length)];
	while (bottomCurrentColor === topCurrentColor) {
		bottomCurrentColor = colors[Math.floor(Math.random()*colors.length)];
	}
	bottom.style.background = bottomCurrentColor;

	beforeButton.style.background = topCurrentColor;
	afterButton.style.background = bottomCurrentColor;

	document.body.appendChild(top);
	document.body.appendChild(bottom);

	beforeButton.addEventListener('click', () => {
		if (ready) {
			if (letters.indexOf(topCurrent) < letters.indexOf(bottomCurrent)) {
				top.classList.remove('Part-full');
				ready = false;
				score += 1;
				let word = score === 1 ? 'Point' : 'Points';
				scoreCounter.innerHTML = score + ' ' + word;
				if (score > highScore) {
					highScore = score;
					let highScoreWord = highScore === 1 ? 'Point' : 'Points';
					highScoreCounter.innerHTML = highScore + ' ' + highScoreWord;
					localStorage.setItem('highScore', highScore);
				}

				let newBottom = document.createElement('div');
				newBottom.className = 'Part';
				let newBottomLetter = document.createElement('div');
				newBottomLetter.className = 'Letter';
				newBottom.appendChild(newBottomLetter);

				let newBottomCurrent = letters[Math.floor(Math.random()*letters.length)];
				while (newBottomCurrent === bottomCurrent) {
					newBottomCurrent = letters[Math.floor(Math.random()*letters.length)];
				}
				newBottomLetter.innerHTML = newBottomCurrent;
				let newBottomCurrentColor = colors[Math.floor(Math.random()*colors.length)];
				while (newBottomCurrentColor === bottomCurrentColor) {
					newBottomCurrentColor = colors[Math.floor(Math.random()*colors.length)];
				}
				newBottom.style.background = newBottomCurrentColor;

				beforeButton.style.background = bottomCurrentColor;
				afterButton.style.background = newBottomCurrentColor;

				document.body.appendChild(newBottom);

				setTimeout(() => {
					top.remove();

					top = bottom;
					topLetter = bottomLetter;
					topCurrentColor = bottomCurrentColor;
					topCurrent = bottomCurrent;

					bottom = newBottom;
					bottomLetter = newBottomLetter;
					bottomCurrent = newBottomCurrent;
					bottomCurrentColor = newBottomCurrentColor;
					
					bottom.classList.add('Part-full');

					ready = true;
				}, 500);
			} else {
				beforeButton.classList.remove("wiggle");
				void beforeButton.offsetWidth;
				beforeButton.classList.add("wiggle");
				score = 0;
				scoreCounter.innerHTML = '0 Points';
			}
		}
	});

	afterButton.addEventListener('click', () => {
		if (ready) {
			if (letters.indexOf(topCurrent) > letters.indexOf(bottomCurrent)) {
				top.classList.remove('Part-full');
				ready = false;
				score += 1;
				let word = score === 1 ? 'Point' : 'Points';
				scoreCounter.innerHTML = score + ' ' + word;
				if (score > highScore) {
					highScore = score;
					let highScoreWord = highScore === 1 ? 'Point' : 'Points';
					highScoreCounter.innerHTML = highScore + ' ' + highScoreWord;
					localStorage.setItem('highScore', highScore);
				}

				let newBottom = document.createElement('div');
				newBottom.className = 'Part';
				let newBottomLetter = document.createElement('div');
				newBottomLetter.className = 'Letter';
				newBottom.appendChild(newBottomLetter);

				let newBottomCurrent = letters[Math.floor(Math.random()*letters.length)];
				while (newBottomCurrent === bottomCurrent) {
					newBottomCurrent = letters[Math.floor(Math.random()*letters.length)];
				}
				newBottomLetter.innerHTML = newBottomCurrent;
				let newBottomCurrentColor = colors[Math.floor(Math.random()*colors.length)];
				while (newBottomCurrentColor === bottomCurrentColor) {
					newBottomCurrentColor = colors[Math.floor(Math.random()*colors.length)];
				}
				newBottom.style.background = newBottomCurrentColor;

				beforeButton.style.background = bottomCurrentColor;
				afterButton.style.background = newBottomCurrentColor;

				document.body.appendChild(newBottom);

				setTimeout(() => {
					top.remove();

					top = bottom;
					topLetter = bottomLetter;
					topCurrentColor = bottomCurrentColor;
					topCurrent = bottomCurrent;

					bottom = newBottom;
					bottomLetter = newBottomLetter;
					bottomCurrent = newBottomCurrent;
					bottomCurrentColor = newBottomCurrentColor;

					
					bottom.classList.add('Part-full');

					ready = true;
				}, 500);
			} else {
				afterButton.classList.remove("wiggle");
				void afterButton.offsetWidth;
				afterButton.classList.add("wiggle");
				score = 0;
				scoreCounter.innerHTML = '0 Points';
			}
		}
	});

	document.querySelector('.Start-button').addEventListener('click', () => {
		document.querySelector('.Start').classList.add('is-inactive');
	});
});
