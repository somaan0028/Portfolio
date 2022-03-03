var detailsModal = document.querySelector(".proj-detail-modal-container");
var isModalOpen = false;
var detailsButtons = document.querySelectorAll(".project-card-button");
var detailsModalExitButton = document.querySelector(".close-detailsModal-button");

var details = [
    {
        "heading": "Baatein",
        "introduction": "Baatein is a sophisticated Chat Application that can be used for one-to-one messaging. You can add friends from all across the world and chat all day long!",
        "techstack": ["React JS \nFirebase \nMaterial UI \nHTML, CSS, Javascript"],
        "description": "This app is written using modern React JS features such as Hooks and the Context API. Authentication of users is done using Firebase Authentication. Moreover, Firebase's Realtime Database is used to send and receive messages and notifications. The User Interface is mostly written in pure CSS but Material UI was also used for styling some components.",
        "image": "public/images/project1.png",
        "websiteLink": "https://baatein-43adb.web.app",
        "codeLink": "https://github.com/somaan0028/Baatein-Chat-App",
    },
    {
        "heading": "Doodle Forms",
        "introduction": "Everybody loves Google Forms. So I made its clone! You can create and maintain multiple forms, send the links to others and recieve responses!",
        "techstack": ["React JS \nNode JS / Express JS \nMongoDB \nHTML, CSS, Javascript"],
        "description": "This webapp was written in React JS using older practices such as class components, no hooks, no context API was used, The backend was written in Node JS with the Express Framework and MongoDB Atlas was used as the database. This was my first large React Project. It allows users to build forms and then send the links to others who can fill it. The results can be viewed by the original creator.",
        "image": "public/images/project2.png",
        "websiteLink": "https://doodle-forms.herokuapp.com",
        "codeLink": "https://github.com/somaan0028/doodle-forms",
    },
    {
        "heading": "Typing Dash",
        "introduction": "I'm pretty obsessed with increasing my typing speed. So I made a typing test webapp! Users can even log in to save and track their progress in the form of graphs!",
        "techstack": ["Vanilla JS \nNode JS / Express JS \nMongoDB \nHTML, CSS"],
        "description": "I was using different websites to check my typing speed and eventually decided to code my own, leading to the birth of \"Typing Dash\". The frontend is written in Vanilla Javascript while the backend uses Node JS, more specifically, the Express JS Framework. Passport JS has been used to provide the Oauth 2.0 functionality. As the user record gets saved after taking a test, it gets displayed in the form of a graph, for which the Chart.js library was used.",
        "image": "public/images/project3.png",
        "websiteLink": "https://typing-dash.herokuapp.com",
        "codeLink": "https://github.com/somaan0028/typing-dash",
    },
    {
        "heading": "Drawey",
        "introduction": "This is a Real-Time Whiteboard Collaboration Webapp made using sockets! Multiple people can view and edit a whiteboard at the same time. This is my personal favourite project!",
        "techstack": ["Vanilla JS \nSocket.io \nSASS \nHTML"],
        "description": "During the Covid Pandamic, a lot of teachers were using online Realtime Whiteboards to teach their students which inspired me to try my hand at making such a website. It has been written entirely in Vanilla Javascript. Websockets have been used to allow users to collaborate on the same whiteboard and see eachother's writings in realtime. No outside library was used to build the whiteboard. The toughest part was coding the 'zoom' and the 'pan' function but I was eventually successful in doing so.",
        "image": "public/images/project4.png",
        "websiteLink": "https://drawey.herokuapp.com",
        "codeLink": "https://github.com/somaan0028/drawey",
    }
]

function openModal(index){
    detailsModal.classList.remove("hidden");
    isModalOpen = true;
    // console.log(detailsModal.querySelectorAll(".detailsModal-heading"));
    detailsModal.querySelectorAll(".detailsModal-heading")[0].innerHTML = detailsModal.querySelectorAll(".detailsModal-heading")[1].innerHTML = details[index].heading;
    detailsModal.querySelector(".detailsModal-introduction").innerHTML = details[index].introduction;
    detailsModal.querySelector(".detailsModal-techstack").innerHTML = details[index].techstack;
    detailsModal.querySelector(".detailsModal-description").innerHTML = details[index].description;
    detailsModal.querySelector(".detailsModal-image").src = details[index].image;
    detailsModal.querySelector(".detailsModal-websiteLink").href = details[index].websiteLink;
    // detailsModal.querySelector(".detailsModal-websiteLink").href = "https://baatein-43adb.web.app";
    detailsModal.querySelector(".detailsModal-codeLink").href = details[index].codeLink;
}

function closeModal(){
    detailsModal.classList.add("hidden");
    isModalOpen = false;
}

detailsButtons.forEach((button, index)=>{
    button.addEventListener("click", (e)=>{
        console.log(index);
        openModal(index)

    })
})

detailsModalExitButton.addEventListener("click", ()=>{
    closeModal();
})