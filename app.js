//funtion

function scoring() {

	var ourAnswer = document.getElementById("answer").value;

	if (ourAnswer == compAnswer) {
		score++;
		document.getElementById("output").innerHTML = score;
		newCard();
	} else {
		score--;
		document.getElementById("output").innerHTML = score;
		newCard();
	}
}


function newCard() {

	/*	document.getElementById("answer").value = '';
		num1 = Math.floor(Math.random()*10)+1;
		num2 = Math.floor(Math.random()*10)+1;
		document.getElementById("header").innerHTML= num1 +"+" +num2;
		compAnswer = num1+num2;
	*/
	document.getElementById("answer").value = '';

	switch (Math.floor(Math.random() * 4) + 1) {
		case 1:
			num1 = Math.floor(Math.random() * 10) + 1;
			num2 = Math.floor(Math.random() * 10) + 1;
			document.getElementById("header").innerHTML = num1 + "+" + num2;
			compAnswer = num1 + num2;
			break;
		case 2:
			num1 = Math.floor(Math.random() * 10) + 1;
			num2 = Math.floor(Math.random() * 10) + 1;
			document.getElementById("header").innerHTML = num1 + "-" + num2;
			compAnswer = num1 - num2;
			break;
		case 3:
			num1 = Math.floor(Math.random() * 10) + 1;
			num2 = Math.floor(Math.random() * 10) + 1;
			document.getElementById("header").innerHTML = num1 + "x" + num2;
			compAnswer = num1 * num2;
			break;
		case 4:
			num1 = Math.floor(Math.random() * 10) + 1;       //divisor
			num2 = (Math.floor(Math.random() * 10) + 1)*num1;  //devidend
			document.getElementById("header").innerHTML = num2 + "/" + num1;
			compAnswer = num2 / num1;
			break;
	}

}

/*setTimeout(function () {
	alert("Score :" + document.getElementById("output").innerHTML);
}, 15000);*/



function SetFocus() {
	// safety check, make sure its a post 1999 browser
	if (!document.getElementById) {
		return;
	}

	var txtMyInputBoxElement = document.getElementById("answer");

	if (txtMyInputBoxElement != null) {
		txtMyInputBoxElement.focus();
	}
}

//function move progress bar
function move() {
	var elem = document.getElementById("myBar");
	var width = 0;
	var id = setInterval(frame, 100);

	function frame() {
		if (width == 100) {
			clearInterval(id);
			alert("Score :" + document.getElementById("output").innerHTML);
			location.reload();
		} else {
			width++;
			elem.style.width = width + '%';
		}
	}
}























