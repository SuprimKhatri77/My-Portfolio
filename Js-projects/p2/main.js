const navElement = document.querySelector("nav");
const navBarLinks = navElement.querySelectorAll("a");

const navPosition = navElement.getBoundingClientRect().top;

window.addEventListener("scroll",()=>{
    const scrollPosition = window.scrollY;
    navElement.style.top = scrollPosition + 'px';
    navBarLinks.forEach((link)=>{
        const sectionElement = document.querySelector(link.hash);
        
    })
})

