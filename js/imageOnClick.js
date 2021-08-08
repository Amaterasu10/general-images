import { setModalCurrentIndex } from "./modalNavigation.js";
import {modalBox, body, modalImage, photographer, photoLink, categoryArray} from "./globalVars.js";
import ImageData from "./ImageData.js";

const imageOnClick = function() {
  categoryArray.forEach(image =>{ 

    image.addEventListener("click", function () {

      if (modalBox.classList == "close") {
        modalBox.classList.replace("close", "open");
        body.classList.add("no-scroll");

        if(window.innerWidth > 1900){
          modalImage.src = ImageData.src[categoryArray.indexOf(this)].original;
        }else if(window.innerWidth > 1400){
          modalImage.src = ImageData.src[categoryArray.indexOf(this)].large2x;
        }else{
          modalImage.src = ImageData.src[categoryArray.indexOf(this)].large;
        }
        
        setModalCurrentIndex(categoryArray.indexOf(this));
        photoLink.href = ImageData.url[categoryArray.indexOf(this)];
        photographer.href = ImageData.photographer_url[categoryArray.indexOf(this)];
        photographer.innerHTML = ImageData.photographer[categoryArray.indexOf(this)];

      }
    }
    )
  }
  )
}
export default imageOnClick;