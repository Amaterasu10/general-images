import {  category, banner } from "./Elements.js"
import ImageData from "./ImageData.js";
import getData from "./getData.js";
import imageOnClick from "./imageOnClick.js"
import { categoryArray, setCategoryArray, initialSearch } from "./globalVars.js";

const renderUpdate = async data =>{
  let res = await data
  if(res == undefined || null) return;

  let images = res.photos
  if(images.length <= 0) return;
  
  document.getElementsByTagName('title')[0].innerHTML = ` ${res.total_results} results for ${initialSearch}`
    
  images.forEach(image => {
    
    const newImage = document.createElement('img')
    newImage.style.width = '0px';

    // window.innerWidth > 700 ? newImage.src = image.src.portrait.replace('&h=1200&w=800','&h=20&w=10') : 
    // newImage.src = image.src.tiny.replace('&h=200&w=280','&h=10&w=20');
    
    let imageTitle = image.url.substr(29)
    
    while(imageTitle.includes('-') || imageTitle.includes('/')){
      imageTitle= imageTitle.replace('-',' ')
      imageTitle= imageTitle.replace(/[0-9]/g, '')
      imageTitle= imageTitle.replace('/', '')
    }

    // newImage.height = image.height
    // newImage.width = image.width
    newImage.alt = imageTitle
    newImage.className = 'image'

    const newDiv = document.createElement('Div')
    
    newDiv.className = 'image-container'

    if(image.width > image.height){
      newDiv.classList.add('horizontal')
    }
    else if(image.width < image.height){
      newDiv.classList.add('vertical')
    }
    else{
      newDiv.classList.add('big')
    }

    newDiv.style.backgroundColor = image.avg_color;


    const newOverlayContainer = document.createElement('Div')
    const newOverlay = document.createElement('h3')
    newOverlayContainer.className = 'image-overlay'
    newOverlay.innerHTML = imageTitle
    
    newDiv.append(newImage)
    newOverlayContainer.append(newOverlay)
    newDiv.append(newOverlayContainer)
    category.append(newDiv)

    ImageData.photographer.push(image.photographer)
    ImageData.url.push(image.url)
    ImageData.photographer_url.push(image.photographer_url)

    ImageData.src.push(image.src)
    ImageData.height.push(image.height)
    ImageData.width.push(image.width)

  });


  // an array of images that are present in Images-container
  setCategoryArray(Array.from( document.querySelectorAll("#Images-container .image") ));

  const head =  document.getElementsByTagName('head')[0]
  const imgOptions = {};
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const img = entry.target;  
    img.src = ImageData.src[categoryArray.indexOf(img)].medium

    const linkImagePreloader = document.createElement('link')
    linkImagePreloader.rel = 'preload'
    

    linkImagePreloader.href = ImageData.src[categoryArray.indexOf(img)].medium

    linkImagePreloader.as = "image"         
    head.append(linkImagePreloader) 
    img.style.width = '100%';

  });
  }, imgOptions);

  let requestNow = 0;
  categoryArray.forEach((img) => {
    imgObserver.observe(img);
    requestNow++
  });

  const bannerOptions = {}
  const bannerObserver = new IntersectionObserver((entries, bannerObserver) => {

    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;          
      getData()

    });

  },bannerOptions)

  bannerObserver.observe(banner)
  if('all images are loaded and banner is visible'){
    'getdata'
  } 

  imageOnClick();

}

export default renderUpdate;