import { modalImage, photoLink, photographer, categoryArray } from "./globalVars.js";
import ImageData from "./ImageData.js";

export let modalCurrentIndex = 0;

export const setModalCurrentIndex = value => modalCurrentIndex = value;

const navigateToModalImage = function(direction) {
  if(direction === "left"){
    modalCurrentIndex > 0 ? modalCurrentIndex -= 1 :  modalCurrentIndex = categoryArray.length - 1;
  }else{
    modalCurrentIndex < categoryArray.length - 1 ? modalCurrentIndex += 1 : modalCurrentIndex = 0;
  }
  if(window.innerWidth > 1900){
    modalImage.src = ImageData.src[modalCurrentIndex].original;
  }
  else if(window.innerWidth > 1400){
    modalImage.src = ImageData.src[modalCurrentIndex].large2x;
  }else if(window.innerWidth > 700){
    modalImage.src = ImageData.src[modalCurrentIndex].large;
  }else if(window.innerWidth < 700){
    modalImage.src = ImageData.src[modalCurrentIndex].medium;
  }

  photoLink.href = ImageData.url[modalCurrentIndex];
  photographer.href = ImageData.photographer_url[modalCurrentIndex];
  photographer.innerHTML = ImageData.photographer[modalCurrentIndex];

};

export default navigateToModalImage;