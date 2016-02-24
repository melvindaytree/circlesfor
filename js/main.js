function createStripe(textInside, stripeColor) {
	var newDiv = document.createElement('div');
	newDiv.classList.add('stripe');
	newDiv.classList.add(stripeColor);
	newDiv.innerHTML = textInside;
	document.getElementById('stripeholder').appendChild(newDiv);
}

for (var i = 1; i <= 40; i++) {
	var theClass = 'blue';
  if (i % 5 == 0) {
  theClass = 'green';

}

createStripe("Stripe #" + i, theClass);
}
