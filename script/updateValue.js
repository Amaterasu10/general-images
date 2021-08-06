import { banner, category } from "./Elements.js" 
import { initialSearch } from "./ConstantData.js"
let totalRendered = 0;
async function updateValue(url) {

    if(banner.innerHTML.includes('No more images to load')) return;
    //console.log(url)
    const searchInput = document.getElementById("search-input");
    
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
    console.log(totalRendered)
    if(totalRendered !=0 && totalRendered == data.total_results){
      
      banner.innerHTML = `No more images to load. total search result ${data.total_results}`

    }
    else if(data.photos.length == 0){
      banner.style.position = "absolute"
      banner.style.top = "50vh"

      banner.innerHTML = `zero search result for : "${initialSearch}"`
      category.innerHTML = `<p> zero search result for : "${initialSearch}"</p>`

    }

    searchInput.value = "";
    return data
}

export default updateValue;