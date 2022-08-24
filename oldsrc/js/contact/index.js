const form = document.getElementById('contact-form');

form.onsubmit = function (e) {
	e.preventDefault();
	const message = document.getElementById('contact-message');
	if (/^\s*$/.test(message.value)) {
		alert('Please enter a message.');
	} else {
		form.reset(); //pseudo form submission
		alert('Thank you for your message!');
	}
};
