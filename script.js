let textInput = document.querySelector('.textInput');
let gamesForm = document.querySelector('.gamesForm');
let resetBtn = document.querySelector('.resetBtn');
let allGames = document.querySelectorAll('.gameCard')


gamesForm.addEventListener('submit', handleSubmit);
resetBtn.addEventListener('click', resetGameList);


//filter games depending on searched values
function handleSubmit(e) {
	e.preventDefault();
	const formData = new FormData(e.target);
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

//reset search to show all games again
function resetGameList(e) {
	e.preventDefault();
	for(let game of allGames) {
		game.classList.remove('hideGame');
	}
	textInput.value = '';
}