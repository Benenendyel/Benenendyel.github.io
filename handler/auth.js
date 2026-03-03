const signupInput = document.getElementById("signup-input");
const signupLabel = document.getElementById("signup-input-label");
const continueSignUpButton = document.getElementById("continue-signup-button");

const signupFirstName = document.getElementById("signup-firstname-input");
const signupFirstNameLabel = document.getElementById(
  "signup-firstname-input-label",
);

const signupLastName = document.getElementById("signup-lastname-input");
const signupLastNameLabel = document.getElementById(
  "signup-lastname-input-label",
);

const fullNameButton = document.getElementById("fullname-continue-button");

const signinInput = document.getElementById("signin-input");
const signinLabel = document.getElementById("signin-input-label");
const continueSignInButton = document.querySelector(".continue-signin-button");

const emailTypes = [
  "@gmail.com",
  "@yahoo.com",
  "@hotmail.com",
  "@concentrix.com",
];

function checkFirstNameInput() {
  const value = signupFirstName.value.trim();
  handleFirstNameInputLabel(value);
  validateFullName();
}

function checkLastNameInput() {
  const value = signupLastName.value.trim();
  handleLastNameInputLabel(value);
  validateFullName();
}

function handleFirstNameInputLabel(value) {
  if (value !== "") {
    signupFirstNameLabel.classList.add("active");
  } else {
    signupFirstNameLabel.classList.remove("active");
  }
}

function handleLastNameInputLabel(value) {
  if (value !== "") {
    signupLastNameLabel.classList.add("active");
  } else {
    signupLastNameLabel.classList.remove("active");
  }
}

function validateFullName() {
  const first = signupFirstName.value.trim();
  const last = signupLastName.value.trim();

  if (first !== "" && last !== "") {
    enableFullNameContinue();
  } else {
    disableFullNameContinue();
  }
}

function checkSignupInput() {
  const value = signupInput.value.trim();
  handleSignupLabel(value);
  validateSignupEmail(value);
}

function checkSigninInput() {
  const value = signinInput.value.trim();
  handleSigninLabel(value);
  validateSigninEmail(value);
}

function handleSignupLabel(value) {
  if (value !== "") {
    signupLabel.classList.add("active");
  } else {
    signupLabel.classList.remove("active");
  }
}

function handleSigninLabel(value) {
  if (value !== "") {
    signinLabel.classList.add("active");
  } else {
    signinLabel.classList.remove("active");
  }
}

function validateSignupEmail(value) {
  let isValid = false;

  for (let i = 0; i < emailTypes.length; i++) {
    if (value.endsWith(emailTypes[i])) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    enableSignupContinue();
  } else {
    disableSignupContinue();
  }
}

function validateSigninEmail(value) {
  let isValid = false;

  for (let i = 0; i < emailTypes.length; i++) {
    if (value.endsWith(emailTypes[i])) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    enableSigninContinue();
  } else {
    disableSigninContinue();
  }
}

function enableFullNameContinue() {
  fullNameButton.style.cursor = "pointer";
  fullNameButton.style.backgroundColor = "#8864b3";
  fullNameButton.style.color = "#FFFFFF";
  fullNameButton.setAttribute("href", "#signup-fullname-section");
}

function disableFullNameContinue() {
  fullNameButton.style.backgroundColor = "#242424";
  fullNameButton.style.color = "#525252";
  fullNameButton.removeAttribute("href");
  fullNameButton.style.cursor = "default";
}

function enableSignupContinue() {
  continueSignUpButton.style.cursor = "pointer";
  continueSignUpButton.style.backgroundColor = "#8864b3";
  continueSignUpButton.style.color = "#FFFFFF";
  continueSignUpButton.setAttribute("href", "#signup-fullname-section");
}

function disableSignupContinue() {
  continueSignUpButton.style.backgroundColor = "#242424";
  continueSignUpButton.style.color = "#525252";
  continueSignUpButton.removeAttribute("href");
  continueSignUpButton.style.cursor = "default";
}

function enableSigninContinue() {
  continueSignInButton.style.cursor = "pointer";
  continueSignInButton.style.backgroundColor = "#8864b3";
  continueSignInButton.style.color = "#FFFFFF";
  continueSignInButton.setAttribute("href", "#next-page");
}

function disableSigninContinue() {
  continueSignInButton.style.backgroundColor = "#242424";
  continueSignInButton.style.color = "#525252";
  continueSignInButton.removeAttribute("href");
  continueSignInButton.style.cursor = "default";
}

function resetAuthInputs() {
  // Reset signup
  signupInput.value = "";
  signupLabel.classList.remove("active");
  disableSignupContinue();

  // Reset signin
  signinInput.value = "";
  signinLabel.classList.remove("active");
  disableSigninContinue();

  // Reset fist name
  signupFirstName.value = "";
  signupFirstNameLabel.classList.remove("active");

  // Reset last name
  signupLastName.value = "";
  signupLastNameLabel.classList.remove("active");
  disableFullNameContinue();
}

window.resetAuthInputs = resetAuthInputs;

signupInput.addEventListener("input", checkSignupInput);
signinInput.addEventListener("input", checkSigninInput);
signupFirstName.addEventListener("input", checkFirstNameInput);
signupLastName.addEventListener("input", checkLastNameInput);
