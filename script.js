document.addEventListener('DOMContentLoaded', () => {

    // --- Translations ---
    const translations = {
        en: {
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact Me",
            hero_greeting: "Hello, I am",
            hero_name: "Amal",
            hero_desc: "Building high-performance, cross-platform Android & iOS applications with a focus on UI/UX excellence.",
            hero_btn_projects: "View Projects",
            hero_btn_contact: "Contact Me",
            section_about: "About_Me",
            about_title: "Flutter Developer",
            about_desc_1: "I specialize in",
            about_desc_2: ", transforming complex requirements into smooth, efficient, and visually stunning mobile applications.",
            about_desc_3: "My focus is on",
            about_desc_4: ", and delivering a premium user experience.",
            section_skills: "Tech_Stack",
            skill_state_mgmt: "State Mgmt",
            skill_backend: "Backend",
            skill_tools: "Tools",
            section_projects: "My_Projects",
            project_1_title: "Hash Plus",
            project_1_desc: "A comprehensive e-commerce application featuring a modern UI, cart management, and seamless navigation.",
            project_ecommerce: "E-Commerce",
            btn_view_code: "View Code",
            project_2_title: "Healthy Food",
            project_2_desc: "An app promoting healthy eating habits with calorie tracking and meal suggestions.",
            project_ui_design: "UI Design",
            project_grid_layout: "Grid Layout",
            project_3_title: "Water Tracker",
            project_3_desc: "Daily water intake tracking with reminders and history statistics.",
            project_local_storage: "Local Storage",
            project_notifications: "Notifications",
            footer_text: "Designed & Built by"
        },
        ar: {
            nav_about: "من أنا",
            nav_skills: "مهاراتي",
            nav_projects: "أعمالي",
            nav_contact: "تواصل معي",
            hero_greeting: "مرحباً، أنا",
            hero_name: "أمل",
            hero_desc: "أقوم ببناء تطبيقات عالية الأداء لنظامي Android و iOS مع التركيز على تجربة مستخدم متميزة وتصميم إبداعي.",
            hero_btn_projects: "تصفح أعمالي",
            hero_btn_contact: "تواصل معي",
            section_about: "من_أنا",
            about_title: "مطورة فلاتر",
            about_desc_1: "أتخصص في",
            about_desc_2: "، وأقوم بتحويل المتطلبات المعقدة إلى تطبيقات سلسة، فعالة، وجذابة بصرياً.",
            about_desc_3: "تركيزي ينصب على",
            about_desc_4: "، وتقديم تجربة استخدام استثنائية.",
            section_skills: "مهاراتي_التقنية",
            skill_state_mgmt: "إدارة الحالة",
            skill_backend: "الخلفية البرمجية",
            skill_tools: "الأدوات",
            section_projects: "معرض_أعمالي",
            project_1_title: "هاش بلس",
            project_1_desc: "تطبيق تجارة إلكترونية شامل يتميز بواجهة عصرية، إدارة سلة التسوق، وتصفح سلس.",
            project_ecommerce: "تجارة إلكترونية",
            btn_view_code: "عرض الكود",
            project_2_title: "طعام صحي",
            project_2_desc: "تطبيق يروج لعادات الأكل الصحية مع تتبع السعرات الحرارية واقتراحات للوجبات.",
            project_ui_design: "تصميم واجهات",
            project_grid_layout: "تخطيط شبكي",
            project_3_title: "متتبع الماء",
            project_3_desc: "تتبع شرب الماء اليومي مع تذكيرات وإحصائيات تاريخية.",
            project_local_storage: "تخزين محلي",
            project_notifications: "إشعارات",
            footer_text: "تصميم وتطوير"
        }
    };

    const phrases = {
        en: ["Flutter Developer", "UI Focused", "App Builder"],
        ar: ["مطورة تطبيقات", "مهتمة بالتصميم", "مبتكرة حلول"]
    };

    // --- State & Elements ---
    let currentLang = localStorage.getItem('lang') || 'en';
    const langBtn = document.getElementById('lang-btn');
    const langText = document.getElementById('lang-text');

    // --- Typing Animation Variables ---
    const typingText = document.getElementById('typing-text');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let typeTimeout; // Store timeout ID to clear it when switching languages

    // --- Functions ---

    function updateContent(lang) {
        // Update basic text
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update direction and lang attribute
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update button text
        langText.textContent = lang === 'ar' ? 'EN | AR' : 'AR | EN';

        // Update typing phrases and restart animation
        clearTimeout(typeTimeout);
        phraseIndex = 0;
        charIndex = 0;
        isDeleting = false;
        type();
    }

    function changeLanguage() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('lang', currentLang);
        updateContent(currentLang);
    }

    function type() {
        const currentPhrases = phrases[currentLang];
        const currentPhrase = currentPhrases[phraseIndex];

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % currentPhrases.length;
            typeSpeed = 500; // Pause before new word
        }

        typeTimeout = setTimeout(type, typeSpeed);
    }

    // --- Event Listeners ---
    langBtn.addEventListener('click', changeLanguage);

    // --- Initialization ---
    updateContent(currentLang);


    // --- Particle System (Unchanged) ---
    const canvas = document.getElementById('particles-js');
    const ctx = canvas.getContext('2d');

    let particlesArray;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2; // Tiny particles
            this.speedX = (Math.random() * 1) - 0.5;
            this.speedY = (Math.random() * 1) - 0.5;
            this.color = 'rgba(100, 255, 218, 0.5)'; // Cyan with opacity
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Check boundaries
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        const numberOfParticles = (canvas.width * canvas.height) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();

            // Draw connections
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 255, 218, ${1 - distance / 100})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }

    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    initParticles();
    animateParticles();


    // --- Scroll Animations ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

});
