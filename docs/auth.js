//get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');


btnLogin.addEventListener('click', e=> {

    const email = txtEmail.value;
    const passwd = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, passwd);
    promise.catch(e=> console.log("Error: ", e.message))
})