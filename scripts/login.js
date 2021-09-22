function validate() {
	var username=document.getElementById("floatingInput").value;
	var password=document.getElementById("floatingPassword").value;

	if (username == "admin@gmail.com" && password == "admin") {
		alert("login succesfully");
    	window.open("https://my.newtonschool.co/dashboard/");
	} 
	else {
		alert("login failed");
	}
}