var imageButtons = document.querySelectorAll(".carousel-image-button");
var mainImage = document.querySelector(".carousel-main-image");

console.log("carousel js ran")
console.log(imageButtons);
imageButtons.forEach(imageButton => {

  imageButton.addEventListener("click", e =>{
    // console.log("clicked")
    // console.log(e.target.src)

    mainImage.src = e.target.src;
  })

});