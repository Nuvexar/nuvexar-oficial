// Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            mobileMenu.classList.toggle('hidden');
        });
        
        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Fade-in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                
                if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                    element.classList.add('active');
                }
            });
        };
        
        // Initial check for elements in view
        fadeInOnScroll();
        
        // Check on scroll
        window.addEventListener('scroll', fadeInOnScroll);
        
        // Form submission
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Simple validation
            if (name && email) {
                // In a real implementation, this would send data to a server
                alert(`¡Gracias ${name}! Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.`);
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos requeridos.');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuBtn.classList.remove('open');
                }
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Create floating particles effect
        function createParticles() {
            const sections = document.querySelectorAll('.gradient-bg');
            
            sections.forEach(section => {
                for (let i = 0; i < 20; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    
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
        
        // Initialize particles
        createParticles();