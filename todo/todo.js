import { logoutUser, checkIfSignedIn } from '../fetch-utils.js';

checkIfSignedIn();

const logout = document.getElementById('logout');

logout.addEventListener('click', async () => {
    await logoutUser();
});
