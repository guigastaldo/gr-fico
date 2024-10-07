const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Todos os dias', 'Raramente', 'As vezes', 'Nunca'],
        datasets: [{
            label: 'Alimentação Saudável',
            data: [66, 16, 16, 0],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            bordarWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Alimentação Saudável'
            }
        }
    }
});    