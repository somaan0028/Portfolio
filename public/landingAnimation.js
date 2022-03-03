var blocksContainer = document.querySelector(".blocks-container");
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
console.log(screenWidth, screenHeight);
var locationArray = [];
var farOffLocations = [[-5000, 0], [screenWidth/2, -5000], [5000, 0]];
var rotationValues = [];
var numOfBlocksX = Math.floor(screenWidth/157);
// var numOfBlocksY = Math.floor(screenHeight/164);
var numOfBlocksY = Math.floor(screenHeight/135);

// console.log("Blocks: " + numOfBlocksX + " x " + numOfBlocksY);
// if (numOfBlocksX > 10 || numOfBlocksY > 6) {
//     numOfBlocksX = 10;
//     numOfBlocksY = 6;
// }
for (let y = 0; y <= numOfBlocksY; y++) {

    for (let i = 0; i <= numOfBlocksX; i++) {
        var block = document.createElement("div");
        block.classList.add("floating-card");
        // let xValue = i*150;
        // let yValue = y*150 - 50;
        let xValue = i*150 + Math.floor(Math.random() * 100) -50;
        let yValue = y*150 - 50 + Math.floor(Math.random() * 100) -50;
        
        // if(yValue <= screenHeight/2 + 100 && yValue >= screenHeight/2 - 100 && xValue >= screenWidth/2-250 && xValue <= screenWidth/2+250){
        //     console.log("Prevented: " + xValue + "  " + yValue);
        // }else{
            locationArray.push([xValue, yValue]);
            let dimensions = Math.floor(Math.random() * 75) + 50;
            block.style.width = dimensions + "px";
            block.style.height = dimensions + "px";
            let rotationValue = Math.floor(Math.random() * 90);
            rotationValues.push(rotationValue);
            block.style.transform = "translate("+ xValue + "px," + yValue + "px) rotate("+ rotationValue +"deg)";
            randomNum = Math.floor(Math.random() * 3);
            block.style.transform = "translate("+ farOffLocations[randomNum][0] + "px," + farOffLocations[randomNum][1] + "px) rotate(0deg)";
            blocksContainer.appendChild(block);
            
            window.scrollTo(0,0);
        // }
    }
}

setTimeout(()=>{
    var signatureContainer = document.querySelector(".signature-container");
    signatureContainer.style.boxShadow="0px 0px 15px 9px rgb(34, 34, 34, 0.54)";
    signatureContainer.style.border="4px solid var(--theme)";
    // document.querySelector(".signature-container").style.boxShadow="0px 0px 19px blue";

    var blocksArray = document.querySelectorAll(".floating-card");
    for (let i = 0; i < blocksArray.length; i++) {
        blocksArray[i].style.transform = "translate("+ locationArray[i][0] + "px," + locationArray[i][1] + "px) rotate("+ rotationValues[i]+"deg)";;
        
    }

    setTimeout(() => {
        document.querySelector(".profession-title").style.opacity = 1;
    }, 3000);
    
    setTimeout(()=>{

        for (let i = 0; i < blocksArray.length; i++) {
            blocksArray[i].style.transition = "1s all ease-out";
            
        }
        document.addEventListener("scroll", ()=>{
            // console.log(window.scrollY);
            for (let i = 0; i < blocksArray.length; i++) {
                if(i%2==0){
                    blocksArray[i].style.transform = "translate("+ (locationArray[i][0] - window.scrollY) + "px," + locationArray[i][1] + "px) rotate("+ rotationValues[i] +"deg)";
                    blocksArray[i].style.opacity = 1-(window.scrollY/screenHeight);
                }else{
                    blocksArray[i].style.transform = "translate("+ (locationArray[i][0] + window.scrollY) + "px," + locationArray[i][1] + "px) rotate("+ rotationValues[i] +"deg)";
                    blocksArray[i].style.opacity = 1-(window.scrollY/screenHeight);
                }
                
            }
        })
    }, 500)
    
    console.log("Timeout function ran")
}, 2000)
