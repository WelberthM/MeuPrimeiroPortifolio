document.addEventListener('DOMContentLoaded', () => {
    
    // === SCROLL REVEAL ANIMATION ===
    // Revela os elementos quando entram na tela
    const revealElements = document.querySelectorAll('section, .skill-card, .projeto-card');
    
    // Adiciona a classe inicial 'reveal' em elementos que queremos animar, se ainda não tiver
    revealElements.forEach(el => {
        if(!el.classList.contains('reveal') && !el.classList.contains('hero')){
           el.classList.add('reveal');
        }
    });

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Distância antes de aparecer
        
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Executa uma vez no carregamento
    revealOnScroll();
    
    // Executa durante o scroll
    window.addEventListener('scroll', revealOnScroll);


    // === STICKY HEADER EFFECT ===
    // Adiciona uma sombra na header quando scrolla para baixo
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            header.style.boxShadow = 'none';
            header.style.borderBottom = '1px solid var(--border-subtle)';
        }
    });


    // === MOBILE MENU (Basic Toggle) ===
    const mobileIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (mobileIcon) {
        mobileIcon.addEventListener('click', () => {
            // Um toggle simples, para produção idealmente adicionariamos uma classe.
            if(navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--bg-secondary)';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid var(--border-subtle)';
            }
        });
    }

});
