"use strict";

import { modalBox, body, gridContainer, modalLeftButton, modalRightButton, modalCloseButton, burgerNav, galleryNav } from "./Elements.js"
import { initialSearch, totalImages } from "./globalVars.js";
import navigateToModalImage from "./modalNavigation.js";
import updateValue from "./updateValue.js";
import renderUpdate from "./renderUpdate.js";

const App = {
  
  init(){

    //modal controls
    modalLeftButton.addEventListener("click", function() {
      navigateToModalImage("left");
    });

    modalRightButton.addEventListener("click",function() {
      navigateToModalImage("right");
    });

    modalCloseButton.addEventListener("click", function () {
      modalBox.classList.replace("open", "close");
      body.classList.remove("no-scroll"); 
    });

    //initial render of images, comes with functionalities for each images
    renderUpdate(updateValue(`https://api.pexels.com/v1/search?per_page=${totalImages}&page&query=${initialSearch}`))
    
    burgerNav.addEventListener("click", ()=>{
      galleryNav.classList.toggle("autoHeight")
      
      if(galleryNav.classList.contains("autoHeight") && window.innerWidth < 700){
        gridContainer.classList.replace("unshoved", "shoved")
      }else{
        gridContainer.classList.replace("shoved", "unshoved")
      }
    })
  }
  
}// Website object

//invocation
window.addEventListener("DOMContentLoaded", () => App.init());
