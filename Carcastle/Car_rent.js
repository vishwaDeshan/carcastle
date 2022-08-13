let searchForm = document.querySelector('.srch');
let signIn= document.querySelector('.sign-in');

document.querySelector('#srch-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () =>{
    signIn.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    
}