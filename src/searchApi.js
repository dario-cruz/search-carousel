import { createClient } from "pexels";


const client = createClient('VhTnt4oP6hpy8kAUcQUkFSUNm4yiIqyZ2qNbY3Gzo8EwgU872H4PbcMX')
let searchQuery = ''


function searchPexels(input) {
    return client.photos.search({input, per_page: 10}).then(photos => {})
}

export {searchPexels}