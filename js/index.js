const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav

let navBar = document.querySelectorAll('nav a');
navBar.forEach(function(element, index) {
  element.textContent = siteContent['nav']['nav-item-' + (index + 1)];
})

// CTA

let ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];

// Main

let middleContentH4 = document.querySelectorAll('.text-content h4');
let middleContentText = document.querySelectorAll('.text-content p');

let h4Array = [];
let midContentArr = [];
for (let key in siteContent['main-content']) {
  if (key.includes('h4')) {
    h4Array.push(siteContent['main-content'][key])
  } else if (!key.includes('img') && !key.includes('h4')){
    midContentArr.push(siteContent['main-content'][key])
  }
}

middleContentH4.forEach(function(element, index) {
  element.textContent = h4Array[index];
})

middleContentText.forEach(function(element, index) {
  element.textContent = midContentArr[index];
})

let middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];

// Contact

let contactArray = Object.values(siteContent['contact']);

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo.forEach(function(element, index) {
  element.textContent = contactArray[index + 1];
})

let firstParagraph = document.querySelector('.contact p');

let lineBreak = document.createElement("br"); 

let contactSection = document.querySelector(".contact").parentNode;

contactSection.insertBefore(lineBreak, firstParagraph.nextSibling);

// Footer

let copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];



