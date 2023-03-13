// import { testImages } from "./getImages"
import attributeHelper from "@dariocru/attribute-helper"
import './index.css'

// Body element to attach the rest of the dom elements to.
const docBody = document.body
const docHeader = document.createElement('header')

// Create the main page frame.
// Container for all content
const pageFrame = document.createElement('div')
attributeHelper(pageFrame, {'class':'pageFrame'})
docBody.append(pageFrame)

// Navigation bar.
const navBar = document.createElement('nav')
attributeHelper(navBar, {'class':'navBar'})
docHeader.append(navBar)
 

// Side panel to scroll through images.
const sidePanel = document.createElement('div')
attributeHelper(sidePanel, {'class':'sidePanel'})

// Main panel to display images.
const mainPanel = document.createElement('div')
attributeHelper(mainPanel, {'class':'mainPanel'})

// Append all the things.

pageFrame.append(sidePanel, mainPanel)


// Check to see if module is working.
// testImages(amazon)
