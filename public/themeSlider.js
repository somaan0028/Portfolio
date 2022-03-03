var themeContainer = document.querySelector(".dark-theme-container");
var openingBtn = document.querySelector(".opening-button");
var chevron = openingBtn.querySelector(".left-chevron");
var isMainSliderOpen = false;
var isColorPickerOpen = false;
var colorSelectorBtn = document.querySelector(".color-selector-btn");

openingBtn.addEventListener("click", (e)=>{
    if (!isMainSliderOpen) {
        // open
        themeContainer.style.transform = "translate(7rem)";
        chevron.style.transform = "rotate(180deg)";
        isMainSliderOpen = true;
        isColorPickerOpen = false;
    }else{
        // closing
        themeContainer.style.transform = "translate(100%)";
        chevron.style.transform = "rotate(0deg)";
        isMainSliderOpen = false;
        isColorPickerOpen = false;
    }
})

colorSelectorBtn.addEventListener("click", (e)=>{
    if (!isColorPickerOpen) {
        themeContainer.style.transform = "translate(0%)";
        isMainSliderOpen = true;
        isColorPickerOpen = true;
    }
})

// closing the slider when clicked outside

// document.body.addEventListener("click", (e)=>{
//     if (e.target == themeContainer || e.target == openingBtn) {
//         console.log("Click on container/button")
//     }else{

//         console.log("Click on BODY!!");
//         themeContainer.style.transform = "translate(100%)";
//         chevron.style.transform = "rotate(0deg)";
//         isMainSliderOpen = false;
//         isColorPickerOpen = false;
//     }
// })