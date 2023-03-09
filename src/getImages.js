import google from 'googlethis'

const  getSearchImages = await google.image(`${term}`, { safe: true })

function testImages(term) {
    console.log(getSearchImages)
}

export{testImages}