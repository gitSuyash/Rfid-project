
var usernames = [];
    var passwords = [];
    var signup = () => {
        var signupname = document.getElementById('signName').value;
        var signuppass = document.getElementById('signPass').value;
        usernames.push(signupname);
        passwords.push(signuppass);
        console.log(`${usernames},${passwords}`);
        
	    }