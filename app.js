
const forecast = require('./src/utils/forecast');
const geocode = require('./src/utils/geocode');

// const url = 'http://api.weatherstack.com/current?access_key=ad169a2cfa3a04373760938d3c5e6996&query=37.8267,-122.4233&units=f';

// request({url: url, json: true}, (error, response) => {
    
//     //const data = JSON.parse(response.body)

//     const temp = response.body.current.temperature
//     const rain = response.body.current.precip
//     console.log('The temperature is '+temp+' deg and chance of rain is '+rain)
// })

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FrbWFraGlqYSIsImEiOiJja3k3NmRldTQxMnY3MndvajhmN3JxdHk3In0.wDgAIuYHneWSk-ghrxwPxA&limit=1'
// request({url: geocodeUrl, json:true}, (error, response)=>{
    
//     if(error){
//         console.log('request not sent correctly')
//     }else if(response.body.features.length===0){
//         console.log('please provide correct input');
//     }else{
//         const lat = response.body.features[0].center[1]
//         const lon = response.body.features[0].center[0]
//         console.log('response is '+lat+' '+lon)
//     }

// })


geocode('mumbai', (error, data={})=>{
    if(error)
        return console.log(error)
    forecast(data, (error, forecastData)=>{
        if(error)
            return console.log(error)
        console.log(forecastData);
    })
})

