const navElement = document.querySelector("nav");
const navLinks = document.querySelectorAll("a");
const sectionElement = document.querySelectorAll("Section");


const removeActiveLinks = ()=>{
    navLinks.forEach((link)=>{
        link.parentElement.classList.remove("active");
    })
}

const hideSections = ()=>{
    sectionElement.forEach((item)=>{
        item.classList.add("hidden");
    })
}

navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        removeActiveLinks();
        hideSections();
        link.parentElement.classList.add("active");
        const section = document.querySelector(link.hash);
        section.classList.remove("hidden");
    })
})