// Js for creating dynamic content and popup modal

// getting and assigning variables to elements
const works = document.querySelector('#works-section');
const modalPopup = document.querySelector('#modal-popup');

// creating js object
const worksObj = {
  card1: {
    featuredImage: ['./images/photos/portfolio-pic-1.png'],
    title: ['Tonic', 'Tonic'],
    type: ['CANOPY', 'Backend', '2015'],
    description: ['A daily selection of privately personalised carded reads; no accounts or sign-ups required. A daily selection of privately personalised carded reads; no accounts or sign-ups required.',
      'A daily selection of privately personalisCarded reads; no accounts or sign-ups required.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    ],
    technologies: ['Html', 'Css', 'Javascript', 'Ruby on rails', 'Ruby', 'Github', 'Bootraps'],
    details: 'See more',
    liveLink: 'See live',
    sourceLink: 'Source',
  },

  card2: {
    featuredImage: ['./images/photos/portfolio-pic-2.png', './images/photos/portfolio-pic-4.png'],
    title: ['Multi-Post Stories', 'Multi-Post Stories'],
    type: ['CANOPY', 'Backend', '2015'],
    description: ['A daily selection of privately personalised carded reads; no accounts or sign-ups required. A daily selection of privately personalised carded reads; no accounts or sign-ups required.',
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    ],
    technologies: ['Html', 'Css', 'Javascript', 'Ruby on rails', 'Ruby', 'Github', 'Bootraps'],
    details: 'See more',
    liveLink: 'See live',
    sourceLink: 'Source',
  },

  card3: {
    featuredImg: ['./images/photos/portfolio-pic-3.png', './images/photos/portfolio-pic-1.png'],
    title: ['Tonic', 'Facebook 360'],
    type: ['Canopy', 'Backend Dev', '2015'],
    description: ['A daily selection of privately personalised carded reads; no accounts or sign-ups required. A daily selection of privately personalised carded reads; no accounts or sign-ups required.',
      'Exploring the future of media in Facebook&#39;s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    ],
    technologies: ['Html', 'Css', 'Javascript', 'Ruby on rails', 'Ruby', 'Github', 'Bootraps'],
    details: 'See more',
    liveLink: 'See live',
    sourceLink: 'Source',
  },

  card4: {
    featuredImg: ['./images/photos/portfolio-pic-1.png', './images/.photos/portfolio-pic-2.png'],
    title: ['Multi-Post Stories', 'Uber Navigation'],
    type: ['Canopy', 'Backend Dev', '2015', 'Uber', 'Leader developer', '2018'],
    description: ['A daily selection of privately personalise carded reads; no accounts or sign-ups required.',
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    ],
    technologies: ['Html', 'Css', 'Javascript', 'Ruby on rails', 'Ruby', 'Github', 'Bootraps'],
    details: 'See more',
    liveLink: 'See live',
    sourceLink: 'Source',
  },
};

// give dynamic content to the works section with class works-section
works.classList.add('works-section');
works.innerHTML = `
        <!--card one -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-0">
                <img class="portfolio-img" src="${worksObj.card1.featuredImage[0]}" alt="1st-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-1"> 
                <!--project title-->
                <h2 class="pr-title">
                    ${worksObj.card1.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card1.type[0]} </li>
                    <li> ${worksObj.card1.type[1]} </li>
                    <li> ${worksObj.card1.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card1.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card1.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card1.technologies[1]} </li>
                    <li class="pr-tag">${worksObj.card1.technologies[2]}</li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a  href="#" id="card1Btn" onclick="showPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card1.details}
                    </a>
                </div>
            </div>
        </div>
        <!--card two -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-1">
                <img class="portfolio-img" src="${worksObj.card2.featuredImage[0]}" alt="2nd-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-0"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card2.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card2.type[0]} </li>
                    <li> ${worksObj.card2.type[1]} </li>
                    <li> ${worksObj.card2.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card2.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card2.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card2.technologies[1]} </li>
                    <li class="pr-tag">${worksObj.card2.technologies[2]}</li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="card2Btn" onclick="showPopup()" class="pr-call-to-action-button"> 
                    ${worksObj.card2.details}
                    </a>
                </div>
            </div>
        </div>
        <!--card three -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-0">
                <img class="portfolio-img" src="${worksObj.card3.featuredImg[0]}" alt="3rd-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-1"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card3.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card3.type[0]} </li>
                    <li> ${worksObj.card3.type[1]} </li>
                    <li> ${worksObj.card3.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card3.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card3.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card3.technologies[1]} </li>
                    <li class="pr-tag">${worksObj.card3.technologies[2]}</li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="card3Btn" onclick="showPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card3.details}
                    </a>
                </div>
            </div>
        </div>
        <!--card four -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-1">
                <img class="portfolio-img" src="${worksObj.card4.featuredImg[0]}" alt="4th-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-0"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card4.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card4.type[0]} </li>
                    <li> ${worksObj.card4.type[1]} </li>
                    <li> ${worksObj.card4.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card4.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card4.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card4.technologies[1]} </li>
                    <li class="pr-tag">${worksObj.card4.technologies[2]}</li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="card4Btn" onclick="showPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card4.details}
                    </a>
                </div>
        </div `;

// end of works section content

// declare variable modCard for each card

// function for selecting the right card, getting card content
// making card visible and event for calling popup function
function showPopup(card) {
// select the right card
  let modCard;
  if (card === 'card1Btn') {
    modCard = worksObj.card1;
  } else if (card === 'card2Btn') {
    modCard = worksObj.card2;
  } else if (card === 'card3Btn') {
    modCard = worksObj.card3;
  } else if (card === 'card4Btn') {
    modCard = worksObj.card4;
  }

  //  event and dynamic content for modal popup
  modalPopup.classList.add('modal-popup');
  modalPopup.innerHTML = `
    <div class="popup-card">
        <div class="popup-title">
            <h2 class="popup-pr-title">
                ${modCard.title[0]}
            </h2>
            <a id="popup-close-btn">
                <span class="popup-toggle">x</span>
            </a>
        </div>
        <ul class="popup-pr-type">
            <li class="no-style"> ${modCard.type[0]} </li>
            <li> ${modCard.type[1]} </li>
            <li> ${modCard.type[2]} </li>
        </ul>
        <div class="popup-pr-photo">
        <img class="popup-portfolio-img" src="${modCard.featuredImage[0]}" alt="4th portfolio photo">
        </div>
        <div class="popup-details ">
            <p class="popup-pr-desc">
                ${modCard.description[2]}.
            </p>
            <div class="popup-tech-info">
                <ul class="popup-pr-techs no-style">
                    <li class="pr-tag">${modCard.technologies[0]}</li>
                    <li class="pr-tag">${modCard.technologies[1]}</li>
                    <li class="pr-tag"> ${modCard.technologies[2]}</li>
                    <li class="pr-tag desk">${modCard.technologies[3]}</li>
                    <li class="pr-tag desk">${modCard.technologies[4]}</li>
                    <li class="pr-tag desk"> ${modCard.technologies[5]}</li>
                </ul>
                <hr class="popup-divider">
                <div class="pr-call-to-action-box popup-action-btns">
                    <a id="popup-livelink" href="https://ometman.github.io/my-portfolio" class="live-source-btns pr-call-to-action-button">
                        <p>${modCard.liveLink}</p>
                        <img src="./images/icons/live-icon.png" alt="a live icon">
                    </a>
                    <a id="popup-sourcelink" href="https://github.com/ometman/my-portfolio.git" class="live-source-btns pr-call-to-action-button">
                        <p>${modCard.sourceLink}</p>
                        <img class="github-icon-trim" src="./images/icons/github-icon.png" alt="a github icon">
                    </a>
                </div>
            </div>
        </div>
    </div> `;

  // make card visible
  modalPopup.style.visibility = 'visible';

  // event for closing popup by x toggle button
  const closeModalPopup = document.querySelector('#popup-close-btn');
  closeModalPopup.addEventListener('click', () => {
    modalPopup.style.visibility = 'hidden';
  });
}

// Now, event for calling pop function
document.querySelector('#card1Btn').addEventListener(('click'), () => {
  showPopup('card1Btn');
});
document.querySelector('#card2Btn').addEventListener(('click'), () => {
  showPopup('card2Btn');
});
document.querySelector('#card3Btn').addEventListener(('click'), () => {
  showPopup('card3Btn');
});
document.querySelector('#card4Btn').addEventListener(('click'), () => {
  showPopup('card4Btn');
});