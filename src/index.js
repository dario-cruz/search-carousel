import { testImages } from "./getImages"
import './index.css'

// Body element to attach the rest of the dom elements to.
const docBody = document.body


// Create the main page frame.
// Container for all content
const pageFrame = document.createElement('div')

// Navigation bar.
const navBar = document.createElement('nav')

// Side panel to scroll through images.
const sidePanel = document.createElement('div')

// Main panel to display images.
const mainPanel = document.createElement('div')


testImages(amazon)
