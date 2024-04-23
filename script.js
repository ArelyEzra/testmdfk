document.addEventListener('DOMContentLoaded', function () {
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const table = document.getElementById('csvTable');

            rows.forEach(row => {
                const columns = row.split(',');
                const tr = document.createElement('tr');

                columns.forEach(column => {
                    const td = document.createElement('td');
                    td.textContent = column;
                    tr.appendChild(td);
                });

                table.appendChild(tr);
            });
        });
});
