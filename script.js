let winnerFound = false;
const body = document.querySelector("body");
const container = document.querySelector(".container");
const announce = document.createElement("h1");
announce.style.marginTop = "30px";
const resetButton = document.createElement("button");
resetButton.style.width = "110px";
resetButton.style.height = "30px";
resetButton.style.background = "#3C8DAD";
resetButton.style.borderRadius = "3px";
const startButton = document.querySelector(".submit-button");
const name1Div = document.querySelector(".name");
const name2Div = document.querySelector(".name2");
const inputtedName = document.getElementById("name");
const inputtedName2 = document.getElementById("name2");
const header = document.querySelector(".header");
const player1Display = document.createElement("h3");
const player2Display = document.createElement("h3");
let winningPlayer;
let turn = 0;

const gameBoard = (() => {
	const boardArray = ["", "", "", "", "", "", "", "", ""];

	return { boardArray };
})();

const displayController = (() => {
	const gameBoardSelect = document.querySelectorAll(".square");
	const clickOnBoardEvent = gameBoardSelect.forEach((square) => {
		square.addEventListener("click", (e) => {
			addPieceToBoard(square);
			for (let i = 0; i < gameBoard.boardArray.length; i++) {
				if (square.classList.contains(`square${i}`)) {
					gameBoard.boardArray[i] = square.innerText;
				}
			}
			if (game.calculateWin()) {
			}
		});
	});

	const addPieceToBoard = (square) => {
		if (square.innerText == "" && !winnerFound) {
			square.innerText = game.calculateTurn();
		}
	};

	const resetGame = (square) => {
		winnerFound = false;
		for (let i = 0; i < gameBoard.boardArray.length; i++) {
			gameBoard.boardArray[i] = "";
		}
		gameBoardSelect.forEach((square) => {
			square.innerText = "";
		});
		announce.innerText = "";
		resetButton.innerText = "";
		player2Display.innerText = "";
		player1Display.innerText = `${player1.name}'s turn`;
		header.appendChild(player1Display);
		turn = 1;
		resetButton.style.background = "#dddddd";
		resetButton.style.width = "0";
		resetButton.style.height = "0";
		resetButton.disabled = true;
	};

	return { clickOnBoardEvent, resetGame };
})();

