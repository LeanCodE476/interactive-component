const section1 = document.getElementById("card-place-rating");
const section2 = document.getElementById("card-thankYou");
const btnSubmit = document.getElementById("btnSubmit");
const spanRating = document.getElementById("span-rating");
const ratingButtons = document.getElementsByClassName("rating-box");
let startScore="0"

btnSubmit.addEventListener('click', onSubmit)

for (let i of ratingButtons) {
    i.addEventListener('click',marcarCaja)
}


function onSubmit() {
    section1.classList.add('hidden')
    spanRating.textContent=startScore
    section2.classList.remove('hidden')
}

function marcarCaja(e) {
    for (let i of ratingButtons) {
        i.classList.remove('active')

    }
    e.target.classList.add('active')
    startScore = e.target.textContent 
 
    
}

    


