import attributeHelper from "@dariocru/attribute-helper"
import { mainPanel } from "."


const imageAppender = (imageObject) => {
    let imageDomElem = document.createElement('img')
    attributeHelper(imageDomElem, {
        'src':`${imageObject.large}`,
        'class':'gallery-image',
    })
    imageDomElem.style.opacity = '0'
    mainPanel.append(imageDomElem)
}

export {imageAppender}