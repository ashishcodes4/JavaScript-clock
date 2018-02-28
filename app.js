document.body.onload = addElement;

function addElement (){
	var secondHand = document.createElement('div');
	var clockClass = document.createElement('div');
	var clockFace = document.createElement('div');
	var hourHand = document.createElement('div');
	var minHand = document.createElement('div');
	var body = document.getElementById('body');

	clockClass.classList.add('clock');
	clockFace.classList.add('clock-face');
	hourHand.classList.add('hand');
	hourHand.classList.add('hour-hand');
	minHand.classList.add('min-hand');
	minHand.classList.add('hand');
	secondHand.classList.add('second-hand')
	secondHand.classList.add('hand')


	body.appendChild(clockClass);
	clockClass.appendChild(clockFace);
	clockFace.appendChild(hourHand);
	clockFace.appendChild(minHand);
	clockFace.appendChild(secondHand);
	console.log(body);
	console.log(clockFace);
}

