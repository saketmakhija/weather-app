const request = require('postman-request')

const forecast = ({lat, lon}, callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key=ad169a2cfa3a04373760938d3c5e6996&query='+lat+','+lon+'&units=f'

    request({url, json: true}, (error, {body}) => {
    
            //const data = JSON.parse(response.body)
            if(error){
                callback('bad request', undefined)
            }else if(body.error){
                callback('bad coordinates', undefined)
            }else{
                const temp = body.current.temperature
                const rain = body.current.precip
                callback(undefined, 'The temperature is '+temp+' deg and chance of rain is '+rain)
            }
            
        })
}

module.exports = forecast;