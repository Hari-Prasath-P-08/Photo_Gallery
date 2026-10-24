function upDate(previewPic) {
    console.log("Mouse is hovering over an image!");

    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo() {
    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent =
        "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Page loaded! Adding tabindex to images.");

    let images = document.getElementsByClassName("preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}