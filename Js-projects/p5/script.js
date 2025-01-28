const testimonials = [
    {
        author:{
            name:"Andrew Jasper",
            image:"author-01.jpg"
        },
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, suscipit cupiditate quas consectetur eaque tempore consequuntur delectus modi laudantium facere non dolor, maxime nam voluptatum quod obcaecati ipsa natus temporibus?",
        date:"23rd May"
    },
    {
        author:{
            name:"Tobey Stark",
            image:"author-02.jpg"
        },
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, suscipit cupiditate quas consectetur eaque tempore consequuntur delectus modi laudantium facere non dolor, maxime nam voluptatum quod obcaecati ipsa natus temporibus?",
        date:"27th June"
    },
    {
        author:{
            name:"Tony Rogers",
            image:"author-03.jpg"
        },
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, suscipit cupiditate quas consectetur eaque tempore consequuntur delectus modi laudantium facere non dolor, maxime nam voluptatum quod obcaecati ipsa natus temporibus?",
        date:"23rd July"
    },
    {
        author:{
            name:"Scarlet Johanson",
            image:"author-04.jpg"
        },
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, suscipit cupiditate quas consectetur eaque tempore consequuntur delectus modi laudantium facere non dolor, maxime nam voluptatum quod obcaecati ipsa natus temporibus?",
        date:"7th May"
    }
]
const containerElement = document.querySelector(".testimonial-container");

const testimonialCard = testimonial =>{
        return `<div class="testimonial-card">
                <img src="${testimonial.author.image}">
                <h2>${testimonial.author.name}</h2>
                <p>${testimonial.text}</p>
                <date>Written On ${testimonial.date}</date>
      </div>`
}

let currentTestimonial = 0;
const nextTestimonial = ()=>{
    if(currentTestimonial < testimonials.length - 1){
        currentTestimonial++;
        updatePage();
    }
}
const prevTestimonial = ()=>{
    if(currentTestimonial > 0){
        currentTestimonial--;
        updatePage()
    }
}

const updatePage = ()=>{
    let markUp = testimonialCard(testimonials[currentTestimonial])
    if(testimonials.length > 1){
        markUp += `<nav>
            <button onclick="prevTestimonial();">Previous</button>
            <button onclick="nextTestimonial();">Next</button>
        </nav>`
    }
    containerElement.innerHTML = markUp;
}

updatePage()