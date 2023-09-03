let textInput = document.querySelector('.input');
let searchBtn = document.querySelector('.searchBtn');
let resetBtn = document.querySelector('.resetBtn');
let allGames = document.querySelectorAll('.gameCard')


searchBtn.addEventListener('click', searchGames);
resetBtn.addEventListener('click', resetGameList);

function searchGames(e) {
	e.preventDefault();
	for(let game of allGames) {
		game.classList.remove('hideGame');
	}
	let searchedValue = textInput.value.toLowerCase();

	for(let game of allGames) {
		let title = game.children[1].innerText.toLowerCase();
		if (!title.includes(searchedValue)) {
			game.classList.add('hideGame');
		}
	}
}

function resetGameList(e) {
	e.preventDefault();
	for(let game of allGames) {
		game.classList.remove('hideGame');
	}
	textInput.value = '';
}