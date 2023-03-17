import attributeHelper from "@dariocru/attribute-helper"
import './index.css'
import { searchPexels } from "./searchApi"

// Body element to attach the rest of the dom elements to.
const docBody = document.body
const docHeader = document.querySelector('header')

// Create the main page frame.
// Container for all content
const pageFrame = document.createElement('div')
attributeHelper(pageFrame, {'class':'pageFrame'})
docBody.append(pageFrame)

// Navigation bar.
const navBar = document.createElement('nav')
attributeHelper(navBar, {'class':'navBar'})
docHeader.append(navBar)

// -------------------------------------------------------
// Form and input for image search. 

const formDiv = document.createElement('div')
attributeHelper(formDiv, {'class':'form-div'})

const searchForm = document.createElement('form')
attributeHelper(searchForm, {'id':'term-form'})
searchForm.addEventListener('submit', (e) => {
    // Prevent submitting of form to refresh the page. 
    e.preventDefault()
})

const searchBar = document.createElement('input')
attributeHelper(searchBar, {
    'type':'search',
    'autocomplete':'off',
    'placeholder':'Enter a term.',
    'id':'search',
})

let searchTeam = ''
searchBar.addEventListener('input', (e) => {
    searchTeam = e.target.value.toLowerCase()

})

searchForm.append(searchBar)
formDiv.append(searchForm)
navBar.append(formDiv)
// -------------------------------------------------------
// Title/Heading for main page.
const headingDiv = document.createElement('div')
attributeHelper(headingDiv, {'class':'heading-div'})

const pageHeading = document.createElement('h1')
attributeHelper(pageHeading, {'class':'heading'})
pageHeading.innerHTML = 'Search Carousel'

const pageSubText = document.createElement('p')
attributeHelper(pageSubText, {'class':'sub-text'})
pageSubText.innerText = 'Enter a term and get a gallery, simpla as that. 👍🏾'

headingDiv.append(pageHeading)
headingDiv.append(pageSubText)
navBar.append(headingDiv)
// -------------------------------------------------------
// Side panel to scroll through images.
const sidePanel = document.createElement('div')
attributeHelper(sidePanel, {'class':'sidePanel'})

const sideImageContainer = document.createElement('div')
attributeHelper(sideImageContainer, {'class':'side-image-container'})
// -------------------------------------------------------
// Main panel to display images.
const mainPanel = document.createElement('div')
attributeHelper(mainPanel, {'class':'mainPanel'})

const mainImageContainer = document.createElement('div')
attributeHelper(mainImageContainer, {'class':'main-image-container'})
// -------------------------------------------------------

// Append all the things.

pageFrame.append(mainPanel)

// -------------------------------------------------------
searchPexels('cars')

export {mainPanel}