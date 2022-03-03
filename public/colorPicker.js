let root = document.querySelector(':root');
var initialColor = getComputedStyle(root).getPropertyValue('--theme');

function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
    var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
    var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05)
         / (darkest + 0.05);
}

function hex2rgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

function getLowestMiddleHighest(rgbIntArray) {
    let highest = {val:-1,index:-1};
    let lowest = {val:Infinity,index:-1};

    rgbIntArray.map((val,index)=>{
        if(val>highest.val){
          highest = {val:val,index:index};
        }
        if(val<lowest.val){
          lowest = {val:val,index:index};
        }
    });

    if(lowest.index===highest.index){
    lowest.index=highest.index+1;
    }

    let middle = {index: (3 - highest.index - lowest.index)};
    middle.val = rgbIntArray[middle.index];
    return [lowest,middle,highest];
}


function lightenByTenth(rgbIntArray) {

    // const rgbIntArray = rgb.replace(/ /g, '').slice(4, -1).split(',').map(e => parseInt(e));

    // Grab the values in order of magnitude 
    // This uses the getLowestMiddleHighest function from the saturate section
    const [lowest,middle,highest]=getLowestMiddleHighest(rgbIntArray);
    
    if(lowest.val===255){
      return rgbIntArray;
    }
    
    const returnArray = [];
  
    // First work out increase on lower value
    returnArray[lowest.index]= Math.round(lowest.val+(Math.min(255-lowest.val,25.5)));
  
    // Then apply to the middle and higher values
    const increaseFraction  = (returnArray[lowest.index]-lowest.val)/ (255-lowest.val);
    returnArray[middle.index]= middle.val +(255-middle.val)*increaseFraction;
    returnArray[highest.index]= highest.val +(255-highest.val)*increaseFraction ;
    
    return returnArray;
    // Convert the array back into an rgb string
    // return (`rgb(${returnArray.join()})`);
}

function setTextColor(colorArray) {
    var contrastTextArray = document.querySelectorAll(".contrast-color");
    console.log("Now setting inline style for all")
    contrastTextArray.forEach(element => {
        element.style.color = "rgb(" + colorArray[0] + ", "+colorArray[1] + ", " + colorArray[2] + ")";
    });

}



var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 90,
    // Set the initial color to pure red
    color: "rgb(52, 211, 153)",

    wheelLightness: false
});

var contrastBarrier = 4.5;
var currentTextColor = "dark";
var currentColorArray = [0,0,0];

colorPicker.on('color:change', function(color) {
    // log the current color as a HEX string
    // console.log(hex2rgb(color.hexString));
    let rgbArray = hex2rgb(color.hexString);
    let calculatedContrast = contrast(rgbArray , currentColorArray);
    console.log(rgbArray);
    if (calculatedContrast <= contrastBarrier ) {
        if (currentTextColor == "dark") {
            // console.log("setting color to light");
            currentTextColor = "light";
            currentColorArray = [255, 255, 255];
            root.style.setProperty('--contrastColorValue', "rgb(255, 255, 255)");
            setTextColor([255, 255, 255]);
        }else{
            // console.log("setting color to dark");
            currentTextColor = "dark";
            currentColorArray = [0,0,0];
            root.style.setProperty('--contrastColorValue', "rgb(0, 0, 0)");
            setTextColor([0,0,0]);
        }
    }

    root.style.setProperty('--theme', color.hexString);
    let lighterColor = lightenByTenth(lightenByTenth(lightenByTenth(rgbArray)));
    
    let lightRGBColor = "rgb(" + Math.floor(lighterColor[0]) + ", " + Math.floor(lighterColor[1]) + ", " + Math.floor(lighterColor[2]) + ")";
    root.style.setProperty('--lighterTheme', lightRGBColor);
});

