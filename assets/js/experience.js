AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Yield Improvement Intern",
    cardImage: "assets/images/experience-page/JSPL.jfif",
    place: "JSPL",
    time: "(May, 2024 - July, 2024)",
    desp: "<li>  Worked on Yield improvement Project aimed at enhancing production efficiency and reducing waste at Special Profile Mill.</li> <li> Implemented Six Sigma methodology ( DMAIC), leading to a measurable improvement in yield.</li> <li> Conducted thorough data analysis to identify sections and processes with major losses. Work closely with various departments including production , quality Control and engineering and Proposed action plan to improve yield by 1 %.</li>",
  },
  {
    title: "Financial Market Analyst",
    cardImage: "assets/images/experience-page/Finlatics.jfif",
    place: "Finlatics",
    time: "(Jan, 2022 - May, 2022)",
    desp: "<li> Managed and optimized a personal stock portfolio, achieving consistent returns through strategic investments.</li><li> Conducted SWOT analysis for four companies across two different sectors to evaluate their strengths, weaknesses, opportunities, and threats.</li><li> Analyzed economic data and corporate financial statements to inform investment strategies.</li>",
  },
   
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "General Secretary",
    cardImage: "assets/images/experience-page/NSS_MNIT.jpg",
    description:
      "Managing club events and contributing to social work.",
  },
  {
    title: "Student Placement Coordinator",
    cardImage: "assets/images/experience-page/MNIT.jpg",
    description:
      "Coordinating Traning seminars and placement drives at NIT Jaipur.",
  },
  {
    title: "Volunteer Member, ISKCON GIRLS FORUM , Jaipur",
    cardImage: "assets/images/experience-page/iskcon_logo.jpg",
    description:
      "Mentoring and empowering girls for their spiritual and intellectual  growth",
  },
   
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "SAE Competition",
    subtitle: "Member",
    image: "assets/images/experience-page/sae.png",
    desp: "I was member of suspension department of SAE club. I was engaged in developing suspension system for ATV.",
    href: "https://docs.google.com/presentation/d/1Vr764QaR6dpc_SiId9Z5o1muEGCpAnO_/edit?usp=sharing&ouid=105556550842054908195&rtpof=true&sd=true",
  },
       
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
