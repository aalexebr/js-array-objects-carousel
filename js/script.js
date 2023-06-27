const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for(let i=0; i<images.length; i++){
    let box = `<div class="box">
                    <img src="${images[i]['image']}" alt="">
                    <div class="appendix">
                        <h3 class="title">${images[i]['title']}</h3>
                        <h4 class="text">${images[i]['text']}</h4>
                    </div>
                </div>`;
    document.querySelector('.img-position').innerHTML += box            
};

const allBoxes = document.querySelectorAll('.box')
allBoxes[0].classList.add('display')

const down = document.getElementById('down');
let count = 0
down.addEventListener('click', function(){
    
    if(count < images.length-1){
        allBoxes[count].classList.remove('display')
        allPreviews[count].classList.remove('opacity')
        count++
        allBoxes[count].classList.add('display')
        allPreviews[count].classList.add('opacity')
    }
    else if(count == images.length-1){
        allBoxes[images.length-1].classList.remove('display')
        allPreviews[images.length-1].classList.remove('opacity')
        count = 0
        allBoxes[count].classList.add('display')
        allPreviews[count].classList.add('opacity')
    }
    console.log(count)
});

const up = document.getElementById('up');

up.addEventListener('click', function(){
    
    if(count < 0 || count == 0){
        allBoxes[0].classList.remove('display')
        allPreviews[0].classList.remove('opacity')
        count = images.length-1
        allBoxes[images.length-1].classList.add('display')
        allPreviews[images.length-1].classList.add('opacity')
    }
    else if(count > 0){
        allBoxes[count].classList.remove('display')
        allPreviews[count].classList.remove('opacity')
        count--
        allBoxes[count].classList.add('display')
        allPreviews[count].classList.add('opacity')
    }

});

// BONUS
const previewContainer = document.createElement('div')
previewContainer.classList.add('img-preview-container')
document.querySelector('.row').append(previewContainer)

for(let i=0; i<images.length; i++){
    const previewImg =   `<div class="img-preview">
                            <img src="${images[i]['image']}" alt="">
                          </div>`  
    previewContainer.innerHTML += previewImg           
};
const allPreviews = document.querySelectorAll('.img-preview')
allPreviews[0].classList.add('opacity')