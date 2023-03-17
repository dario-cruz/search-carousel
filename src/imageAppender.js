import attributeHelper from "@dariocru/attribute-helper"
import { mainPanel } from "."


const imageAppender = (imageObject) => {
    let imageDomElem = document.createElement('img')
    attributeHelper(imageDomElem, {
        'src':`${imageObject.medium}`,
        'class':'gallery-image',
    })
    
    mainPanel.append(imageDomElem)
}

export {imageAppender}