//funtion

function addition(){
		
		var ourAnswer = document.getElementById("answer").value;
				
		if (ourAnswer==compAnswer){			
			score++;
			document.getElementById("output").innerHTML = score;
			newCard();
		}else {
			score--;
			document.getElementById("output").innerHTML = score;
			newCard();
}
}


function newCard(){
	
/*	document.getElementById("answer").value = '';
	num1 = Math.floor(Math.random()*10)+1;
	num2 = Math.floor(Math.random()*10)+1;
	document.getElementById("header").innerHTML= num1 +"+" +num2;
	compAnswer = num1+num2;
	SetFocus()*/
	
	ranOpr = Math.floor(Math.random()*4)+1;
	switch (compAnswer)
	case 1
	Addiditon:
	case 2 
	Subtract;
	break;
	case 3
	case 4
	
	
	
}

setTimeout(function(){ 
alert("Score :"+document.getElementById("output").innerHTML); }, 15000);



function SetFocus()
{
    // safety check, make sure its a post 1999 browser
    if (!document.getElementById)
    {
        return;
    }

    var txtMyInputBoxElement = document.getElementById("answer");

    if (txtMyInputBoxElement != null)
    {
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
	  alert("Score :"+document.getElementById("output").innerHTML);
	  location.reload();
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}





















		
	
