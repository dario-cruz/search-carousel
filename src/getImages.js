// import google from 'googlethis'

// // Term that the user will search for.
// let term = ''
// // Code for search of google images. 
// const  getSearchImages = await google.image(`${term}`, { safe: true })

// // Changes the term to the user input and runs the getSearchImages func.
// function testImages(userInput) {
//     term = userInput
//     console.log(getSearchImages())
// }

// export{testImages}

// Old Code.
// ----------------------------------------------------------------------


const GoogleImages = require('googleimg')

const client = new GoogleImages('859914066ff1848d1', 'f6449f0b24f49ba2c4ed24ff6d3d4e567f003c5f')

const searchForTerm = (inputTerm) => {
    console.log(client.search(`${inputTerm}`, {size: 'large'}))
}

export {searchForTerm}