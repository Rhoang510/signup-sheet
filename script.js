const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector(".phoneError");
const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm-password");
const pwMsg = document.querySelector(".passwordError");
const pwMsg2 = document.querySelector(".confirmPasswordError");
const email = document.querySelector("#email");
const emailMsg = document.querySelector(".emailError");
const validFirstName = document.querySelector(".validFirstName");
const validLastName = document.querySelector(".validLastName");
const validEmail = document.querySelector(".validEmail");
const validPhone = document.querySelector(".validPhone");
const validPassword = document.querySelector(".validPassword");
const validConfirmPassword = document.querySelector(".validConfirmPassword");

firstName.addEventListener("input", () => {
    if(firstName.value.trim() !== "") {
        if(firstName.checkValidity() === true) {
            validFirstName.textContent = "✓";
        } else {
            validFirstName.textContent = "";
        }
    } else {
        validFirstName.textContent = ""
    }
});

lastName.addEventListener("input", () => {
    if(lastName.value.trim() !== "") {
        if(lastName.checkValidity() === true) {
            validLastName.textContent = "✓";
        } else {
            validLastName.textContent = "";
        }
    }   else {
        validLastName.textContent = ""
    }
});

email.addEventListener("input", () => {
    if(email.value.trim() !== "") {
        if(email.checkValidity() === false) {
            emailMsg.textContent = "* Please enter a valid email";
            validEmail.textContent = "";
        } else {
            emailMsg.textContent = "";
            validEmail.textContent = "✓";
        }
    } else {
        validEmail.textContent = "";
    }
});

phone.addEventListener("input", () => {
    if(phone.value.trim() !== "") {
        if(phone.checkValidity() === false) {
            validPhone.textContent = "";
            phoneError.textContent = "*Please enter 10 numbers";
        } else {
            validPhone.textContent = "✓";
            phoneError.textContent = "";
        }
    } else {
        validPhone.textContent = "";
    }
});

password1.addEventListener("input", () => {
    if(password1.value !==  "") {
        if(password1.checkValidity() === true) {
            pwMsg.textContent = "";
            validPassword.textContent = "✓";
        } else {
        pwMsg.textContent = "*Password must be 6 characters long, contains 1 uppercase and lowercase letter, and include 1 number";
        validPassword.textContent = "";
        }
    } else {
        pwMsg.textContent = "";
    }
});

password2.addEventListener("input", () => {
    if(password2.value !== "") {
        if(password1.value !== password2.value) {
            pwMsg2.textContent = "*Password doesn't match";
            validConfirmPassword.textContent = "";
        } else {
            pwMsg2.textContent = "";
            validConfirmPassword.textContent = "✓";
        }
    } else {
        pwMsg2.textContent = "";
        validConfirmPassword.textContent = "";
    }
});