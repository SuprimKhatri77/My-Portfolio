const dataArray = [
    {
        title:"What is JavaScript?",
        detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quia."
    },
    {
        title:"What made JavaScript?",
        detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quia."
    },
    {
        title:"How can we learn JavaScript?",
        detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quia."
    },
];

const makeHTML = (data)=>{
    return `<details>
      <summary>
       ${data.title}
      </summary>
      <p>${data.detail}</p>
    </details>`
}


const faqConatiner = document.querySelector(".faq-container");
faqConatiner.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join("");