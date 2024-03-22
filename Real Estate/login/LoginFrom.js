
// logic for create new account
const NewPassContainer = document.getElementById("NewPassContainer");
const SpanNewName = document.getElementById("SpanNewName");
const SpanNewPass = document.getElementById("SpanNewPass");
const SpanNewPass2 = document.getElementById("SpanNewPass2");
const LoginBtn = document.getElementById("LoginBtn");

const Spans = document.querySelectorAll("span");


const SpanName = document.getElementById("SpanName");
const SpanPass = document.getElementById("SpanPass");

const NewAcc = document.getElementById("NewAcc");
const HaveAcc = document.getElementById("HaveAcc");

function CreateNewAcc(){
  
  NewPassContainer.classList.toggle("disable");
  SpanNewName.classList.toggle("disable");
  SpanNewPass.classList.toggle("disable");
  
  
  SpanName.classList.toggle("disable");
  SpanPass.classList.toggle("disable");
  
  NewAcc.classList.toggle("disable");
  HaveAcc.classList.toggle("disable");

  LoginBtn.innerHTML="Sign up";
  
  
}




// logic to show and hide span tags

// Assuming these are your existing IDs and classes
const inputName = document.getElementById('inputName');
const inputPass = document.getElementById('inputPass');
const inputNewPass = document.getElementById('inputNewPass');

const spanName = document.getElementById('SpanName');
const spanNewName = document.getElementById('SpanNewName');
const spanPass = document.getElementById('SpanPass');
const spanNewPass = document.getElementById('SpanNewPass');
const spanNewPass2 = document.getElementById('SpanNewPass2');

// Initially hide the new span tags for username and password
spanNewName.style.display = 'none';
spanNewPass.style.display = 'none';

// Event listener for Create Account link
document.getElementById('NewAcc').addEventListener('mousedown', function() {
  // Show and disable new span tags for username and password
  spanNewName.style.display = '';
  spanNewName.classList.add('disable');

  spanNewPass.style.display = '';
  spanNewPass.classList.add('disable');
});

// Event listeners for input fields
inputName.addEventListener('input', function() {
  // No action on input event
});

inputName.addEventListener('blur', function() {
  if (inputName.value === '' && !document.getElementById('NewAcc').classList.contains('disable')) {
    spanName.classList.remove('disable'); // Remove 'disable' class
  } else {
    spanName.classList.add('disable'); // Add 'disable' class
  }
});

inputName.addEventListener('focus', function() {
  spanName.classList.remove('disable'); // Remove 'disable' class on focus
});

inputPass.addEventListener('input', function() {
  // No action on input event
});

inputPass.addEventListener('blur', function() {
  if (inputPass.value === '' && !document.getElementById('NewAcc').classList.contains('disable')) {
    spanPass.classList.remove('disable'); // Remove 'disable' class
  } else {
    spanPass.classList.add('disable'); // Add 'disable' class
  }
});

inputPass.addEventListener('focus', function() {
  spanPass.classList.remove('disable'); // Remove 'disable' class on focus
});

inputNewPass.addEventListener('input', function() {
  // No action on input event
});

inputNewPass.addEventListener('blur', function() {
  if (inputNewPass.value === '' && !document.getElementById('NewAcc').classList.contains('disable')) {
    spanNewPass2.classList.remove('disable'); // Remove 'disable' class
  } else {
    spanNewPass2.classList.add('disable'); // Add 'disable' class
  }
});

inputNewPass.addEventListener('focus', function() {
  spanNewPass2.classList.remove('disable'); // Remove 'disable' class on focus
});





// Login btn / sign up btn logic


function showAlert() {
  if( LoginBtn.innerHTML=="Sign up"){
    
    alert('You Sign up successfully');
  }else{
    alert('You logined successfully');
    
  }
}



