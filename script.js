let score = 0;
let multiplicateur = 1;
let prixMultiplicateur= 50;

function updateDOM() { // modification du texte html
    let dom_elements = document.getElementById('multiplier');
    dom_elements.innerText = `multiplier par : ${multiplicateur}` ;
    
    let prix = document.getElementById('prix');
    prix.innerText = prixMultiplicateur * multiplicateur;

    let dom_element = document.getElementById('score');
    dom_element.innerText = score;
}

function autoClick() {
    
}

function augmenterMultiplicateur(){
    if (score >= 50) {
        multiplicateur++;
        score = score - (prixMultiplicateur * multiplicateur - prixMultiplicateur );
    }
    updateDOM();
}

function augmenterAffichage() {
    score = score + multiplicateur;
    updateDOM();
}


