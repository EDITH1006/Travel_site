'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elems) {
  for (const el of elems) {
    if (!el) continue;
    el.addEventListener('click', () => {
      // toggle navbar and overlay visibility
      navbar?.classList.toggle('active');
      overlay?.classList.toggle('active');
    });
  }
};

navToggleEvent(navElemArr);

// Close navbar when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbar?.classList.remove('active');
    overlay?.classList.remove('active');
  });
});


/**
 * header active on scroll + go top button
 */

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    header?.classList.add('active');
    goTopBtn?.classList.add('active');
  } else {
    header?.classList.remove('active');
    goTopBtn?.classList.remove('active');
  }
});