import { redirect, signUp } from './lib/services/fetch-utils';

const signUpForm = document.getElementById('signUp');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userForm = new userForm(signUpForm);
    await signUp({
        email: userForm.get('email'),
        password: userForm.get('password'),
        firstName: userForm.get('first-name'), //USER TABLES?
        lastName: userForm.get('last-name')
    });
});


redirect();
