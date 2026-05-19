// ==================== Theme Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==================== Language Toggle ====================
const translations = {
    id: {
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.experience': 'Pengalaman',
        'nav.education': 'Pendidikan',
        'nav.skills': 'Keahlian',
        'nav.projects': 'Project',
        'nav.contact': 'Kontak',
        'hero.greeting': 'Halo, Saya',
        'hero.description': 'DevOps Engineer berpengalaman lebih dari 5 tahun di lingkungan yang serba cepat, berdedikasi untuk menerapkan teknologi mutakhir guna meningkatkan efisiensi sistem dan mempercepat kesuksesan bisnis.',
        'hero.viewProjects': 'Lihat Project',
        'hero.contactMe': 'Hubungi Saya',
        'hero.scrollDown': 'Scroll ke Bawah',
        'about.title': 'Tentang Saya',
        'about.whoAmI': 'Siapa Saya?',
        'about.desc1': 'Saya DevOps Engineer dengan pengalaman lebih dari 5 tahun dalam membangun, mengotomatisasi, dan mengelola infrastruktur aplikasi di lingkungan yang cepat dan dinamis.',
        'about.desc2': 'Berfokus pada peningkatan reliability, efisiensi deployment, dan skalabilitas sistem melalui pipeline CI/CD, scripting, containerisasi, Kubernetes, arsitektur serverless, serta manajemen infrastruktur cloud berbasis Google Cloud dan Google Kubernetes Engine.',
        'about.yearsExp': 'Tahun Pengalaman',
        'about.companies': 'Perusahaan',
        'about.majorBanks': 'Bank Besar',
        'about.downloadCV': 'Download CV',
        'experience.title': 'Pengalaman Kerja',
        'experience.avows.location': 'Project Engagement di PT Bank Raya Indonesia Tbk - Jakarta',
        'experience.avows.task1': 'Mengelola pipeline CI/CD untuk proses build, testing, dan deployment layanan frontend maupun backend',
        'experience.avows.task2': 'Mengembangkan DevOps tools untuk code scanning, diff checking, dan pengamanan file rahasia',
        'experience.avows.task3': 'Menerapkan Docker dan Kubernetes untuk menstandarisasi deployment aplikasi',
        'experience.avows.task4': 'Mengembangkan solusi serverless di Google Cloud untuk mendukung skalabilitas otomatis',
        'experience.avows.task5': 'Menangani issue production terkait konfigurasi dan deployment sistem',
        'experience.avows.task6': 'Berkolaborasi lintas tim untuk mengimplementasikan fitur sesuai target timeline',
        'experience.diksha.location': 'Project Engagement di PT Bank Rakyat Indonesia - Jakarta',
        'experience.satkomindo.location': 'Project Engagement di PT Bank Rakyat Indonesia - Jakarta',
        'experience.satkomindo.task1': 'Mengembangkan pipeline CI/CD otomatis untuk aplikasi web dan layanan backend',
        'experience.satkomindo.task2': 'Menerapkan teknologi containerisasi seperti Docker dan Kubernetes',
        'experience.satkomindo.task3': 'Menetapkan standar tertinggi untuk jaminan kualitas kode melalui pengujian unit dan proses integrasi berkelanjutan',
        'experience.satkomindo.task4': 'Konfigurasi arsitektur serverless menggunakan Google Cloud Platform',
        'experience.satkomindo.task5': 'Mengeksekusi teknik pemecahan masalah komprehensif untuk issue di production',
        'experience.multidaya.task1': 'Membangun dan menyiapkan alat dan infrastruktur pengembangan baru',
        'experience.multidaya.task2': 'Bekerja dengan pengembang dan rekan IT lainnya untuk mengawasi rilis kode',
        'experience.multidaya.task3': 'Mengidentifikasi masalah teknis dan mengembangkan CI/CD',
        'experience.multidaya.task4': 'Memantau jaringan, server, membangun dan mengkonfigurasi VPN, Firewall, Routing melalui Mikrotik',
        'experience.multidaya.task5': 'Membuat server baru berbasis container di Proxmox',
        'education.title': 'Pendidikan',
        'education.ut.name': 'Universitas Terbuka',
        'education.ut.degree': 'Program Sarjana - Semester 4',
        'education.ut.date': '2024 - Present',
        'education.ut.status': 'Sedang menempuh pendidikan secara online',
        'education.smk.name': 'SMK Negeri 7',
        'education.smk.degree': 'Teknologi Komputer dan Jaringan',
        'education.smk.date': 'Pendidikan Terakhir',
        'education.smk.status': 'Lulus dari jurusan Teknologi Komputer dan Jaringan',
        'skills.title': 'Keahlian Saya',
        'skills.os.title': 'Sistem Operasi',
        'skills.cloud.title': 'Platform Cloud',
        'skills.deployment.title': 'Deployment & CI/CD',
        'skills.security.title': 'Keamanan & Jaringan',
        'projects.title': 'Project Saya',
        'projects.devops.desc': 'Platform komprehensif untuk integrasi tools DevOps, manajemen pipeline CI/CD, dan otomatisasi infrastruktur. Dibangun untuk menyederhanakan alur kerja pengembangan dan meningkatkan efisiensi deployment.',
        'certification.title': 'Sertifikasi & Kursus',
        'contact.title': 'Hubungi Saya',
        'contact.letsChat': 'Mari diskusikan project Anda',
        'contact.desc': 'Jangan ragu untuk menghubungi saya jika ingin berkolaborasi, punya pertanyaan, atau sekedar menyapa!',
        'contact.form.name': 'Nama Anda',
        'contact.form.email': 'Email Anda',
        'contact.form.subject': 'Subjek',
        'contact.form.message': 'Pesan Anda',
        'contact.form.send': 'Kirim Pesan',
        'footer.copyright': '© 2024 Arif Ilham Perdana. Hak cipta dilindungi.'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hello, I\'m',
        'hero.description': 'Experienced DevOps Engineer with 5+ years in fast-paced environments, dedicated to implementing cutting-edge technologies to improve system efficiency and accelerate business success.',
        'hero.viewProjects': 'View Projects',
        'hero.contactMe': 'Contact Me',
        'hero.scrollDown': 'Scroll Down',
        'about.title': 'About Me',
        'about.whoAmI': 'Who am I?',
        'about.desc1': 'I\'m a DevOps Engineer with over 5 years of experience building, automating, and managing application infrastructure in fast-paced and dynamic environments.',
        'about.desc2': 'Focused on improving reliability, deployment efficiency, and system scalability through CI/CD pipelines, scripting, containerization, Kubernetes, serverless architecture, and cloud infrastructure management using Google Cloud and Google Kubernetes Engine.',
        'about.yearsExp': 'Years Experience',
        'about.companies': 'Companies',
        'about.majorBanks': 'Major Banks',
        'about.downloadCV': 'Download CV',
        'experience.title': 'Work Experience',
        'experience.avows.location': 'Project Engagement at PT Bank Raya Indonesia Tbk - Jakarta',
        'experience.avows.task1': 'Managed CI/CD pipelines for frontend and backend build, testing, and deployment processes',
        'experience.avows.task2': 'Developed DevOps tools for code scanning, diff checking, and confidential file protection',
        'experience.avows.task3': 'Implemented Docker and Kubernetes to standardize application deployment',
        'experience.avows.task4': 'Developed serverless solutions on Google Cloud to support automatic scalability',
        'experience.avows.task5': 'Resolved production issues related to system configuration and deployment',
        'experience.avows.task6': 'Collaborated across teams to implement features according to target timelines',
        'experience.diksha.location': 'Project Engagement at PT Bank Rakyat Indonesia - Jakarta',
        'experience.satkomindo.location': 'Project Engagement at PT Bank Rakyat Indonesia - Jakarta',
        'experience.satkomindo.task1': 'Developed automated CI/CD pipelines for web applications and backend services',
        'experience.satkomindo.task2': 'Implemented containerization technologies such as Docker and Kubernetes',
        'experience.satkomindo.task3': 'Established highest standards for code quality assurance through unit testing and continuous integration processes',
        'experience.satkomindo.task4': 'Configured serverless architecture using Google Cloud Platform',
        'experience.satkomindo.task5': 'Executed comprehensive troubleshooting techniques for production issues',
        'experience.multidaya.task1': 'Built and prepared new development tools and infrastructure',
        'experience.multidaya.task2': 'Worked with developers and other IT colleagues to oversee code releases',
        'experience.multidaya.task3': 'Identified technical issues and developed CI/CD solutions',
        'experience.multidaya.task4': 'Monitored networks, servers, built and configured VPN, Firewall, Routing via Mikrotik',
        'experience.multidaya.task5': 'Created new container-based servers in Proxmox',
        'education.title': 'Education',
        'education.ut.name': 'Universitas Terbuka',
        'education.ut.degree': 'Bachelor Program - 4th Semester',
        'education.ut.date': '2024 - Present',
        'education.ut.status': 'Currently pursuing an online degree',
        'education.smk.name': 'SMK Negeri 7',
        'education.smk.degree': 'Computer and Network Engineering',
        'education.smk.date': 'Latest Graduated Education',
        'education.smk.status': 'Graduated from Computer and Network Engineering major',
        'skills.title': 'My Skills',
        'skills.os.title': 'Operating Systems',
        'skills.cloud.title': 'Cloud Platform',
        'skills.deployment.title': 'Deployment & CI/CD',
        'skills.security.title': 'Security & Networking',
        'projects.title': 'My Projects',
        'projects.devops.desc': 'Comprehensive platform for DevOps tools integration, CI/CD pipeline management, and infrastructure automation. Built to streamline development workflows and improve deployment efficiency.',
        'certification.title': 'Certification & Course',
        'contact.title': 'Get In Touch',
        'contact.letsChat': 'Let\'s talk about your project',
        'contact.desc': 'Feel free to reach out if you want to collaborate, have a question, or just want to say hi!',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Your Message',
        'contact.form.send': 'Send Message',
        'footer.copyright': '© 2024 Arif Ilham Perdana. All rights reserved.'
    }
};

