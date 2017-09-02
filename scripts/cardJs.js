
// The submit button
var submitButton = document.getElementsByName('finish')[0];

/* This is the card object */
 var card = {
	 title:function() {
        var titleInputBox = document.getElementsByName('cardtitle')[0];
		var textName = document.getElementsByTagName('h2')[0];
		var theTitle = titleInputBox.value;
        textName.innerHTML = theTitle;
		return theTitle;
	 },
	 forename:function() {
		var forenameInputBox = document.getElementsByName('forename')[0];
		var textName = document.getElementsByClassName('card-label')[0];
		var theForename = forenameInputBox.value;
		textName.textContent = "Forename:" + theForename;
		return theForename;
		
	 },
	 surname:function() {
		var surnameInputBox = document.getElementsByName('surname')[0];
		var textName = document.getElementsByClassName('card-label')[1];
		var theSurname = surnameInputBox.value;
		textName.textContent = "Surname:" + theSurname;
		return theSurname;
		
	 },
	 birth:function() {
		var dateInput = document.getElementsByName('date-of-birth')[0];
		var textDate = document.getElementsByClassName('card-label')[2];
		var theDate =  dateInput.value;
		textDate.textContent = "Date Of Birth:" + theDate;
		return theDate;
		
	 },
	 picture:function() {
		var fileInputButton = document.getElementsByName('file-name')[0];
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
	 },
	 
	 foreground:function() {
		var colorButton = document.getElementsByName('color')[0];
		var cardColor = document.getElementsByClassName('card-container')[0];
		cardColor.style.backgroundColor = colorButton.value;
	 }
 
 };
 
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



 // Once finalised press the submit button to make the changes.
 submitButton.addEventListener("click", function() {
	 card.title();
	 card.forename();
	 card.surname();
	 card.birth();
	 card.picture();
	 card.foreground();
	} ,false);