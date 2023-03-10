import google from 'googlethis'

// Term that the user will search for.
let term = ''
// Code for search of google images. 
const  getSearchImages = await google.image(`${term}`, { safe: true })

// Changes the term to the user input and runs the getSearchImages func.
function testImages(userInput) {
    term = userInput
    console.log(getSearchImages())
}

export{testImages}