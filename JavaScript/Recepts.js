function loadRecipeIngredients() {
    const ingredientsList = document.getElementById('ingredients-list');
    const tables = document.querySelectorAll('table');

    tables.forEach(table => {
        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = table.previousElementSibling.textContent;
        ingredientsList.appendChild(recipeTitle);

        const tbody = table.querySelector('tbody');
        const rows = tbody.querySelectorAll('tr');
        const recipeIngredients = [];

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const menge = cells[0].textContent.trim();
            const zutat = cells[1].textContent.trim();

            if (menge && zutat) {
                recipeIngredients.push({ menge, zutat });
            } else if (zutat) {
                recipeIngredients.push({ zutat });
            }
        });

        const ingredientTable = document.createElement('table');
        const newTbody = document.createElement('tbody');

        recipeIngredients.forEach(ingredient => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');

            if (ingredient.menge) {
                td1.textContent = ingredient.menge;
            }
            td2.textContent = ingredient.zutat;

            tr.appendChild(td1);
            tr.appendChild(td2);
            newTbody.appendChild(tr);
        });

        ingredientTable.appendChild(newTbody);
        ingredientsList.appendChild(ingredientTable);
    });
}

window.onload = function() {
    loadRecipeIngredients();
};

function exportToShoppingNote() {
    const tables = document.querySelectorAll('table');
    const shoppingList = [];

    tables.forEach(table => {
        const tbody = table.querySelector('tbody');
        const rows = tbody.querySelectorAll('tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const menge = cells[0].textContent.trim();
            const zutat = cells[1].textContent.trim();

            if (zutat) {
                shoppingList.push({ zutat, menge });
            }
        });
    });

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    window.location.href = '/html/ShoppingNote.html';
}
