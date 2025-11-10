const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
}

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll(".fade-in");

// Función para activar elementos .fade-in visibles
function fadeInOnScroll() {
  const els = document.querySelectorAll(".fade-in");
  const offset = 100;
  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight - offset && r.bottom > 0) {
      el.classList.add("active");
    }
  });
}

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // deja de observar para no recalcular
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.05,
    }
  );

  fadeElements.forEach((el) => io.observe(el));
} 

// Debounce correcto: llamar a fadeInOnScroll periódicamente si es necesario
let scrollTimeout;
window.addEventListener(
  "scroll",
  () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      fadeInOnScroll();
    }, 100);
  },
  { passive: true }
);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("open");
      menuBtn.classList.remove("open");
    }

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Crea el efecto de las partículas flotantes
function createParticlesIndex() {
  const sections = document.querySelectorAll(".gradient-bg");

  sections.forEach((section) => {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;

      // Random animation
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;

      section.appendChild(particle);
    }
  });
}

// Crea el efecto de las partículas flotantes
function createParticlesOthers() {
  const sections = document.querySelectorAll(".gradient-bg-other");

  sections.forEach((section) => {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;

      // Random animation
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;

      section.appendChild(particle);
    }
  });
}

createParticlesIndex()
createParticlesOthers();

// Tab functionality for clients section
const tabWebsites = document.getElementById('tab-websites');
const tabSocial = document.getElementById('tab-social'); 
const websitesContent = document.getElementById('websites-content'); 
const socialContent = document.getElementById('social-content'); 

function activarTab(tabActiva, tabInactiva, contenidoMostrar, contenidoOcultar) {
  tabActiva.classList.add("active");
  tabInactiva.classList.remove("active");
  contenidoMostrar.classList.remove("hidden");
  contenidoOcultar.classList.add("hidden");
  fadeInOnScroll();
}

if (tabWebsites && tabSocial && websitesContent && socialContent) {
  tabWebsites.addEventListener("click", () => {
    activarTab(tabWebsites, tabSocial, websitesContent, socialContent);
  });

  tabSocial.addEventListener("click", () => {
    activarTab(tabSocial, tabWebsites, socialContent, websitesContent);
  });
}
