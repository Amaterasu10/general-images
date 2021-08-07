import updateValue from "./updateValue.js";
import { initialSearch, totalImages } from "./globalVars.js";
import renderUpdate from "./renderUpdate.js";


let lastCalled = 0;
let delay = 500;
let requestedPage = 2;

const getData = () =>{
      
    if (lastCalled >= (Date.now() - delay)) return;

    //const nextData = await fetchNextPage(data,requestedPage)
    let res = updateValue(`https://api.pexels.com/v1/search?per_page=${totalImages}&page=${requestedPage}&query=${initialSearch}`)
    //console.log('this is the res inside getData',res)
    requestedPage++;
    //console.log(res)
    renderUpdate(res)
    lastCalled = Date.now();
}

export default getData;