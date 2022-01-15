console.log('In client side javascript')

// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error)
//             console.log(data.error)
//         else
//             console.log(data.forecast)
//     })
// })

const formDoc = document.querySelector('form')
const inputLoc = document.querySelector('input')

const messsageOne = document.querySelector('#message1')
const messsageTwo = document.querySelector('#message2')



formDoc.addEventListener('submit', (e)=>{
    e.preventDefault()

    messsageOne.textContent = 'Loading weather...'
    messsageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address='+encodeURIComponent(inputLoc.value)).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messsageOne.textContent = data.error
        }
        else{
            messsageOne.textContent = data.address
            messsageTwo.textContent = data.forecast
        }
           
        })
    })

})