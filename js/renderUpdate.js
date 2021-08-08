import ImageData from "./ImageData.js";
import getData from "./getData.js";
import imageOnClick from "./imageOnClick.js"
import { categoryArray, setCategoryArray, initialSearch, category, banner } from "./globalVars.js";

const head =  document.getElementsByTagName('head')[0]

const renderUpdate = async data =>{
  let res = await data
  if(res == undefined || null) return;

  let images = res.photos
  if(images.length <= 0) return;
  
  document.getElementsByTagName('title')[0].innerHTML = ` ${res.total_results} results for ${initialSearch}`
    let i = 1;
  images.forEach(image => {
    
    const newImage = new Image();
    
    let imageTitle = image.url.substr(29)
    
    while(imageTitle.includes('-') || imageTitle.includes('/')){
      imageTitle= imageTitle.replace('-',' ')
      imageTitle= imageTitle.replace(/[0-9]/g, '')
      imageTitle= imageTitle.replace('/', '')
    }
    
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
    
    const aspectRatio = image.width / image.height;
    
    
    newDiv.style.backgroundColor = image.avg_color;
    
    const newOverlayContainer = document.createElement('Div')
    const newOverlay = document.createElement('p')
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
    
    // const logthis =  {index:i, naturalWidth: newImage.naturalWidth, cliendWidth: newImage.clientWidth, offset: newImage.offsetWidth, width: newImage.width, naturalHeight: newImage.naturalHeight, clientH: newImage.clientHeight, offsetH: newImage.offsetHeight, height: newImage.height, aspect: aspectRatio, innerW: newImage.innerWidth, offsetW: newImage.offsetWidth, innerH: newImage.innerHeight}
    
    // console.table([logthis])
    const linkImagePreloader = document.createElement('link')
    linkImagePreloader.rel = 'preload'
    
    linkImagePreloader.href = image.src.medium
    linkImagePreloader.as = "image"         
    head.append(linkImagePreloader) 

    i++;
  });
  
  
  // an array of images that are present in Images-container
  setCategoryArray(Array.from( document.querySelectorAll("#Images-container .image") ));
  
  const imgOptions = {};
  
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const img = entry.target;  
      img.src = ImageData.src[categoryArray.indexOf(img)].medium
      
      // const logthis = [ img.naturalWidth, img.clientWidth, img.offsetWidth, img.width]
      // console.table([logthis])
      // console.log(i, img.naturalHeight, img.clientHeight, img.offsetHeight, img.height)
      // console.log( img.innerWidth, img.offsetWidth, img.innerHeight)
      
      
      
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