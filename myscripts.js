function feedback_sent() {
	document.getElementById('feedback').innerHTML = 'Feedback sent successfully'
}

function registered() {
	document.getElementById('registered').innerHTML = 'Registered: yes'
	document.getElementById('registered').style.color = 'lightgreen'
	document.getElementById('registered').style.fontSize = '22px'
}

window.onload = function () {
	var date = new Date()
	document.getElementById('date').innerHTML = date.getFullYear()
}

function validateForm() {
	var x = document.forms['confirm']['code'].value

	if (x != '') {
		if (x == '10010') {
			alert('Your registration approved!')
		} else if (x == '1010') {
			alert('Pay more attention, the code is incorrect.')
		} else {
			alert('Sorry, your registration will not be taken into account.')
		}
	} else {
		alert('You have not entered anything in the verification field.')
	}
}

function performOp() {
	var y = document.forms['practice']['number'].value
	var changedY = +y * 256

	if (changedY == 512) {
		alert('The number is correct! It is ' + changedY)
	} else {
		alert('Wrong number...')
	}
}

function donate() {
	var donation_amount = document.forms['donation']['number'].value
	var total_donation = +donation_amount * 100
	alert('You are ready to donate $' + total_donation + ', thank you!')
}

window.alert('Welcome to the register page!')
