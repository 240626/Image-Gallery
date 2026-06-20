let images = [
    "seklin linkini bura elave ed ne qeder istesen elave ede bilersen , de qoy",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/BMW_M5_Competition_IMG_0799.jpg"
];

let index = 0;

loadGallery();

function loadGallery(){

    let box = document.getElementById("gallery");

    images.forEach((img,i) => {

        box.innerHTML += `<img src="${img}" onclick="openImg(${i})">`;

    });
}

function openImg(i){

    index = i;

    document.getElementById("modal").style.display = "flex";
    document.getElementById("bigImg").src = images[index];
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

function next(){

    index++;

    if(index >= images.length){
        index = 0;
    }

    document.getElementById("bigImg").src = images[index];
}

function prev(){

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    document.getElementById("bigImg").src = images[index];
}
