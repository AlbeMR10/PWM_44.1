// Imágenes de ejemplo
const images = [
    'Images/Leagues/nba.png',
    'Images/Leagues/laliga.png',
    'Images/Leagues/premier.png',
    'Images/Leagues/lec.webp'
];
const fotoPerfil = [
    'Images/Components/profile.png'
];

// Obtener el contenedor del carrusel
const carouselContainer = document.querySelector('.carousel-container');
const profilePicture = document.querySelector('.foto-de-perfil');
// Crear el HTML para el carrusel
const carouselHTML = `
    <div class="slick-carousel">
        ${images.map(image => `<div><img src="${image}" alt=""></div>`).join('')}
    </div>
`;

const fotoPerfillHTML = `
    <div class="slick-carousel">
        ${fotoPerfil.map(image => `<div><img src="${image}" alt=""></div>`).join('')}
    </div>
`;

// Insertar el HTML del carrusel en el contenedor
carouselContainer.innerHTML = carouselHTML;
profilePicture.innerHTML = fotoPerfillHTML;

$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 3, // Mostrar 3 imágenes a la vez
    slidesToScroll: 3, // Desplazar 3 imágenes a la vez
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2, // Mostrar 2 imágenes a la vez en dispositivos más pequeños
                slidesToScroll: 2 // Desplazar 2 imágenes a la vez en dispositivos más pequeños
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1, // Mostrar 1 imagen a la vez en dispositivos aún más pequeños
                slidesToScroll: 1 // Desplazar 1 imagen a la vez en dispositivos aún más pequeños
            }
        }
    ]
});