function testUsername (username){
    if(username.length > 12 || username.length < 4){
        return false;
    }
    for (let i = 0; i < username.length; i++) {
        if(/[a-z]/.test(username[i])){
            continue;
        } else if(isNaN(parseInt(username[i]))){
            return false
        }
    }
    return true 
}

function testEmail (email){
    if(email.includes("@") && (email.substr(email.length - 4).includes(".com") || email.substr(email.length - 4).includes(".net") || email.substr(email.length - 4).includes(".org") || email.substr(email.length - 4).includes(".edu"))){
        return true;
    } else {
        return false; 
    }
}

function testPhone (phone){
    if(!(phone.length == 12)){
        return false; 
    }else if(isNaN(phone.substring(0,3)) || isNaN(phone.substring(4,7)) || isNaN(phone.substr(8,12))){
        return false; 
    } else if(phone.substring(3,4) == "-" && phone.substring(7,8) == "-"){
        return true;
    } else{
        return false;
    }
}

function testPassword (password){
    upper = false; 
    lower = false; 
    num = false;
    special = false;
    for (let i = 0; i < password.length; i++) {
        if(/[A-Z]/.test(password[i])){
            upper = true;
        }else if(/[a-z]/.test(password[i])){
            lower = true;
        }else if(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password[i])){
            special = true;
        }else if(!(isNaN(password[i]))){
            num = true;
        }
        if(upper && lower && num && special){
            return true
        }
    }
    return false 
    
}


function validation(form){
    document.getElementById("errors").innerHTML = " ";
    if(form.username.value == ""){
        let newcontent = document.createElement('div');
        newcontent.innerHTML = '<p>Please Enter <span style="color:red">Username</span></p>';
        document.getElementById("errors").appendChild(newcontent.firstChild);
    } else if (!testUsername(form.username.value)){
        let newcontent = document.createElement('div');
        newcontent.innerHTML = '<p>Please Enter <span style="color:orange">A valid Username</span></p>';
        document.getElementById("errors").appendChild(newcontent.firstChild);
    }

    if(form.email.value == ""){
        let newcontent = document.createElement('div');
        newcontent.innerHTML = '<p>Please Enter <span style="color:red">Email</span></p>';
        document.getElementById("errors").appendChild(newcontent.firstChild);
    } else if (!testEmail(form.email.value)){
        let newcontent = document.createElement('div');
        newcontent.innerHTML = '<p>Please Enter <span style="color:orange">A valid Email</span></p>';
        document.getElementById("errors").appendChild(newcontent.firstChild);
    }

    if(form.phone.value == ""){
        let newcontent = document.createElement('div');
        newcontent.innerHTML = '<p>Please Enter <span style="color:red">Phone Number</span></p>';
        document.getElementById("errors").appendChild(newcontent.firstChild);
    } else if (!testPhone(form.phone.value)){
            let newcontent = document.createElement('div');
            newcontent.innerHTML = '<p>Please Enter <span style="color:orange">A valid Phone Number</span></p>';
            document.getElementById("errors").appendChild(newcontent.firstChild);
    }

    // if(form.password.value == ""){
    //     let newcontent = document.createElement('div');
    //     newcontent.innerHTML = '<p>Please Enter <span style="color:red">Password</span></p>';
    //     document.getElementById("errors").appendChild(newcontent.firstChild);
    // } else if (!testPassword(form.password.value)){
    //         let newcontent = document.createElement('div');
    //         newcontent.innerHTML = '<p>Please Enter <span style="color:orange">A valid Password</span></p>';
    //         document.getElementById("errors").appendChild(newcontent.firstChild);
    // }

    return false; 
}