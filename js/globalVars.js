export const category = document.getElementById("Images-container");

export const category_Title = document.getElementById("anime-title");

export const body = document.getElementById("body");

export const gridContainer = document.querySelector("#grid-container");

export const banner = document.querySelector('.banner');

export const modalBox = document.getElementById("modal-box");

export const modalImage = document.getElementById("modal-img");

// modal data displayer elements
export const photographer = document.getElementById('photographer');
export const photoLink = document.getElementById('photo-link');

//header search elements
export const form = document.getElementsByTagName('form');
export const input = document.getElementById("search-input");

//modal controller elements
export const modalLeftButton = document.getElementById("modal-left-btn");
export const modalRightButton = document.getElementById("modal-right-btn");
export const modalCloseButton = document.getElementById("modal-close-btn");

//nav elements
export const burgerNav = document.querySelector('.burger-nav')
export const galleryNav = document.querySelector('.gallery-nav')   
// export const burgerBars = document.querySelectorAll(".burger-nav > .bar")

export let initialSearch = new URLSearchParams(window.location.search).get("search")
export let categoryArray = [];
export let totalImages = 32;

export const setCategoryArray = value => categoryArray = value;


