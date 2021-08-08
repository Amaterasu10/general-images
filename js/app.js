"use strict";
import { 
  modalBox, body, gridContainer, 
  modalCloseButton, burgerNav, galleryNav, 
  modalImage, photographer, photoLink, initialSearch, totalImages
} from "./globalVars.js";

import updateValue from "./updateValue.js";
import renderUpdate from "./renderUpdate.js";

const App = {
  
  init(){

    modalCloseButton.addEventListener("click", function () {
      modalBox.classList.replace("open", "close");
      body.classList.remove("no-scroll");
      modalImage.removeAttribute("src");
      photoLink.removeAttribute("href");
      photographer.removeAttribute("href");
      photographer.innerHTML = "";
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


// categoryArray.forEach(image => {
//   console.log(`W: ${image.width}, H: ${image.height}`)
// });

//invocation
window.addEventListener("DOMContentLoaded", () => App.init());
