const request = require('postman-request');

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FrbWFraGlqYSIsImEiOiJja3k3NmRldTQxMnY3MndvajhmN3JxdHk3In0.wDgAIuYHneWSk-ghrxwPxA&limit=1'

    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('unable to connect to server', undefined)
        }else if(body.features.length===0){
            callback('please provide correct location', undefined)
        }else{
            const lat = body.features[0].center[1]
            const lon = body.features[0].center[0]
            callback(undefined, {
                lat,
                lon
            })
        }
            
    })
}

module.exports = geocode