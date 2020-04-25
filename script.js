const searchElement = document.querySelector('[data-city-search]')
const locationurl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'

request = new asyncRequest()
request.open("GET", locationurl, true)



request.onreadystatechange = function(){

   if (this.readyState == 4 && this.status == 200) {
     
    const place = this.responseXML.searchElement
    
    if (place == null) return
   
    fetch('/weather', {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            
        localkey: place.responseXML()[0]

        })

    }).then(res => res.json()).then(data => {
        // setweatherData(data, place)
    })
    
    }
}

//Inspect this part for the APIs returns
const locationElement = document.querySelector('[data-location]')
const statusElement = document.querySelector('[data-status]')
const temperatureElement = document.querySelector('[data-temperature]')
const precipitationElement = document.querySelector('[data-precipitation]')
const windElement = document.querySelector('[data-location]')

// function setweatherData(data, place){

// locationElement.textContent = place
// statusElement.textContent = data.//name of returned value
// temperatureElement.textContent = data.temperature
// precipitationElement.textContent = '${data.precipProbability * 100}%'
// windElement.textContent = data.//name of returned value

// }