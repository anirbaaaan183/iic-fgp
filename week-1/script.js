// Display Elements
const password_display = document.getElementById("password-text");
const password_length_display = document.getElementById("pass-length-text");

// Input Elements
const length_slider = document.getElementById("pass-length-slider");
const symbol_checkbox = document.getElementById("symbol-checkbox");
const number_checkbox = document.getElementById("numbers-checkbox");

// Buttons
const copy_button = document.getElementById("copy-button");
const generate_button = document.getElementById("generate-button");

// Initalize Default Values
let password = "";
let password_length = 8;
let should_use_symbols = false;
let should_use_numbers = true;

password_display.textContent = "Password Generates Here";
password_length_display.textContent = password_length;
length_slider.value = password_length;
symbol_checkbox.checked = should_use_symbols;
number_checkbox.checked = should_use_numbers;

// Input Change Handlers
length_slider.oninput = function() {
	password_length = length_slider.value;
	password_length_display.textContent = password_length;
}

symbol_checkbox.addEventListener("change", function() {
	should_use_symbols = this.checked;
});

number_checkbox.addEventListener("change", function() {
	should_use_numbers = this.checked;
});

copy_button.onclick = function() {
	navigator.clipboard.writeText(password);
	alert("Copied the text: " + password);
}

generate_button.onclick = function() {
	generate_password();
	password_display.textContent = password;
}

// Generate Password
const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "\\", "|", ":", ";", "'", "\"", "<", ",", ">", ".", "?", "/"];
const generate_password = function() {
	let characters = alphabets;
	if (should_use_numbers) characters = characters.concat(numbers);
	if (should_use_symbols) characters = characters.concat(symbols);

	password = "";
	for (let i = 0; i < password_length; i++) {
		const character = characters[Math.floor(Math.random() * characters.length)];
		password = password + character;
	}
}
