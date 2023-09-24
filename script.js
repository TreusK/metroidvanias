let textInput = document.querySelector('.textInput');
let scoreInput = document.querySelector('#score');
let allGames = document.querySelectorAll('.gameCard');
let resetBtn = document.querySelector('.resetBtn');

textInput.addEventListener('input', handleChange);
scoreInput.addEventListener('change', handleChange)
resetBtn.addEventListener('click', showAll);


//Search onchange instead of on submit
function handleChange(e) {
	const formData = new FormData(e.target.form);
  const formProps = Object.fromEntries(formData);
  for(let game of allGames) {
		game.classList.remove('hideGame');
	}
	let searchedTitle = formProps.title.toLowerCase();
	let searchedScore = formProps.score;

	//Hide games that do not match search query
	for(let game of allGames) {
		let score = game.children[3].innerText;
		let title = game.children[1].innerText.toLowerCase();
		if (!title.includes(searchedTitle)) {
			game.classList.add('hideGame');
		} else if (searchedScore != 'all' && searchedScore != score[0]) {
			game.classList.add('hideGame');
		}
	}
}

//reset type inputs doesn't remove the hidden class obviously, so I need this
function showAll() {
	for(let game of allGames) {
		game.classList.remove('hideGame')
	}
}
