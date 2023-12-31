let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'c849b7d4e10826995dfa69589651bf3e'
let diferenciaKelvin = 273.15



document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})
function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response))

}

function mostrarDatosClima(response) {
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = response.name
    const paisNombre = response.sys.country
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description
    const icono = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const paisTitulo = document.createElement('h3')
    paisTitulo.textContent = `ciudad originaria de ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `la temperatura es: ${Math.floor(temperatura - diferenciaKelvin)} °C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `la descripcion meteorologica es ${descripcion}`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = 'https://openweathermap.org/img/wn/10d@2x.png'

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(paisTitulo)
    divDatosClima.appendChild(iconoInfo)

}


