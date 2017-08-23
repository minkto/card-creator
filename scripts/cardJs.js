var titleInputBox = document.getElementsByName('cardtitle')[0];
var forenameInputBox = document.getElementsByName('forename')[0];
var surnameInputBox = document.getElementsByName('surname')[0];
var colorButton = document.getElementsByName('color')[0];
var fileInputButton = document.getElementsByName('file-name')[0];
var dateInput = document.getElementsByName('date-of-birth')[0]

var submitButton = document.getElementsByName('enter')[0];


function changeImage() {
	var file = fileInputButton.files[0];
	var imageType = 'image.*/'
	var myPhoto = document.getElementById('card-photo');
		
	if(file.type.match(imageType)) {
	
	    var fileReader = new FileReader();
	    fileReader.onload = function () {
		    var URLImage = fileReader.result;
		    myPhoto.src = URLImage;
		
	    }
	} else {
		console.log("Wrong format!");
	}
	fileReader.readAsDataURL(file);
}
	  



function changeCardTitle() {
	var textName = document.getElementsByTagName('h2')[0];
    textName.innerHTML = titleInputBox.value;
}


function changeCardForename() {
	var textName = document.getElementsByClassName('card-label')[0];
	textName.textContent = "Forename:"
	textName.textContent += forenameInputBox.value;
}



function changeCardSurname() {
	var textName = document.getElementsByClassName('card-label')[1];
	textName.textContent = "Surname:"
	textName.textContent += surnameInputBox.value;
}

function changeDate() {
	var textDate = document.getElementsByClassName('card-label')[2];
	textDate.textContent = "Date Of Birth:";
	textDate.textContent+= dateInput.value;
	
}

function changeColor() {
	var cardColor = document.getElementsByClassName('card-container')[0];
	cardColor.style.backgroundColor = colorButton.value;
	//cardColor.style.backgroundColor = 'rgb('+255 +',' +255 + ',' + 255 +')'; 	
}

function changeCardOrientation() {
	var currentCss = document.getElementsByTagName('link')[0];
	
	
	
	switch(currentCss.getAttribute('href')) {
		case 'styles/card-horizontal.css':
			currentCss.setAttribute('href','styles/card-vertical.css');
			break;
		case 'styles/card-vertical.css':
			currentCss.setAttribute('href','styles/card-horizontal.css');
			break;
	}
	
}

forenameInputBox.oninput = changeCardForename;
surnameInputBox.oninput = changeCardSurname;
titleInputBox.oninput = changeCardTitle;
colorButton.onchange = changeColor;
fileInputButton.onchange = changeImage;
dateInput.oninput = changeDate;

