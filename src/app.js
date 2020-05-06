let background = document.getElementById('background');
let gold = document.getElementById('gold');
let bigMac = document.getElementById('big-mac');

gold.addEventListener('click', () => {
    if (background.classList.contains('background-bigmac')) {
        background.classList.remove('background-bigmac');
        background.classList.add('background-gold');
    }
})

bigMac.addEventListener('click', () => {
    if (background.classList.contains('background-gold')) {
        background.classList.remove('background-gold');
        background.classList.add('background-bigmac');
    }
})