// /*const log = message => {
//     const promise = new Promise((resolve) =>{
//         setTimeout(() => {
//             console.log(message)
//             resolve()
//         }, 1000)
//     })
//     return promise
// }



// log('hi')
// .then(() => log('there'))
// .then(() => log('how'))
// .then(() => log('are'))
// .then(() => log('you?'))
// */
const {ServerResponse} = require('http')
const https = require('https')
const { resolve } = require('path')

const getDataFromUrl = async (url) => {
    return new Promise((resolve, reject) => {
https.get(url, response => {
        let body = ''
        response.on('data',data => body += data.toString())
        response.on('end', () => resolve(body))
        response.on('error',reject)

        })
    })
    
}

(async () => {
    

    const url = 'https://swapi.dev/api/people/3'
    const swData = await getDataFromUrl(url)
    console.log(swData)

    

})()