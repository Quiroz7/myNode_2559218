const expresionEmail = 	/^([0-9]*[a-z]*)\@[a-z]*\.[a-z]*$/
const expresionPassword = /^[0-9]{3}[a-zA-Z]{3}$/

const form = document.querySelector('#login-form');


form.addEventListener('submit' , e => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    try{
        if(email == '' || pass == ''){
            throw 'No se admiten campos vacíos';
        }
        if(!expresionEmail.test(email)){
            throw 'Email no cumple con el formato';
        }
        if(!expresionPassword.test(pass)){
            throw 'Password no cumple con el formato';
        }

        alert('INICIASTE SESIÓN');

    }catch(error){
        alert('ERROR' + error);

    }
})