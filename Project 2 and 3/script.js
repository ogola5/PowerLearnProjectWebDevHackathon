var defaut_user = 'Group5'
var default_pass = 'group5'
var default_email = 'group5@email.com'

const form = document.querySelector("form");
usernameField = form.querySelector(".username");
confirmPassField = form.querySelector(".confirm-password");
emailField = form.querySelector(".email");
passwordField = form.querySelector(".password");



usernameInput = usernameField.querySelector("input");
confirmPassInput = confirmPassField.querySelector("input");
emailInput = emailField.querySelector("input");
passwordInput = passwordField.querySelector("input");


form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    //if email and password is blank then add shake class in it else call specified function
    (usernameInput.value == "") ? usernameField.classList.add("shake", "error") : checkUsername();
    (confirmPassInput.value == "") ? confirmPassField.classList.add("shake", "error") : checkConfirmPass();
    (emailInput.value == "") ? emailField.classList.add("shake", "error") : checkEmail();
    (passwordInput.value == "") ? passwordField.classList.add("shake", "error") : checkPass();

    
    setTimeout(()=>{//remove shake class after 500ms
        usernameField.classList.remove("shake");
        confirmPassField.classList.remove("shake");
        emailField.classList.remove("shake");
        passwordField.classList.remove("shake");
    }, 500);

    usernameInput.onkeyup = ()=>{checkUsername();} //calling checkUsername function on FirstName input keyup
    confirmPassInput.onkeyup = ()=>{checkConfirmPass();} //calling checkConfirmPass function on LastName input keyup
    emailInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
    passwordInput.onkeyup = ()=>{checkPass();} //calling checkPass function on Pass input keyup

    function checkUsername(){ //checkUsername function
        if(usernameInput.value == ""){ //if firstName is empty then add error and remove valid class
          usernameField.classList.add("error");
          usernameField.classList.remove("valid");
        }else{ //if firstName is empty then remove error and add valid class
          usernameField.classList.remove("error");
          usernameField.classList.add("valid");
        }
    }

    function checkConfirmPass(){ //checkConfirmPass function
        if(confirmPassInput.value == ""){ //if lastName is empty then add error and remove valid class
          confirmPassField.classList.add("error");
          confirmPassField.classList.remove("valid");
        }else{ //if lastName is empty then remove error and add valid class
          confirmPassField.classList.remove("error");
          confirmPassField.classList.add("valid");
        }
    }

    function checkEmail(){ //checkEmail function
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
        if(!emailInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
          emailField.classList.add("error");
          emailField.classList.remove("valid");
          let errorTxt = emailField.querySelector(".error-txt");
          //if email value is not empty then show please enter valid email else show Email can't be blank
          (emailField.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        }else{ //if pattern matched then remove error and add valid class
          emailField.classList.remove("error");
          emailField.classList.add("valid");
        }
      }

      function checkPass(){ //checkPass function
        if(passwordInput.value == ""){ //if pass is empty then add error and remove valid class
          
          passwordField.classList.add("error");
          passwordField.classList.remove("valid");
        }else{ //if pass is empty then remove error and add valid class
          passwordField.classList.remove("error");
          passwordField.classList.add("valid"); 
        }
      }

      if (passwordInput.value !== confirmPassInput.value){
        confirmPassField.classList.add("shake", "error");
        confirmPassField.classList.remove("valid");
        console.log("Not equal")
      }else{
        confirmPassField.classList.remove("shake", "error");
        confirmPassField.classList.add("valid");
        console.log('Equal')
      }


      //if emailField and passwordField doesn't contains error class that mean user filled details properly
      if(!usernameField.classList.contains("error") && !confirmPassField.classList.contains("error") && !emailField.classList.contains("error") && !passwordField.classList.contains("error")){
        window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
        // console.log(window.location.href)
        if (passwordInput.value !== default_pass) {
          if (emailInput.value !== default_email){
            if (usernameInput.value !== defaut_user) {
              alert("User does not exit")
            }
          }

        } else{
    
        alert('Login Successful');
        location.href = 'todo.html';
    }
}
}

