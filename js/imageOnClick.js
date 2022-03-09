import { setModalCurrentIndex } from "./modalNavigation.js";
import {modalBox, body, modalImage, photographer, photoLink, categoryArray} from "./globalVars.js";
import ImageData from "./ImageData.js";

const imageOnClick = function() {

  document.getElementById("Images-container").addEventListener("click", function(e) {

    if(e.target && e.target.nodeName !== "IMG") return;

    console.log(e.target.alt);
    const image = e.target;

    if (modalBox.classList == "close") {
      modalBox.classList.replace("close", "open");
      body.classList.add("no-scroll");
      
      if(window.innerWidth > 1900) modalImage.src = ImageData.src[categoryArray.indexOf(image)].original;

      else if(window.innerWidth > 1400) modalImage.src = ImageData.src[categoryArray.indexOf(image)].large2x;

      else modalImage.src = ImageData.src[categoryArray.indexOf(image)].large;
      
      setModalCurrentIndex(categoryArray.indexOf(image));
      photoLink.href = ImageData.url[categoryArray.indexOf(image)];
      photographer.href = ImageData.photographer_url[categoryArray.indexOf(image)];
      photographer.innerHTML = ImageData.photographer[categoryArray.indexOf(image)];

    }
      
  });

}
export default imageOnClick;