const game = (() => {
	const calculateTurn = () => {
		if (turn % 2 == 0) {
			turn++;
			player2Display.innerText = "";
			player1Display.innerText = `${player1.name}'s turn`;
			header.appendChild(player1Display);
			return player1.piece;
		} else {
			turn++;
			player1Display.innerText = "";
			player2Display.innerText = `${player2.name}'s turn`;
			header.appendChild(player2Display);
			return player2.piece;
		}
	};

	const calculateWin = () => {
		if (
			gameBoard.boardArray[0] == gameBoard.boardArray[1] &&
			gameBoard.boardArray[1] == gameBoard.boardArray[2] &&
			gameBoard.boardArray[0] != ""
		) {
			if (gameBoard.boardArray[0] == "X") {
				winningPlayer = player1.name;
			} else {
				winningPlayer = player2.name;
			}

			winnerFound = true;
			player1Display.innerText = "";
			player2Display.innerText = "";
			resetButton.disabled = false;
			resetButton.style.width = "110px";
			resetButton.style.height = "30px";
			resetButton.style.background = "#3C8DAD";
			resetButton.style.borderRadius = "3px";
		}

		if (
			gameBoard.boardArray[3] == gameBoard.boardArray[4] &&
			gameBoard.boardArray[4] == gameBoard.boardArray[5] &&
			gameBoard.boardArray[3] != ""
		) {
			if (gameBoard.boardArray[3] == "X") {
				winningPlayer = player1.name;
			} else {
				winningPlayer = player2.name;
			}

			winnerFound = true;
			player1Display.innerText = "";
			player2Display.innerText = "";
			resetButton.disabled = false;
			resetButton.style.width = "110px";
			resetButton.style.height = "30px";
			resetButton.style.background = "#3C8DAD";
			resetButton.style.borderRadius = "3px";
		}

		if (
			gameBoard.boardArray[6] == gameBoard.boardArray[7] &&
			gameBoard.boardArray[7] == gameBoard.boardArray[8] &&
			gameBoard.boardArray[6] != ""
		) {
			if (gameBoard.boardArray[6] == "X") {
				winningPlayer = player1.name;
			} else {
				winningPlayer = player2.name;
			}

			winnerFound = true;
			player1Display.innerText = "";
			player2Display.innerText = "";
			resetButton.disabled = false;
			resetButton.style.width = "110px";
			resetButton.style.height = "30px";
			resetButton.style.background = "#3C8DAD";
			resetButton.style.borderRadius = "3px";
		}

		if (
			gameBoard.boardArray[0] == gameBoard.boardArray[3] &&
			gameBoard.boardArray[3] == gameBoard.boardArray[6] &&
			gameBoard.boardArray[0] != ""
		) {
			if (gameBoard.boardArray[0] == "X") {
				winningPlayer = player1.name;
			} else {
				winningPlayer = player2.name;
			}

			winnerFound = true;
			player1Display.innerText = "";
			player2Display.innerText = "";
			resetButton.disabled = false;
			resetButton.style.width = "110px";
			resetButton.style.height = "30px";
			resetButton.style.background = "#3C8DAD";
			resetButton.style.borderRadius = "3px";
		}

		if (
			gameBoard.boardArray[1] == gameBoard.boardArray[4] &&
			gameBoard.boardArray[4] == gameBoard.boardArray[7] &&
			gameBoard.boardArray[1] != ""
		) {
			if (gameBoard.boardArray[1] == "X") {
				winningPlayer = player1.name;
			} else {
				winningPlayer = player2.name;
			}

			winnerFound = true;
			player1Display.innerText = "";
			player2Display.innerText = "";
			resetButton.disabled = false;
			resetButton.style.width = "110px";
			resetButton.style.height = "30px";
			resetButton.style.background = "#3C8DAD";
			resetButton.style.borderRadius = "3px";
		}

		if (
			gameBoard.boardArray[2] == gameBoard.boardArray[5] &&
			gameBoard.boardArray[5] == gameBoard.boardArray[8] &&
			gameBoard.boardArray[2] != ""
		) {
			if (gameBoard.boardArray[2] == "X") {
				winningPlayer = player1.name;
			} else {
				winningPlayer = player2.name;
			}

			winnerFound = true;
			player1Display.innerText = "";
			player2Display.innerText = "";
			resetButton.disabled = false;
			resetButton.style.width = "110px";
			resetButton.style.height = "30px";
			resetButton.style.background = "#3C8DAD";
			resetButton.style.borderRadius = "3px";
		}

		if (
			gameBoard.boardArray[0] == gameBoard.boardArray[4] &&
			gameBoard.boardArray[4] == gameBoard.boardArray[8] &&
			gameBoard.boardArray[0] != ""
		) {
			if (gameBoard.boardArray[0] == "X") {
				winningPlayer = player1.name;
			} else {
				winningPlayer = player2.name;
			}

			winnerFound = true;
			player1Display.innerText = "";
			player2Display.innerText = "";
			resetButton.disabled = false;
			resetButton.style.width = "110px";
			resetButton.style.height = "30px";
			resetButton.style.background = "#3C8DAD";
			resetButton.style.borderRadius = "3px";
		}

		if (
			gameBoard.boardArray[2] == gameBoard.boardArray[4] &&
			gameBoard.boardArray[4] == gameBoard.boardArray[6] &&
			gameBoard.boardArray[2] != ""
		) {
			if (gameBoard.boardArray[2] == "X") {
				winningPlayer = player1.name;
			} else {
				winningPlayer = player2.name;
			}

			winnerFound = true;
			player1Display.innerText = "";
			player2Display.innerText = "";
			resetButton.disabled = false;
			resetButton.style.width = "110px";
			resetButton.style.height = "30px";
			resetButton.style.background = "#3C8DAD";
			resetButton.style.borderRadius = "3px";
		}

		if (!winnerFound && gameBoard.boardArray.every(checkDraw)) {
			player1Display.innerText = "";
			player2Display.innerText = "";
			body.appendChild(announce);
			body.appendChild(resetButton);
			announce.innerText = "Draw!";
			resetButton.innerText = "Reset game";
			resetButton.disabled = false;
			resetButton.style.width = "110px";
			resetButton.style.height = "30px";
			resetButton.style.background = "#3C8DAD";
			resetButton.style.borderRadius = "3px";
		}

		function checkDraw(index) {
			return index != "";
		}

		if (winnerFound) {
			body.appendChild(announce);
			body.appendChild(resetButton);
			if (winningPlayer == player1.name) {
				announce.innerText = `${player1.name} won!`;
			} else {
				announce.innerText = `${player2.name} won!`;
			}
			resetButton.innerText = "Reset game";
		}
	};

	return { calculateTurn, calculateWin };
})();

const Player = (name, piece) => {
	return { name, piece };
};

let player1;
let player2;

resetButton.addEventListener("click", (e) => {
	displayController.resetGame();
});

startButton.onclick = function () {
	player1 = Player(inputtedName.value, "O");
	player2 = Player(inputtedName2.value, "X");
	container.classList.remove("hidden");
	name1Div.classList.add("hidden");
	name2Div.classList.add("hidden");
	player1Display.innerText = `${player1.name}'s turn`;
	header.appendChild(player1Display);
	turn++;
	console.log(player1.name);
};
