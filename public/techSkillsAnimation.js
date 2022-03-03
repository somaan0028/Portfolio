// move the slider and show appropriate skills list

var skillOptionsArray = document.querySelectorAll(".single-skill-option");
var slider = document.querySelector("#sliding-bar");

for (let i = 0; i < skillOptionsArray.length; i++) {
    const element = skillOptionsArray[i];
    
    element.addEventListener("click", ()=>{

        // slider.style.marginLeft = (sliderWidth*i)+"px";
        slider.style.marginLeft = element.offsetLeft+"px";
        slider.style.width = element.getBoundingClientRect().width+"px";
        // element.style.color = "white";
        // console.log(element.getBoundingClientRect().width);

        // show the list of skills
        displayBlock(i, skillsBlocksArray, false);
        displayBlock(i, techLogosArray, true);

        // give active class to clicked button
        activeClass(i, skillOptionsArray);
    })    
}

activeClass(0, skillOptionsArray);  // to initally give the class to first button

function activeClass(i, array){
    let root = document.querySelector(':root');
    for (let j = 0; j < array.length; j++) {
        let element = array[j]; 
        if (j == i) {
            element.classList.add("contrast-color");
            let contrastColorValue = getComputedStyle(root).getPropertyValue('--contrastColorValue');
            element.style.color = contrastColorValue;
            // element.style.color = "rgb(255, 0, 0)";
            console.log(contrastColorValue);
            // console.log("Applied Class of contrast-color");
        }else if(element.classList.contains("contrast-color")){
            element.classList.remove("contrast-color");
            element.setAttribute('style', '');
        }  
    }
}


// transitions for the skill boxes and icons

var skillsBlocksArray = document.querySelectorAll(".skills-category");
if(window.innerWidth < 640){
    var techLogosArray = document.querySelectorAll(".tech-logos-container-mobile");
}else{
    var techLogosArray = document.querySelectorAll(".tech-logos-container");
}    

// to initially show the frontend block
displayBlock(0, skillsBlocksArray, false);
displayBlock(0, techLogosArray, true);

function displayBlock(displayIndex, array, enterFromRight){
    // console.log("Displaying index: " + displayIndex);
    if(enterFromRight){
        var translateDistance = 50;
    }else{
        var translateDistance = -50;
    }
    for (let j = 0; j < array.length; j++) {
        if(j==displayIndex){
            array[j].style.transform = "translateX(0px)";
            array[j].style.opacity = 1;
        }else{
            if (array[j].style.transform !== "translateX("+translateDistance+"px)") {
                array[j].style.transform = "translateX("+translateDistance+"px)";
                array[j].style.opacity = 0;
            }
        }
        
    }
}