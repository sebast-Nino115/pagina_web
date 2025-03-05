const analysisVelocidad = document.getElementById('analysis-velocidad');
const analysisDistancia = document.getElementById('analysis-distancia');
const analysisTemperatura = document.getElementById('analysis-temperatura');

function updateAnalysis(value, type) {
    if (type === 'velocidad') {
        if (value < 2) {
            return 'Peligro: Bajo rendimiento';
        } else if (value > 8) {
            return 'Alto rendimiento';
        } else {
            return 'Rendimiento óptimo';
        }
    } else if (type === 'distancia') {
        if (value < 50) {
            return 'Peligro: Distancia crítica';
        } else if (value > 150) {
            return 'Distancia segura';
        } else {
            return 'Distancia aceptable';
        }
    } else if (type === 'temperatura') {
        if (value > 70) {
            return 'Peligro: Alta temperatura';
        } else if (value < 30) {
            return 'Temperatura baja';
        } else {
            return 'Temperatura óptima';
        }
    }
}

function updateDescription(chart, sensorName, analysisElement, type) {
    const lastPoint = chart.data.datasets[0].data[chart.data.datasets[0].data.length - 1];
    if (lastPoint) {
        analysisElement.innerText = updateAnalysis(lastPoint.y, type);
    }
}

const velocidadCtx = document.getElementById('chart1').getContext('2d');
const distanciaCtx = document.getElementById('chart2').getContext('2d');
const temperaturaCtx = document.getElementById('chart3').getContext('2d');

const maxPoints = 50; // Número máximo de puntos antes de reiniciar

const velocidadData = {
    labels: [],
    datasets: [{
        label: 'Velocidad de Apertura (m/s)',
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        data: []
    }]
};

const distanciaData = {
    labels: [],
    datasets: [{
        label: 'Distancia Detectada (cm)',
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        data: []
    }]
};

const temperaturaData = {
    labels: [],
    datasets: [{
        label: 'Temperatura del Motor (°C)',
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        data: []
    }]
};

const velocidadChart = new Chart(velocidadCtx, {
    type: 'line',
    data: velocidadData,
    options: {
        scales: {
            x: { type: 'linear', position: 'bottom' },
            y: { beginAtZero: true }
        }
    }
});

const distanciaChart = new Chart(distanciaCtx, {
    type: 'line',
    data: distanciaData,
    options: {
        scales: {
            x: { type: 'linear', position: 'bottom' },
            y: { beginAtZero: true }
        }
    }
});

const temperaturaChart = new Chart(temperaturaCtx, {
    type: 'line',
    data: temperaturaData,
    options: {
        scales: {
            x: { type: 'linear', position: 'bottom' },
            y: { beginAtZero: true }
        }
    }
});

function generateRandomData(min, max) {
    return Math.random() * (max - min) + min;
}

function updateCharts() {
    const timestamp = Date.now();

    if (velocidadData.labels.length >= maxPoints) {
        velocidadData.labels = [];
        velocidadData.datasets[0].data = [];
    }
    if (distanciaData.labels.length >= maxPoints) {
        distanciaData.labels = [];
        distanciaData.datasets[0].data = [];
    }
    if (temperaturaData.labels.length >= maxPoints) {
        temperaturaData.labels = [];
        temperaturaData.datasets[0].data = [];
    }

    velocidadChart.data.labels.push(timestamp);
    velocidadChart.data.datasets[0].data.push({ x: timestamp, y: generateRandomData(0, 10) });

    distanciaChart.data.labels.push(timestamp);
    distanciaChart.data.datasets[0].data.push({ x: timestamp, y: generateRandomData(0, 200) });

    temperaturaChart.data.labels.push(timestamp);
    temperaturaChart.data.datasets[0].data.push({ x: timestamp, y: generateRandomData(0, 100) });

    velocidadChart.update();
    distanciaChart.update();
    temperaturaChart.update();

    updateDescription(velocidadChart, 'Velocidad de Apertura', analysisVelocidad, 'velocidad');
    updateDescription(distanciaChart, 'Distancia Detectada', analysisDistancia, 'distancia');
    updateDescription(temperaturaChart, 'Temperatura del Motor', analysisTemperatura, 'temperatura');
}

setInterval(updateCharts, 1000);
