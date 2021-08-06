import { categoryArray } from "./renderUpdate.js";
import { ModalImage, photoLink, photographer } from "./Elements.js";
import ImageData from "./ImageData.js";

export let modalCurrentIndex = 0;

export function modifyModalCurrentIndex(value){
    modalCurrentIndex = value;
}

const navigateToModalImage = function(direction) {
    if(direction === "left"){
      modalCurrentIndex > 0 ? modalCurrentIndex -= 1 :  modalCurrentIndex = categoryArray.length - 1;
    }else{
      modalCurrentIndex < categoryArray.length - 1 ? modalCurrentIndex += 1 : modalCurrentIndex = 0;
    }
    if(window.innerWidth > 1900){
      ModalImage.src = ImageData.src[modalCurrentIndex].original;
    }
    else if(window.innerWidth > 1400){
      ModalImage.src = ImageData.src[modalCurrentIndex].large2x;
    }else if(window.innerWidth > 700){
      ModalImage.src = ImageData.src[modalCurrentIndex].large;
    }else if(window.innerWidth < 700){
      ModalImage.src = ImageData.src[modalCurrentIndex].medium;
    }

    photoLink.href = ImageData.url[modalCurrentIndex];
    photographer.href = ImageData.photographer_url[modalCurrentIndex];
    photographer.innerHTML = ImageData.photographer[modalCurrentIndex];

};

export default navigateToModalImage;