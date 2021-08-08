import { banner, category, initialSearch } from "./globalVars.js" 
let totalRendered = 0;

async function updateValue(url) {

  //if no more images to load, don't trigger the infinite scroll
  if(banner.innerHTML.includes('No more images to load')) return;

  const searchInput = document.getElementById("search-input");
  
  if(initialSearch === ""){
    banner.innerHTML = "Your search is empty"
    return
  }
  const res = await fetch(url,{
    headers: {
      Authorization: "563492ad6f9170000100000123ebb2ef16c445f496c949542eaf75aa"
    }
  });
  
  if(res.status == 429){
    alert('We have reached the maximum request possible, please wait for a while. ')
    searchInput.disabled = true;

    
  }
  if(res.status != 200){
    throw new Error("Failed to retrieve the data");

  }

  const data = await  res.json();
  totalRendered += data.photos.length;

  if(totalRendered !=0 && totalRendered == data.total_results){
    
    banner.innerHTML = `No more images to load. total search result: ${data.total_results}`

  }

  else if(data.photos.length == 0){
    banner.innerHTML = `zero search result for : "${initialSearch}"`
    category.innerHTML = `<p> zero search result for : "${initialSearch}"</p>`
  }

  searchInput.value = "";
  return data
}

export default updateValue;