const forSubmissionButton = document.getElementById('formSubmissionButton');
const emailLabel = document.getElementById('emailLabel');
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const message = document.getElementById('message')
const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];
const emailError = document.querySelector(".email-error-container");
const firstNameError = document.querySelector(".firstname-error-container");
const lastNameError = document.querySelector(".lastname-error-container");
const commentError = document.querySelector(".comment-error-container");



let userFeedback = {
  validInformation: false,
  errorMessages: []
};


// Object.freeze(userFeedback);

document.querySelectorAll('.input-form').forEach(item => {
  item.addEventListener('keyup', event => {
  
    const userData = validateUserInformation()


    if(userData.validInformation){
      forSubmissionButton.classList.remove('disabled-background')
      forSubmissionButton.classList.add('enabled-background')
      forSubmissionButton.disabled = false
      
    }else{
      forSubmissionButton.classList.remove('enabled-background')
      forSubmissionButton.classList.add('disabled-background')
      forSubmissionButton.disabled = true
    }
  })
})



forSubmissionButton.addEventListener('click', event => {
  event.preventDefault();
  const validateUserData = validateUserInformation()
  clearUserData()
  modal.style.display = "block";
});

email.addEventListener('keyup', event => {
  event.preventDefault();
  let fullEmail = event.target.value;
  const validEmail = ValidateEmail(fullEmail)
  
  validEmail ? emailError.innerHTML = "" : emailError.innerHTML = "Please enter a valid email"
  validEmail ? emailLabel.style.color="black" : emailLabel.style.color="#9b0000"
 
  if(fullEmail === ""){
    emailLabel.style.color="black";
    // emailError.innerHTML = ""
  }
});

firstName.addEventListener('keyup', event => {
  event.preventDefault();
  let fullFirstName = event.target.value;

  fullFirstName === "" ? firstNameError.innerHTML = "Please enter a first name" : firstNameError.innerHTML = "" 
  //validEmail ? emailLabel.style.color="black" : emailLabel.style.color="#9b0000"
 
});

lastName.addEventListener('keyup', event => {
  event.preventDefault();
  let fulLastName = event.target.value;
  fulLastName === "" ? lastNameError.innerHTML = "Please enter last name" : lastNameError.innerHTML = "" 
});

message.addEventListener('keyup', event => {
  event.preventDefault();
  let fullMessage = event.target.value;
  
  fullMessage === "" ? commentError.innerHTML = "Please enter a message" : commentError.innerHTML = "" 
  // validEmail ? message.style.color="black" : message.style.color="#9b0000"
 
  // if(fullEmail === ""){
  //   commentError.style.color="black";
  //   commentError.innerHTML = ""
  // }
});


function validateUserInformation(){

  const currentEmail = document.getElementById('email').value;
  userFeedback.errorMessages = []
  if(ValidateEmail(currentEmail) && firstName.value !== "" && lastName.value !== "" && message.value !== ""){
    userFeedback.validInformation = true;
    return userFeedback
  }else{
    userFeedback.validInformation = false;
    currentEmail  === "" || !ValidateEmail(currentEmail) ? userFeedback.errorMessages.push("Please enter a valid email.") : ""
    firstName.value === "" ? userFeedback.errorMessages.push("Empty first name provided.") : ""
    lastName.value === "" ? userFeedback.errorMessages.push("Empty last name provided.") : ""
    message.value === "" ? userFeedback.errorMessages.push("Empty message provided.") : ""
    return userFeedback
  }
}

function ValidateEmail(inputText){

  let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validatedEmail = inputText.match(mailformat) ? true : false;
  return validatedEmail
}

function clearUserData(){
  firstName.value = ""
  lastName.value = ""
  message.value = ""
  document.getElementById('email').value = ""
  forSubmissionButton.disabled = true
  forSubmissionButton.classList.remove('enabled-background')
  forSubmissionButton.classList.add('disabled-background')

}

close.addEventListener('click', event => {
  modal.style.display = "none";
});

// In case needed later
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }