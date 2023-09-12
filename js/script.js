// script.js
document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '5a44f999a3msh5e59814b9c0f4fap1bd172jsn2566127123d8'; // Reemplaza con tu propio token
    const apiUrl = 'https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=%3CREQUIRED%3E&country=us&language=en'; // Reemplaza con la URL de la API

    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey
    };

    fetch(apiUrl, {
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        // Llama a una función para mostrar la información en la página
        displayData(data);
    })
    .catch(error => {
        console.error(error);
    });
});

function displayData(data) {
    const marketTrendsSection = document.getElementById("market-trends");
    marketTrendsSection.innerHTML = ""; // Limpia cualquier contenido existente

    // Itera a través de los datos y muestra la información en la página
    // Puedes personalizar esta parte para mostrar los datos específicos que deseas
    for (const trend of data) {
        const trendItem = document.createElement("div");
        trendItem.classList.add("trend-item"); // Puedes aplicar estilos CSS aquí

        const trendNameElement = document.createElement("h2");
        trendNameElement.textContent = `Tendencia: ${trend.trend_name}`;

        const trendDescriptionElement = document.createElement("p");
        trendDescriptionElement.textContent = `Descripción: ${trend.description}`;

        // Agregar elementos al div de la tendencia
        trendItem.appendChild(trendNameElement);
        trendItem.appendChild(trendDescriptionElement);

        // Agregar el div de la tendencia a la sección de tendencias del mercado
        marketTrendsSection.appendChild(trendItem);
    }
}
