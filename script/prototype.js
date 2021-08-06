"use strict";
import { modalBox, body, ModalImage, photographer, photoLink } from "./Elements.js"
import updateValue from "./updateValue.js";
import renderUpdate from "./renderUpdate.js";
import { initialSearch } from "./ConstantData.js";
import { totalImages } from "./getData.js";
import navigateToModalImage from "./modalNavigation.js";

const App = {
  
  init(){
    
    // const { category, modalBox, body, ModalImage, photographer, photoLink, banner } = ConstVars;
    
      
      const modalLeftButton = document.getElementById("modal-left-btn");
      const modalRightButton = document.getElementById("modal-right-btn");
      const modalCloseButton = document.getElementById("modal-close-btn");
      // let modalCurrentIndex = 0;
      // let categoryArray
      
      let called = 0;
    
    modalLeftButton.addEventListener("click", function() {
      navigateToModalImage("left");
    });

    modalRightButton.addEventListener("click",function() {
      navigateToModalImage("right");
    });

    modalCloseButton.addEventListener("click", function () {
      modalBox.classList.replace("open", "close");
      body.classList.remove("no-scroll");
      // ModalImage.src = "";
      // photoLink.href = "";
      // photographer.innerHTML = "";
      // photographer.href = "";
    });


    // let totalImages = 32;
    // let requestedPage = 2;
    renderUpdate(updateValue(`https://api.pexels.com/v1/search?per_page=${totalImages}&page&query=${initialSearch}`))
    // var lastCalled = 0;
    // var delay = 500;
    // const getData = async () =>{
      

    //   if (lastCalled >= (Date.now() - delay)) return;
  
    //   //const nextData = await fetchNextPage(data,requestedPage)
    //   let res = updateValue(`https://api.pexels.com/v1/search?per_page=${totalImages}&page=${requestedPage}&query=${initialSearch}`)
    //   //console.log('this is the res inside getData',res)
    //   requestedPage++;
    //   //console.log(res)
    //   renderUpdate(res)
    //   lastCalled = Date.now();
    // }
    
    const burgerNav = document.querySelector('.burger-nav')
    const burgerBars = document.querySelectorAll(".burger-nav > .bar")

    console.log(burgerBars)
    const galleryNav = document.querySelector('.gallery-nav')   
    
    burgerNav.addEventListener("click", ()=>{
      galleryNav.classList.toggle("autoHeight")
    })
  }
  
}// Website object

//invocation
window.addEventListener("DOMContentLoaded", () => App.init());
