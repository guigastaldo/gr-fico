const ctxPizza1 = document.getElementById('graficoPizza1').getContext('2d');
const graficoPizza1 = new Chart(ctxPizza1, {
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

const ctxPizza2 = document.getElementById('graficoPizza2').getContext('2d');
const graficoPizza2 = new Chart(ctxPizza2, {
    type: 'pie',
    data: {
        labels: ['Todos os dias', 'Raramente', 'As vezes', 'Nunca'],
        datasets: [{
            label: 'Com que frequência você consome alimentos saudáveis?',
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

const ctxPizza3 = document.getElementById('graficoPizza3').getContext('2d');
const graficoPizza3 = new Chart(ctxPizza3, {
    type: 'pie',
    data: {
        labels: ['0', '1', '2', '3','+'],
        datasets: [{
            label: 'Em media quantas vezes consome fast-food na semana?',
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

const ctxPizza4 = document.getElementById('graficoPizza4').getContext('2d');
const graficoPizza4 = new Chart(ctxPizza4, {
    type: 'pie',
    data: {
        labels: ['1L', '2L', '3L', '+','-'],
        datasets: [{
            label: 'Quantos litros de água você bebe em media por dia?',
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


