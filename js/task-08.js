const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitEvent);

const userProfile = {};

function submitEvent(event){

    const email = event.target.email;
    const password = event.target.password;

    if (email.value == '' || password.value == '') {
        alert('Please fill in all fields');
    }
    else {
        userProfile.email = email.value;
        userProfile.password = password.value;

        console.log(userProfile);
        event.preventDefault();
    }
}

