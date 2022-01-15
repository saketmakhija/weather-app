const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const templateDirectory = path.join(__dirname, '../template/views')
const partialPath = path.join(__dirname, '../template/partials')
console.log(publicDirectoryPath)

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')
app.set('views', templateDirectory)
hbs.registerPartials(partialPath)


app.get('/', (req, res)=>{
    res.render('home', {title: 'Home', name:'saket'})
})

app.get('/about', (req, res)=>{
    res.render('about', {title:'about', name:'saket'})
})

app.get('/help', (req, res)=>{
    res.render('help', {title: 'help', message: 'thsi is a message', name:'saket'})
})

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'please provide address'
        });
    }

    geocode(req.query.address, (error, data={})=>{
        if(error){
            return res.send({
                error
            })
        }
        forecast(data, (error, forecastData)=>{
            if(error){
                return res.send({
                    error
                })
            }
            res.send({forecast: forecastData, address: req.query.address})
        })
    })
})

app.get('/help/*', (req, res)=>{
    res.send('help page not found')
})

app.get('*', (req, res)=>{
    res.send('404 pge not found')
})



app.listen(3000, ()=>{
    console.log('app running on port 3000')
})