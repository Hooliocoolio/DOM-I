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
    "features-h4": "Features",

    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4": "About",

    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4": "Services",

    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4": "Product",

    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4": "Vision",

    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



/*   SELECTOR VARIABLES  */

//  a
const navLinks = document.querySelectorAll('a');
// h1
const h1Head = document.querySelector('h1'); 
// id cta-img
const headImg = document.getElementById("cta-img");
// button
const butt = document.querySelector('button');
// h4
const h4Head = document.querySelectorAll('h4');
// p
const para = document.querySelectorAll('p');
// id middle-img"
const middleImg = document.getElementById("middle-img");

// NAV VARIABLE


// NAVIGATION ITEMS
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

// H1 HEADER VARIABLE


// HEADER DOM IS AWESOME
h1Head.textContent = siteContent['cta']['h1'];
// HEADER IMAGE
headImg.setAttribute('src', siteContent["cta"]["img-src"]);
// BUTTON CONTENT
butt.textContent = siteContent['cta']['button'];
// FEATURES HEADER
h4Head[0].textContent = siteContent['main-content']['features-h4'];
// FEATURES CONTENT 
para[0].textContent = siteContent['main-content']['features-content'];
// ABOUT HEADER
h4Head[1].textContent = siteContent['main-content']['about-h4'];
// ABOUT CONTENT
para[1].textContent = siteContent['main-content']['about-content'];
// MIDDLE IMAGE BANNER
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// SERVICES HEADER
h4Head[2].textContent = siteContent['main-content']['services-h4'];
// SERVICES CONTENT
para[2].textContent = siteContent['main-content']['services-content'];

// PRODUCT HEADER
h4Head[3].textContent = siteContent['main-content']['product-h4'];
// PRODUCT CONTENT
para[3].textContent = siteContent['main-content']['product-content'];
// VISION HEADER
h4Head[4].textContent = siteContent['main-content']['vision-h4'];
// VISION CONTENT
para[4].textContent = siteContent['main-content']['vision-content'];
// CONTACT HEADER
h4Head[5].textContent = siteContent['contact']['contact-h4'];



h4Head[5].textContent = siteContent['main-content']['contact-h4'];





















