if (Process.env.NODE_ENV !== 'production') {

    require('dotenv').config()

}

const ACCUWEATHER_API_KEY = process.env.ACCUWEATHER_API_KEY

const express = require('express')
const Accuweather = require('accuweather') // installed using "npm install Accuweather"
const axios = require('axios')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/weather', (req, res) => {

const forecast = new Accuweather('ACCUWEATHER_API_KEY')
forecast
        .localkey(${(localkey)})
        .time('hourly/1hour')
        .language("en")
        .details(true)
        .metric(true)
        .get
        
       

axios({
    
    url: url,
    responseType: 'json'
}).then(res =>{
    console.log(res)

})
.catch(err => {
    console.log(err)
})

app.listen(3000, () =>{

    console.log('Server Started')

})