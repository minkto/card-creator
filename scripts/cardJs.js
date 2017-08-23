/* Global variables which contain references to each input option via their names.*/
var titleInputBox = document.getElementsByName('cardtitle')[0];
var forenameInputBox = document.getElementsByName('forename')[0];
var surnameInputBox = document.getElementsByName('surname')[0];
var colorButton = document.getElementsByName('color')[0];
var fileInputButton = document.getElementsByName('file-name')[0];
var dateInput = document.getElementsByName('date-of-birth')[0]

var submitButton = document.getElementsByName('finish')[0];


/* This method helps to change the photo icon based on what is uploaded */
function changeImage() {
	// Gets the file selected from the prompt.
	var file = fileInputButton.files[0];
	// The regex for ensuring an image is selected.
	var imageType = 'image.*/'
	
	// The card photo element.
	var myPhoto = document.getElementById('card-photo');
	
   // Checks the file type is actually an image.	
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
	  


/*Changes the title of the card */
function changeCardTitle() {
	var textName = document.getElementsByTagName('h2')[0];
    textName.innerHTML = titleInputBox.value;
}


/* Change forename displayed on the card*/
function changeCardForename() {
	var textName = document.getElementsByClassName('card-label')[0];
	textName.textContent = "Forename:"
	textName.textContent += forenameInputBox.value;
}


/* Change the surname of the card selected.*/
function changeCardSurname() {
	var textName = document.getElementsByClassName('card-label')[1];
	textName.textContent = "Surname:"
	textName.textContent += surnameInputBox.value;
}

/* Change the date that is show on the card*/
function changeDate() {
	var textDate = document.getElementsByClassName('card-label')[2];
	textDate.textContent = "Date Of Birth:";
	textDate.textContent+= dateInput.value;
	
}

/* Change the color of the card.*/
function changeColor() {
	var cardColor = document.getElementsByClassName('card-container')[0];
	cardColor.style.backgroundColor = colorButton.value;
	//cardColor.style.backgroundColor = 'rgb('+255 +',' +255 + ',' + 255 +')'; 	
}

/* Change the orientation of the card selected.*/
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

/* This is where all the globalistener events are associatiated with that
 appropriate function.*/
forenameInputBox.oninput = changeCardForename;
surnameInputBox.oninput = changeCardSurname;
titleInputBox.oninput = changeCardTitle;
colorButton.onchange = changeColor;
fileInputButton.onchange = changeImage;
dateInput.oninput = changeDate;

