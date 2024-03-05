const headerURL = './Components/header.html';

fetch(headerURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar el header');
        }
        return response.text();
    })
    .then(headerHTML => {
        document.getElementById('headerContainer').innerHTML = headerHTML;
    })
    .catch(error => {
        console.error('Error:', error);
    });