// dark theme slider
var sliderContainer = document.querySelector(".dark-theme-slider-container");
var darkThemeslider = document.querySelector(".dark-theme-slider");
var marginToSlide = sliderContainer.getBoundingClientRect().height - darkThemeslider.getBoundingClientRect().height;
var isDarkThemeOn = false;

sliderContainer.addEventListener("click", (e)=>{
    console.log("clicked");
    let root = document.querySelector(':root');
    if(isDarkThemeOn){
        // turn OFF Dark Theme
        darkThemeslider.style.marginTop = "0px";
        sliderContainer.classList.remove("theme-color");
        
        root.style.setProperty('--whiteToDark', '#FFFFFF');
        root.style.setProperty('--whiteToLightDark', '#FFFFFF');
        root.style.setProperty('--darkToWhite', '#000000');
        root.style.setProperty('--textColor', '#000000');
        root.style.setProperty('--boxShadow', 'rgb(0, 0, 0, 0.31)');
        isDarkThemeOn = false;

    }else{
        // turn ON Dark Theme
        darkThemeslider.style.marginTop = marginToSlide+"px";
        sliderContainer.classList.add("theme-color");
        
        root.style.setProperty('--whiteToDark', '#121212');
        root.style.setProperty('--whiteToLightDark', '#313131');
        root.style.setProperty('--darkToWhite', '#FFFFFF');
        root.style.setProperty('--textColor', '#FFFFFF');
        root.style.setProperty('--boxShadow', '#000000');

        isDarkThemeOn = true;
    }
})