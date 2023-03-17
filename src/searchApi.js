import { dataProcessor } from "./dataProcessor"
async function searchPexels(input) {
    const baseUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=120`
    const apiKey = 'VhTnt4oP6hpy8kAUcQUkFSUNm4yiIqyZ2qNbY3Gzo8EwgU872H4PbcMX'

    const response = await fetch(baseUrl,{
        method: 'GET',
        headers:{
            Accept: 'application/json',
            Authorization: apiKey
        },
    })
    const data = await response.json()
    console.log(data)
    dataProcessor(data)
    let domTarget = document.querySelectorAll('.gallery-image')
    domTarget.forEach(element => {
        element.style.opacity = '100'
    })
}

export {searchPexels}