const forSubmissionButton = document.getElementById('formSubmissionButton');
const emailLabel = document.getElementById('emailLabel');
const firstName = document.querySelector('firstname')
const lastName = document.querySelector('lastname')
const email = document.getElementById('email')
const message = document.querySelector('message')
const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];
const emailError = document.querySelector(".email-error-container");



let errorMessages = []


forSubmissionButton.addEventListener('click', event => {
  event.preventDefault();
  modal.style.display = "block";
});

email.addEventListener('keyup', event => {
  event.preventDefault();
  let fullEmail = event.target.value;
  const validEmail = ValidateEmail(fullEmail)
  
  validEmail ? emailError.innerHTML = "" : emailError.innerHTML = "Please enter a valid email"
  validEmail ? emailLabel.style.color="green" : emailLabel.style.color="#9b0000"
  console.log(fullEmail)
  fullEmail === "" ? console.log("yeees") : console.log("noo")
  if(fullEmail === ""){
    emailLabel.style.color="black";
    emailError.innerHTML = ""
  }
});


function ValidateEmail(inputText){

  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validatedEmail = inputText.match(mailformat) ? true : false;
  return validatedEmail
}

close.addEventListener('click', event => {
  modal.style.display = "none";
});

// In case needed later
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}