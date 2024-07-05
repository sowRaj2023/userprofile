let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let backgroundContainerEl = document.getElementById("backgroundContainer");
backgroundContainerEl.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");

let imageContainerEl = document.getElementById("imageContainer");
backgroundContainerEl.appendChild(imageContainerEl);
 
let createImg = document.createElement("img");
createImg.setAttribute("src",profileDetails.imgSrc);
createImg.classList.add("image");
imageContainerEl.appendChild(createImg);

let createHeading = document.createElement("h1");
createHeading.textContent = profileDetails.name;
createHeading.classList.add("m-4")
imageContainerEl.appendChild(createHeading);

let createPara = document.createElement("p");
createPara.textContent = "Age: " + profileDetails.age;
imageContainerEl.appendChild(createPara);

