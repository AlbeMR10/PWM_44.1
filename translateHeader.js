const activateSpanish = document.getElementById('languageButtonEsp');
const activateEnglish = document.getElementById('languageButtonEng');
const aboutUs = document.getElementById('aboutUsLink');
const indexLink = document.getElementById('indexLink');
const sportsDropdownButton = document.getElementById('sportsDropdownButton');
const esportsDropdownButton = document.getElementById('esportsDropdownButton');
const basketballLink = document.getElementById('basketballLink');
const footballLink = document.getElementById('footballLink');

let registerButton;
let loginButton;
let buttonsFlag;
try {
    registerButton = document.getElementById('headerSignUp');
    loginButton = document.getElementById('headerSignIn');
    if (registerButton && loginButton){
        buttonsFlag = 1;
    }
} catch (error) {}

activateSpanish.addEventListener('click', () => {
    indexLink.innerHTML = 'INICIO';
    sportsDropdownButton.innerHTML = 'DEPORTES <svg viewBox="0 0 16 16">\n' +
        '              <polygon points="8 11.41 3.29 6.71 4.71 5.29 8 8.59 11.29 5.29 12.71 6.71 8 11.41"></polygon>\n' +
        '            </svg>';
    basketballLink.innerHTML = 'Baloncesto';
    footballLink.innerHTML = 'Fútbol';
    esportsDropdownButton.innerHTML = 'DEPORTES ELECTRÓNICOS <svg viewBox="0 0 16 16">\n' +
        '              <polygon points="8 11.41 3.29 6.71 4.71 5.29 8 8.59 11.29 5.29 12.71 6.71 8 11.41"></polygon>\n' +
        '            </svg>';
    aboutUs.innerHTML = 'SOBRE NOSOTROS';
    if (buttonsFlag===1){
        registerButton.innerHTML = 'REGISTRATE AHORA';
        loginButton.innerHTML = 'INICIAR SESIÓN';
    }
});

activateEnglish.addEventListener('click', () => {
    indexLink.innerHTML = 'HOME';
    sportsDropdownButton.innerHTML = 'SPORTS <svg viewBox="0 0 16 16">\n' +
        '              <polygon points="8 11.41 3.29 6.71 4.71 5.29 8 8.59 11.29 5.29 12.71 6.71 8 11.41"></polygon>\n' +
        '            </svg>';
    basketballLink.innerHTML = 'Basketball';
    footballLink.innerHTML = 'Football';
    esportsDropdownButton.innerHTML = 'ESPORTS <svg viewBox="0 0 16 16">\n' +
        '              <polygon points="8 11.41 3.29 6.71 4.71 5.29 8 8.59 11.29 5.29 12.71 6.71 8 11.41"></polygon>\n' +
        '            </svg>';
    aboutUs.innerHTML = 'ABOUT US';
    if (buttonsFlag===1){
        registerButton.innerHTML = 'SIGN UP NOW';
        loginButton.innerHTML = 'SIGN IN';
    }
});



