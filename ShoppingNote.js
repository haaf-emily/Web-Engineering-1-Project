document.addEventListener('DOMContentLoaded', () => {
    const tableData = JSON.parse(localStorage.getItem('shoppingList'));
    const tableBody = document.getElementById('einkaufsliste').getElementsByTagName('tbody')[0];

    tableData.forEach(rowData => {
        const row = document.createElement('tr');
        const zutatCell = document.createElement('td');
        const mengeCell = document.createElement('td');

        zutatCell.innerText = rowData.menge;
        mengeCell.innerText = rowData.zutat;

        row.appendChild(zutatCell);
        row.appendChild(mengeCell);
        tableBody.appendChild(row);
    });
});
