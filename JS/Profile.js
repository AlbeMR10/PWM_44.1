const leagueImages = [
    'Images/Leagues/nba.png',
    'Images/Leagues/laliga.png',
    'Images/Leagues/premier.png',
    'Images/Leagues/lec.webp'
];
const fotoPerfil = [
    'Images/Components/profile.png'
];

const carouselContainer = document.querySelector('.leagueCarousel');
const profilePicture = document.querySelector('.profilePicture');


const carouselHTML = `
    <div class="leagueCarousel">
        ${leagueImages.map(image => `<img src="${image}" alt="">`).join('')}
    </div>
`;

const fotoPerfillHTML = `
    <div class="profilePicture">
        ${fotoPerfil.map(image => `<div><img src="${image}" alt=""></div>`).join('')}
    </div>
`;


carouselContainer.innerHTML = carouselHTML;
profilePicture.innerHTML = fotoPerfillHTML;

