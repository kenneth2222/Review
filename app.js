// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "Susan Smith is a skilled web developer known for creating user-friendly, visually appealing websites. She excels in HTML, CSS, and JavaScript, enhancing online experiences.",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Anna Johnson is a talented web designer known for her innovative designs and user-friendly interfaces, enhancing online experiences with creativity and technical expertise.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Peter Jones is a diligent intern, eager to learn and contribute. His enthusiasm and dedication make him a valuable asset to any team.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Bill Anderson is a visionary leader known for his strategic insight and commitment to innovation. He inspires teams with his passion for excellence and growth.',
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial Item
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
})

//show person based on item
function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person 
nextBtn.addEventListener('click', function(){
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show previous  person 
prevBtn.addEventListener('click', function(){
  currentItem--;
  if (currentItem < reviews.length * 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//show random  person 
randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);

showPerson(currentItem);
});

