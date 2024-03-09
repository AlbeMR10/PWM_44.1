const LandingURL = './pages/Landing.html'
const HeaderURL = './Components/Header.html'
const FooterURL = './Components/Footer.html'

const getHTML = (url, label) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el contenido de la página');
            }
            return response.text();
        })
        .then(html => {
            history.pushState(null, '', url);
            const mainLabel = document.querySelector(label)
            mainLabel.innerHTML = html;
            document.title = "AllSports | " + url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.html'));
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.getElementById("toggleButton");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Ocultar";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Mostrar";
    }
}

function updateBeingLoggedIn() {
    getHTML('./Components/headerLoggedIn.html', '#header');
    getHTML('./pages/Landing.html', '#main');
}


window.addEventListener('popstate', function(event) {
    getHTML(window.location.pathname, '#main');
});


//getHTML( HeaderURL, '#header' )
getHTML(LandingURL, '#main')
// getHTML( FooterURL, '#footer' )