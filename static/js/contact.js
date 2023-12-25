window.addEventListener("beforeunload", function () {
  document.documentElement.scrollTop = 0;
});

function homefunc() {
  window.location.redirect('index.pug');
}
const nameid = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('text');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const textarea = document.querySelector('.mytextarea');

nameid.addEventListener('blur', () => {
  let str = nameid.value;
  const popover = document.querySelector(`.popover[data-field="name"]`);
  // Validate name here
  let regex = /^(?=.*[^\s])[a-zA-Z ]{1,31}$/;
  popover.textContent = nameid.getAttribute('data-error-message');
  popover.style.display = 'block';
  const inputBox = nameid.closest('.inputbox');
  if (regex.test(str)) {
    popover.textContent = '';
    popover.style.display = 'none';
    input1.style.borderBottomColor = 'white';
  }
  else{
    popover.style.left = '0';
    popover.style.top = inputBox.offsetHeight + 'px';
    input1.style.borderBottomColor = 'red';
  }
})
email.addEventListener('blur', () => {
  let str = email.value;
  const popover = document.querySelector(`.popover[data-field="email"]`);

  // Validate name here
  let regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  popover.textContent = email.getAttribute('data-error-message');
  popover.style.display = 'block';
  const inputBox = email.closest('.inputbox');
  if (regex.test(str)) {
    popover.textContent = '';
    popover.style.display = 'none';
    input2.style.borderBottomColor = 'white';
  }
  else {
    popover.style.left = '0';
    popover.style.top = inputBox.offsetHeight + 'px';
    input2.style.borderBottomColor = 'red';
  }
})
function mymessage(){
  let str = message.value;
  const popover = document.querySelector(`.popover[data-field="text"]`);
  // Validate name here
  let regex = /^\s*$/g;
  popover.textContent = message.getAttribute('data-error-message');
  popover.style.display = 'block';
  if (!regex.test(str)) {
    popover.textContent = '';
    popover.style.display = 'none';
    textarea.style.borderBottomColor = 'white';
  }
  else {
    popover.style.left = '10';
    popover.style.top = 'px';
    textarea.style.borderBottomColor = 'red';
  }
}

message.addEventListener('blur',mymessage);

const form = document.getElementById('contactform');

form.addEventListener('submit', (event) => {
  const nameValue = nameid.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value;
  const submitButton = document.querySelector('button[type="submit"]');

  // Validate each field
  if (!isValidName(nameValue)) {
    // Show error for name or prevent submission if name is invalid
    nameid.value = '';
    event.preventDefault();
  }
  else if (!isValidEmail(emailValue)) {
    // Show error for email or prevent submission if email is invalid
    email.value = '';
    event.preventDefault();
  }
  else if (isvalidmessage(messageValue)) {
    // Show error for message or prevent submission if message is empty
    event.preventDefault();
  }
  else{
    setTimeout(() => {
      form.submit();
    }, 3500);
    submitButton.textContent = 'Please wait...';
  }
});

function isValidName(name) {
  // Return true if the name is valid, false otherwise
  return /^([a-zA-Z ]){1,31}$/.test(name);
}

function isValidEmail(email) {
  // Return true if the email is valid, false otherwise
  return /^[^@]+@[^.]+\.[a-z]{2,}(?:\.[a-z]{2})?$/.test(email);
}
function isvalidmessage(msg) {
  return /^\s*$/g.test(msg);
}

document.addEventListener("DOMContentLoaded", function () {
  // Clear form fields on page load
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("text").value = "";
  document.querySelector('button[type="submit"]').textContent = 'Submit';
});