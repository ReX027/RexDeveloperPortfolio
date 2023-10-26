const nameid = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('text');

nameid.addEventListener('blur',()=>{
    let str = nameid.value; 
    const popover = document.querySelector(`.popover[data-field="name"]`);

    // Validate name here
    let regex = /^(?!.*\s\s)[A-Za-z]+(?: [A-Za-z]+)?$/;
    popover.textContent = nameid.getAttribute('data-error-message');
    popover.style.display = 'block';
    const inputBox = nameid.closest('.inputbox');
    if(regex.test(str)){
        popover.textContent = '';
        popover.style.display = 'none';
    }
    else{
        popover.style.left = '0';
        popover.style.top = inputBox.offsetHeight + 'px';
    }
})
email.addEventListener('blur',()=>{
    let str = email.value; 
    const popover = document.querySelector(`.popover[data-field="email"]`);

    // Validate name here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/;
    popover.textContent = email.getAttribute('data-error-message');
    popover.style.display = 'block';
    const inputBox = email.closest('.inputbox');
    if(regex.test(str)){
        popover.textContent = '';
        popover.style.display = 'none';
    }
    else{
        popover.style.left = '0';
        popover.style.top = inputBox.offsetHeight + 'px';
    }
})
message.addEventListener('blur',()=>{
    let str = message.value; 
    const popover = document.querySelector(`.popover[data-field="text"]`);

    // Validate name here
    popover.textContent = message.getAttribute('data-error-message');
    popover.style.display = 'block';
    const inputBox = message.closest('.inputbox');
    if(str != ''){
        popover.textContent = '';
        popover.style.display = 'none';
    }
    else{
        popover.style.left = '10';
        popover.style.top ='px';
    }
})

const form = document.getElementById('contactform');

form.addEventListener('submit',(event) => {
  const nameValue = nameid.value;
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const submitButton = document.querySelector('button[type="submit"]');

  event.preventDefault();
  // Validate each field
  if (nameValue === '' || !isValidName(nameValue)) {
    // Show error for name or prevent submission if name is invalid
    nameid.value = '';
    event.preventDefault();
  }
  else if (emailValue === '' || !isValidEmail(emailValue)) {
    // Show error for email or prevent submission if email is invalid
    email.value = '';
    event.preventDefault();
  }
   else if (messageValue === '') {
    // Show error for message or prevent submission if message is empty
    message.value = '';
    event.preventDefault();
  }
  else {
    submitButton.textContent = 'Please wait...';
    setTimeout(() => {
        form.submit();
      },1500);
  }
});

function isValidName(name) {
  // Return true if the name is valid, false otherwise
  return /^(?!.*\s\s)[A-Za-z]+(?: [A-Za-z]+)?$/.test(name);
}

function isValidEmail(email) {
  // Return true if the email is valid, false otherwise
  return /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
    // Clear form fields on page load
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
  });