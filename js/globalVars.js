export let initialSearch = new URLSearchParams(window.location.search).get("search")
export let categoryArray;
export let totalImages = 32;

export const setCategoryArray = value => categoryArray = value;

