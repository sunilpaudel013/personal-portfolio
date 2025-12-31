// on the hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('nav-bar');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Animate skills when scrolling
const sections = document.querySelectorAll('section'); // all sections
const navLinks = document.querySelectorAll('#nav-bar a');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100; // adjust for navbar

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});
