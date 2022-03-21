function massage()
{ 
document.getElementById('h1_js').style.color = "#FF324D";
}
function massage_2()
{
	document.getElementById('h1_js').style.color = "#687188";
}
function validation() {
	var user = document.getElementById('name').value;
	if(user == "") {
		document.getElementById('name_span').innerHTML = "Please Fill The Blank";
		return false;
	}
	if((user.length<=4) || (user.length>=12)) {
		document.getElementById('name_span').innerHTML = "Please Enter Correct Name";
		return false;
	}


	var user_2 = document.getElementById('email').value;
	if(user_2 == "") {
		document.getElementById('email_span').innerHTML = "Enter Your Email Address";
		return false;
	}



	var user_3 = document.getElementById('subject').value;
	if(user_3 == "") {
		document.getElementById('sub_span').innerHTML = "Please Fill The Blank";
		return false;
	}

	
}