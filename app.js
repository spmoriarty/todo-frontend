import { redirect, signUp } from './lib/services/fetch-utils';

const signUpForm = document.getElementById('signUp');

// user serivce on BE needs to match for FE form variables


signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userForm = new FormData(signUpForm);
    await signUp({
        email: userForm.get('email'),
        password: userForm.get('password'),
        firstName: userForm.get('first-name'), //USER TABLES?
        lastName: userForm.get('last-name')
    });
});


redirect();
