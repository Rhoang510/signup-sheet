const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm-password");
const pwMsg = document.querySelector(".password");
const pwMsg2 = document.querySelector(".confirm-password");

function checkPassword() {
    if(password1.value == "") {
        pwMsg.textContent = "* Please enter password";
    } else if(password2 == "") {
        pwMsg2.textContent = "Please confirm password";
    } else if(password1 != password2) {
        pwMsg2.textContent = "\nPassword did not match. Please try again."
        return false;
    } else {
        pwMsg2.textContent = "Confirmed";
        return true;
    }
}

password1.addEventListener("keydown", checkPassword());
password2.addEventListener("keydown", checkPassword())