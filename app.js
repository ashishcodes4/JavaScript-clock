document.body.onload = addElement;

function addElement (){
	
	// Create elements.
	
	var secondHand = document.createElement('div');
	var clockClass = document.createElement('div');
	var clockFace = document.createElement('div');
	var hourHand = document.createElement('div');
	var minHand = document.createElement('div');
	
	//Select the body element to add the above created ekements.

	var body = document.getElementById('body');

	//Add specific CSS class to the created elements using ClassList

	clockClass.classList.add('clock');
	clockFace.classList.add('clock-face');
	hourHand.classList.add('hand');
	hourHand.classList.add('hour-hand');
	minHand.classList.add('min-hand');
	minHand.classList.add('hand');
	secondHand.classList.add('second-hand')
	secondHand.classList.add('hand')

	//Add each element in their correct order and place.

	body.appendChild(clockClass);
	clockClass.appendChild(clockFace);
	clockFace.appendChild(hourHand);
	clockFace.appendChild(minHand);
	clockFace.appendChild(secondHand);
	
}

