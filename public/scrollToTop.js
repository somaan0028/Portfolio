var buttonToTop = document.querySelector(".back-to-top");

buttonToTop.addEventListener("click", (e)=>{
    window.scrollTo({top: 0, behavior: 'smooth'});

    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})