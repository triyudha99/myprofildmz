// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
});

function updateThemeIcons(theme) {
    if (theme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}
document.querySelectorAll(".nav-item, .mobile-nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
        const text = btn.textContent.trim().toUpperCase();

        const sections = {
            "HOME": "home-section",
            "ABOUT ME": "about-section",
            "MY WORKS": "works-section",
            "CONTACT": "contact-section"
        };

        const id = sections[text];
        if (id) {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// foto

const btn = document.getElementById("profile-image-btn");
const img = document.getElementById("about-profile-img");

// let toggle = false;

const images = [
    "profil/gambarwebbirutr.png",
    "profil/fotoweb2.png",
    "profil/Fotoweb1.png"
];

let index = 0;

btn.addEventListener("click", ()=>{
    index = (index + 1) % images.length;
    img.src = images[index];
});
// mobile sidebar
document.addEventListener("DOMContentLoaded",()=>{

    const btn = document.getElementById("hamburger-btn");
    const icon = document.getElementById("hamburger-icon");
    const sidebar = document.getElementById("mobile-sidebar");
    const overlay = document.getElementById("mobile-overlay");
    
    btn.addEventListener("click",()=>{
    
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    
        if(sidebar.classList.contains("active")){
            icon.src = icon.dataset.close;
        }else{
            icon.src = icon.dataset.open;
        }
    });
    
    overlay.addEventListener("click",()=>{
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        icon.src = icon.dataset.open;
    });
    
    });