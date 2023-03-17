import attributeHelper from "@dariocru/attribute-helper"
import { mainPanel } from "."


const imageAppender = (imageObject) => {
    let imageDomElem = document.createElement('image')
    attributeHelper(imageDomElem, {
        'src':`${imageObject.portrait}`,
        'class':'gallery-image',

    })
    mainPanel.append(imageDomElem)
}

export {imageAppender}