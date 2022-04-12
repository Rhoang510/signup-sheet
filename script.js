const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const phone = document.querySelector("#phone");
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

// validFirstName.addEventListener("keyup", () => {
//     if()
// })

firstName.addEventListener("keyup", () => {
    if(firstName.value !== "") {
        if(firstName.checkValidity() === false) {
            validFirstName.textContent = "";
        } else {
            validFirstName.textContent = "✓";
        }
    }
});

email.addEventListener("keyup", () => {
    if(email.value !== "") {
        if(email.checkValidity() === false) {
            emailMsg.textContent = "* Please enter a valid email";
            validEmail.textContent = "";
        } else {
            emailMsg.textContent = "";
            validEmail.textContent = "✓";
        }
    }
});

password1.addEventListener("keyup", () => {
    if(password1.value ==  "") {
        pwMsg.textContent = "*Please enter in password"
    }
});