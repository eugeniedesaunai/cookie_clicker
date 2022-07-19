let score = 0;
let multiplicateur = 1;
let prixMultiplicateur= 50;
let prixActuell = 0;
let prixAutoClick = 500;

function updateDOM() { // modification du texte html
    let dom_elements = document.getElementById('multiplier');
    dom_elements.innerText = `multiplier par : ${multiplicateur}` ;
    
    let prix = document.getElementById('prix');
    prixActuell = prixMultiplicateur * multiplicateur
    prix.innerText = `prix : ${prixActuell}` ;

    let dom_element = document.getElementById('score');
    dom_element.innerText = score;
}

//bouton autoclick
function autoClick() {
    if (score >= prixAutoClick) {
        setInterval(() => {
            score++;
            updateDOM();
        }, 1000);
        score = score - prixAutoClick;
    }
}


// bouton agmentation
function augmenterMultiplicateur(){
        let tmpScore = score;
        if(tmpScore > prixActuell){
            multiplicateur++;
            score = score - (prixMultiplicateur * multiplicateur - prixMultiplicateur );
            
        }
        updateDOM();
}

function augmenterAffichage() {
    score = score + multiplicateur;
    updateDOM();
}