const langToggle = document.getElementById('langToggle');
const langText = langToggle.querySelector('.lang-text');

// Check for saved language preference or default to Indonesian
const savedLang = localStorage.getItem('lang') || 'id';
html.setAttribute('data-lang', savedLang);
html.setAttribute('lang', savedLang);
langText.textContent = savedLang === 'id' ? 'EN' : 'ID';
applyTranslations(savedLang);

langToggle.addEventListener('click', () => {
    const currentLang = html.getAttribute('data-lang');
    const newLang = currentLang === 'id' ? 'en' : 'id';

    html.setAttribute('data-lang', newLang);
    html.setAttribute('lang', newLang);
    localStorage.setItem('lang', newLang);

    // Update button text to show the OTHER language option
    langText.textContent = newLang === 'id' ? 'EN' : 'ID';

    applyTranslations(newLang);
});

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// ==================== Mobile Menu ====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==================== Scroll Animations ====================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate skill bars when visible
            if (entry.target.classList.contains('skill-card')) {
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const progress = progressBar.getAttribute('data-progress');
                    progressBar.style.width = progress + '%';
                }
            }

            // Animate stat numbers when visible
            if (entry.target.classList.contains('about-text')) {
                animateNumbers();
            }
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// ==================== Number Animation ====================
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateNumber = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };

        updateNumber();
    });
}

// ==================== Active Navigation Link ====================
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Navbar Background on Scroll ====================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--bg-primary)';
        navbar.style.boxShadow = '0 2px 20px var(--shadow-color)';
    } else {
        navbar.style.background = 'var(--bg-primary)';
        navbar.style.boxShadow = 'none';
    }
});

// ==================== Project Filter ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// ==================== Contact Form (Formspree) ====================
const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('.btn-submit');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending...';

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success
            submitBtn.querySelector('span').textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.querySelector('span').textContent = 'Send Message';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        } else {
            throw new Error('Failed to send');
        }
    } catch (error) {
        // Error
        submitBtn.querySelector('span').textContent = 'Failed to send';
        submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

        setTimeout(() => {
            submitBtn.querySelector('span').textContent = 'Send Message';
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    }
});

// ==================== Smooth Scroll for Anchor Links ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Parallax Effect on Hero ====================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;

    if (scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ==================== Typing Effect for Hero Title (Optional) ====================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// ==================== Cursor Glow Effect ====================
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-form');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ==================== Project Image Carousel ====================
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (slides.length === 0) return;

    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-advance carousel every 4 seconds
setInterval(() => {
    if (slides.length > 0) {
        changeSlide(1);
    }
}, 4000);
