function makeid(l) {
  // write your code here
	let randomNumber = Math.floor(Math.random() * l+1);
	return randomNumber;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
