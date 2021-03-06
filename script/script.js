"use strict";

let Website = {
  //object properties

  category_01 : document.getElementById("anime-page"),

  category_02 : document.getElementById("models-page"),

  modelCategoryTitle : document.getElementById("models-title"),

  animeCategoryTitle : document.getElementById("anime-title"),

  body : document.getElementById("body"),

  modalBox : document.getElementById("modal-box"),

  ModalImage : document.getElementById("modal-img"),
 

  // method 1
  
  toggleChangePage() {
    Website.category_01.classList = "open-grid";
    Website.animeCategoryTitle.classList = "open-title";
    Website.category_02.classList = "close";
    Website.modelCategoryTitle.classList = "close";
  
    function change (){
      if (Website.category_02.classList == "close") {
        Website.category_02.classList.replace("close", "open-grid");
        Website.modelCategoryTitle.classList.replace("close", "open-title");
  
        Website.category_01.classList.replace("open-grid", "close");
        Website.animeCategoryTitle.classList.replace("open-title", "close");
      }

      else {
        Website.category_02.classList.replace("open-grid", "close");
        Website.modelCategoryTitle.classList.replace("open-title", "close");
  
        Website.category_01.classList.replace("close", "open-grid");
        Website.animeCategoryTitle.classList.replace("close", "open-title");
      }
    };
    const pageLeftBtn = document.getElementsByClassName("left-btn")[0];
    const pageRightBtn = document.getElementsByClassName("right-btn")[0];
  
    pageLeftBtn.addEventListener("click", change);
    pageRightBtn.addEventListener("click", change);
  },

  // method 2
  async renderImages(){
    let uri = "photos/photo details.json";
    const res = await fetch(uri);
  
    const category_01 = Website.category_01;
    const category_02 = Website.category_02;

    const modalLeftButton = document.getElementById("modal-left-btn");
    const modalRightButton = document.getElementById("modal-right-btn");
    const modalCloseButton = document.getElementById("modal-close-btn");
  
    let modalCurrentIndex = 0;

    if(res.status != 200){
      throw new Error("Failed to retrieve the data");
    }
  
    const images = await  res.json();
    //console.log(images)
    let template_01 = "";
    let template_02 = "";
  
    images.images1.forEach(image =>{
      template_01 += 
      `
        <img class="image" src=${image.lowRezSrc} alt=${image.title} />
      `
    })
    category_01.innerHTML = template_01;

    images.images2.forEach(image =>{
      template_02 += 
      `
        <img class="image" src=${image.lowRezSrc} alt=${image.title} />
      `
    })
    category_01.innerHTML = template_01;

    // images.anime.forEach(image =>{
    //   template_01 += 
    //   `
    //     <img class="image" src=${image._src} alt=${image.title} />
    //   `
    // })
  
    // 
  
    // images.models.forEach(image =>{
    //   template_02 +=
    //   `
    //     <img class="image" src=${image._src} alt=${image.title} />
    //   `
    // })
  
    category_02.innerHTML = template_02;

    const animeCategory = Array.from( document.querySelectorAll("#anime-page>.image") );
  
    const modelCategory = Array.from( document.querySelectorAll("#models-page>.image") );

    const imageOnClick = function() {
      animeCategory.forEach(image =>{ 
        image.addEventListener("click", function () {
          if (Website.modalBox.classList == "close") {
            Website.modalBox.classList.replace("close", "open");
            Website.body.classList.add("no-scroll");
            //Website.ModalImage.src = this.src;
            Website.ModalImage.src = images.images1[animeCategory.indexOf(this)].lowRezSrc;
            modalCurrentIndex = animeCategory.indexOf(this);
            
          }
        })
      })
      
      modelCategory.forEach(image =>{
        image.addEventListener("click", function () {
          if (Website.modalBox.classList == "close") {
            Website.modalBox.classList.replace("close", "open");
            Website.body.classList.add("no-scroll");
            //Website.ModalImage.src = this.src;
            Website.ModalImage.src = images.images2[modelCategory.indexOf(this)].lowRezSrc;
            modalCurrentIndex = modelCategory.indexOf(this);
          }
        })
      })
    }
    imageOnClick();
    
    const modalButtons = function(btn) {
      modalRightButton.addEventListener("click", function () {
        if (Website.category_01.classList == "open-grid") {
          if (modalCurrentIndex < animeCategory.length - 1) {
            modalCurrentIndex = modalCurrentIndex + 1;
            //Website.ModalImage.src = animeCategory[modalCurrentIndex].src;
            Website.ModalImage.src = images.images1[modalCurrentIndex].lowRezSrc;
          } 
          
          else {
            modalCurrentIndex = 0;
            //Website.ModalImage.src = animeCategory[modalCurrentIndex].src;
            Website.ModalImage.src = images.images1[modalCurrentIndex].lowRezSrc;
          }
        } 
        
        else {
          if (modalCurrentIndex < modelCategory.length - 1) {
            modalCurrentIndex = modalCurrentIndex + 1;
            //Website.ModalImage.src = modelCategory[modalCurrentIndex].src;
            Website.ModalImage.src = images.images2[modalCurrentIndex].lowRezSrc;
          } 
          
          else {
            modalCurrentIndex = 0;
            //Website.ModalImage.src = modelCategory[modalCurrentIndex].src;
            Website.ModalImage.src = images.images2[modalCurrentIndex].lowRezSrc;
          }
        }
  
      });
  
      modalLeftButton.addEventListener("click", function () {
        if (Website.category_01.classList == "open-grid") {
          if (modalCurrentIndex > 0) {
            modalCurrentIndex = modalCurrentIndex - 1;
            //Website.ModalImage.src = animeCategory[modalCurrentIndex].src;
            Website.ModalImage.src = images.images1[modalCurrentIndex].lowRezSrc;
          } 
          
          else {
            modalCurrentIndex = animeCategory.length - 1;
            //Website.ModalImage.src = animeCategory[modalCurrentIndex].src;
            Website.ModalImage.src = images.images1[modalCurrentIndex].lowRezSrc;
          }
        } 
        
        else {
          if (modalCurrentIndex > 0) {
            modalCurrentIndex = modalCurrentIndex - 1;
            //Website.ModalImage.src = modelCategory[modalCurrentIndex].src;
            Website.ModalImage.src = images.images2[modalCurrentIndex].lowRezSrc;
          } 
          
          else {
            modalCurrentIndex = modelCategory.length - 1;
            //Website.ModalImage.src = modelCategory[modalCurrentIndex].src;
            Website.ModalImage.src = images.images2[modalCurrentIndex].lowRezSrc;
          }
        }
  
      });
  
      modalCloseButton.addEventListener("click", function () {
        Website.modalBox.classList.replace("open", "close");
        Website.body.classList.remove("no-scroll");
      });
  
    }//modalButtons
    modalButtons();
  }

  
  
}// Website class

//invocation
Website.toggleChangePage();
window.addEventListener("DOMContentLoaded", () => Website.renderImages());


// for(let i = 0; i < 15 ; i++){
//   console.log(
//     `
//       {
//         "title": "",
//         "name" : "image-${ i < 10 ?  "0" + (i+1) : i+1 }",
//         "photographer": "Photo by Oleg Magni from Pexels",
//         "_src" : "photos/list1/image-${ i < 10 ?  "0" + (i+1) : i+1 }.webp",
//         "id" : ${i}
//       }

//     `
//   )
// }




