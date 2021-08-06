import updateValue from "./updateValue.js";
import { initialSearch } from "./ConstantData.js";
import renderUpdate from "./renderUpdate.js";
export let lastCalled = 0;
export let delay = 500;
export let totalImages = 32;
export let requestedPage = 2;

const getData = async () =>{
      

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