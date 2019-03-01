 var globalName = '';
    var globalPass = '';
    var usernames = [];
    var passwords = [];
    var signup = () => {
        var signupname = document.getElementById('signName').value;
        globalName = signupname;
        var signuppass = document.getElementById('signPass').value;
        globalPass = signuppass
        usernames.push(signupname);
        passwords.push(signuppass);
        console.log(`${usernames},${passwords}`);

    }
    var i;

    var login = () => {
        // var flag=0;
        var loginName = document.getElementById('logName').value;
        var loginPass = document.getElementById('logPass').value;
        console.log(`${loginName}`);
        console.log(`${usernames}`)
        for (i = 0; i < usernames.length; i++) {
            if (usernames[i] == loginName && passwords[i] == loginPass) {
                // flag++;
                window.open('test.html');
            } else {
                alert('not a valid user');
            }
        }
    }