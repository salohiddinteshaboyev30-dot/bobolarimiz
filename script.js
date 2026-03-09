// ELEMENTLAR

const container = document.getElementById("container");
const search = document.getElementById("search");

const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");

const voiceBtn = document.getElementById("voiceBtn");


// MENU TOGGLE

menuBtn.onclick = () => {

menuPanel.style.display =
menuPanel.style.display === "block" ? "none" : "block";

};


// TRANSLATE MENU

function toggleTranslate(){

const menu = document.getElementById("translateMenu");

menu.style.display =
menu.style.display === "block" ? "none" : "block";

}


// FILTER MENU

function toggleFilter(){

const menu = document.getElementById("filterMenu");

menu.style.display =
menu.style.display === "block" ? "none" : "block";

}


// SAHIFALAR MENU

function togglePages(){

const menu=document.getElementById("pagesMenu");

menu.style.display =
menu.style.display==="block" ? "none" : "block";

}

function openPage(page){

window.location.href = page;

}

function openPay(type){

window.location.href = "pay.html?page=" + type;

}

// SAHIFA OCHISH

function openPage(page){

window.location.href = page;

}


// TARJIMALAR

const translations = {

uz:{
title:"Bobo Kalonlarimiz",
search:"Bobo kalon nomini yozing..."
},

en:{
title:"Great Ancestors",
search:"Type ancestor name..."
},

ru:{
title:"Великие предки",
search:"Введите имя..."
},

ar:{
title:"أسلافنا العظماء",
search:"اكتب اسم السلف"
}

};


// TILNI O'ZGARTIRISH

function changeLang(lang){

document.getElementById("title").innerText =
translations[lang].title;

search.placeholder =
translations[lang].search;

}


// CARDLARNI CHIQARISH

function showCards(list){

container.innerHTML = "";

list.forEach(name => {

const card = document.createElement("div");

card.className = "card";

let img = images[name] ||
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/No_Image_Available.jpg/240px-No_Image_Available.jpg";

card.innerHTML = `
<img src="${img}">
<div class="name">${name}</div>
`;

card.onclick = () => {

window.open("https://uz.wikipedia.org/wiki/" + name.replaceAll(" ","_"));

};

container.appendChild(card);

});

}


// QIDIRUV

search.addEventListener("keyup", () => {

let value = search.value.toLowerCase();

let filtered = bobolar.filter(person =>
person.toLowerCase().includes(value)
);

showCards(filtered);

});


// FILTER

function filterPeople(type){

if(type === "all"){
showCards(bobolar);
return;
}

let filtered = bobolar.filter(name =>
categories[name] === type
);

showCards(filtered);

}


// OVOZLI QIDIRUV

if ('webkitSpeechRecognition' in window){

const recognition = new webkitSpeechRecognition();

recognition.lang = "uz-UZ";

voiceBtn.onclick = () => {

recognition.start();

};

recognition.onresult = (event) => {

let text = event.results[0][0].transcript;

search.value = text;

search.dispatchEvent(new Event("keyup"));

};

}else{

voiceBtn.style.display = "none";

}


// SAHIFA BOSHLANGANDA CARDLARNI KO'RSATISH

if(typeof bobolar !== "undefined"){

showCards(bobolar);

}