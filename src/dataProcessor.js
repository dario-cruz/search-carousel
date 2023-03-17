import { imageAppender } from "./imageAppender";
import { mainPanel } from ".";

const dataProcessor = (theData) => {
    // Get and store data for the next page.
    let nextPage = theData.next_page
    // Process the photo information and distill to only the image url.
    let imageList = theData.photos

    let imageSrc = imageList.map(processThis) 
    function processThis (value) {
        return value.src
    }
    console.log(imageSrc)
    console.log(nextPage)
    
    mainPanel.innerHTML = ''
    imageSrc.forEach(element => {
        imageAppender(element)
    });
}

export {dataProcessor}