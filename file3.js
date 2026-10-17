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