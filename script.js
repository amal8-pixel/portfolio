const projectsData = [
    {
        name: "Hash Plus",
        description: "تطبيق Flutter لعرض منتجات بواجهة عصرية. يتميز بتجربة مستخدم سلسة وتنقل بديهي بين الأقسام.",
        screens: "Home Page, Cart, Favorites, Profile",
        tech: ["Flutter", "Dart", "UI Design"],
        status: "Completed"
    },
    {
        name: "Healthy Food App",
        description: "تطبيق يعرض وجبات صحية مع السعر ونبذة عن كل طبق. يركز على العرض البصري الجذاب للطعام.",
        screens: "Splash Screen, Home Page",
        tech: ["Flutter", "Dart", "Grid Layout"],
        status: "Completed"
    },
    {
        name: "Water Tracker",
        description: "تطبيق لتتبع كمية شرب الماء اليومية وتحفيز المستخدم للوصول للهدف. تصميم بسيط وعملي.",
        screens: "Home, Tracker, Settings",
        tech: ["Flutter", "Dart", "Local Storage"],
        status: "Completed / Extendable"
    },
    {
        name: "Login System",
        description: "تنفيذ لشاشات تسجيل دخول متعددة بتصاميم مختلفة (Modern, Clean, Dark). جاهزة للربط مع Backend.",
        screens: "Login, Register, Forgot Password",
        tech: ["Flutter", "Dart", "Form Validation"],
        status: "Completed"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupMobileMenu();
});

function renderProjects() {
    const container = document.getElementById('projects-container');
    
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Generate tech tags HTML
        const techHtml = project.tech.map(t => `<span>${t}</span>`).join('');
        
        card.innerHTML = `
            <div class="project-header">
                <div class="project-icon">
                    <i class="far fa-folder"></i>
                </div>
                <div class="project-links">
                    <a href="#" aria-label="GitHub Link"><i class="fab fa-github"></i></a>
                    <a href="#" aria-label="External Link"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div class="project-body">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-desc">
                    ${project.description}<br><br>
                    <strong>الشاشات:</strong> ${project.screens}
                </p>
                <div class="project-tech-list">
                    ${techHtml}
                </div>
                <div class="project-status">
                    ${project.status}
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.navbar');
    
    if(btn && nav) {
        btn.addEventListener('click', () => {
            const isFlex = nav.style.display === 'flex';
            nav.style.display = isFlex ? 'none' : 'flex';
        });
    }
}
