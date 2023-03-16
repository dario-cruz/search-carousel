import { createClient } from "pexels";


// const client = createClient('VhTnt4oP6hpy8kAUcQUkFSUNm4yiIqyZ2qNbY3Gzo8EwgU872H4PbcMX')

// client.photos.search({searchQuery, per_page: 10}).then(photos => {...})

async function searchPexels(input) {
    const baseUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=10`
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
    return data
}

export {searchPexels}