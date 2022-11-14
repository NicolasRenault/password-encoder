import './style.css'

const input = document.getElementById("input-password");
const button = document.getElementById("validate-button");
const textOutput = document.getElementById("simple-text");
const nbMove = 63;

button.addEventListener("click", moveCharUnicode);

function moveCharUnicode() {
	const value = input.value.trim();

	input.classList.remove("blinkGreen");
	textOutput.classList.remove("blinkGreen");
	textOutput.classList.remove("blinkRed");

	if (value == null || value == "") {
		input.value = "";
		textOutput.innerHTML = "";
		return;
	}

	let text = "";

	for (var i = 0; i < value.length; i++) {
		let charCode = value.charCodeAt(i) + nbMove;

		if (charCode > 33 + nbMove) {
		charCode = (charCode % 63) + 33;
		}

		text = String.fromCharCode(charCode) + text;
	}

	input.value = text;
	input.focus();
	input.select();

	//Copy to the clipboard
	navigator.clipboard
		.writeText(text)
		.then(() => {
			console.log("Text copied to clipboard...");
			textOutput.innerHTML = "Text copied to clipboard !";
			textOutput.classList.add("blinkGreen");
			input.classList.add("blinkGreen");
		})
		.catch((err) => {
			console.log("Something went wrong", err);
			textOutput.innerHTML = "Something went wrong: " + err;
			textOutput.classList.add("blinkRed");
			if (value != null || value != "") {
				input.classList.add("blinkGreen");
				textOutput.innerHTML = "The password has been genereated but " + textOutput.innerHTML
			} else {
				input.classList.add("blinkRed");
			}
		});
}