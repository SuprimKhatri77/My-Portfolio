const navElement = document.querySelector("nav");
const navLinks = document.querySelectorAll("a");
const section = document.querySelectorAll("section");
// console.log(section);

const activeLink = ()=>{
    navLinks.forEach((link)=>{
        link.parentElement.classList.remove("active");
    })
}

const hideSeciton = ()=>{
    section.forEach((item)=>{
        item.classList.add("hidden");
    })
}

navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        activeLink();
        hideSeciton();
        link.parentElement.classList.add("active");
        const sections = document.querySelector(link.hash);
        sections.classList.remove("hidden");
    })
})