function addToShoppingList() {
    const rezeptTitel = document.getElementById('rezept-titel').innerText;
    const zutatenTabelle = document.getElementById('zutaten-tabelle').getElementsByTagName('tr');
    let einkaufsliste = JSON.parse(localStorage.getItem('einkaufsliste')) || [];

    let zutaten = [];
    for (let i = 0; i < zutatenTabelle.length; i++) {
        const menge = zutatenTabelle[i].getElementsByTagName('td')[0].innerText;
        const zutat = zutatenTabelle[i].getElementsByTagName('td')[1].innerText;
        zutaten.push(`${menge} ${zutat}`);
    }

    einkaufsliste.push({ titel: rezeptTitel, zutaten: zutaten });
    localStorage.setItem('einkaufsliste', JSON.stringify(einkaufsliste));
}

function loadShoppingList() {
    const einkaufslisteDiv = document.getElementById('einkaufsliste');
    let einkaufsliste = JSON.parse(localStorage.getItem('einkaufsliste')) || [];

    einkaufsliste.forEach(item => {
        const titel = document.createElement('h2');
        titel.innerText = item.titel;
        einkaufslisteDiv.appendChild(titel);

        const zutatenListe = document.createElement('ul');
        item.zutaten.forEach(zutat => {
            const li = document.createElement('li');
            li.innerText = zutat;
            zutatenListe.appendChild(li);
        });
        einkaufslisteDiv.appendChild(zutatenListe);
    });
}

function clearShoppingList() {
    localStorage.removeItem('einkaufsliste');
    document.getElementById('einkaufsliste').innerHTML = '';
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadShoppingList);
} else {
    loadShoppingList();
}
