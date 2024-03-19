const LandingURL = './pages/Landing.html'
const HeaderURL = './Components/Header.html'
const Header2URL = './Components/HeaderLoggedIn.html'
const FooterURL = './Components/Footer.html'

async function getHTML  (url, label) {
    await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el contenido de la página');
            }
            return response.text();
        })
        .then(html => {
            if (label === '#main') {
                history.pushState(null, '', url);
            }
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

async function updateBeingLoggedIn() {
    await getHTML(Header2URL, '#header');
    await getHTML(LandingURL, '#main');
}


window.addEventListener('popstate', function(event) {
    getHTML(window.location.pathname, '#main');
});


getHTML(HeaderURL, '#header' )
getHTML( LandingURL, '#main')
getHTML( FooterURL, '#footer' )