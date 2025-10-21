// ============================================
// MODERN PORTFOLIO - INTERACTIVE FEATURES
// ============================================

// Project Modal Data
const projectData = {
    flattrac: {
        title: "MTS Flat Trac Machine Restoration",
        images: [
            { src: "standing.jpg", alt: "Mane with MTS Flat Trac Machine" },
            { src: "machine tilted.png", alt: "Machine Tilted View" },
            { src: "ladder.png", alt: "Working on the Machine" },
            { src: "group photo.png", alt: "Team Photo" }
        ],
        description: `
            <h3>Project Overview</h3>
            <p>During my summer apprenticeship at Sumitomo Rubber Industries, I had the incredible opportunity to fully restore and operate an 8,000+ pound MTS Flat Trac tire testing machine. This massive industrial equipment had been inactive for years, requiring comprehensive mechanical and electrical system restoration.</p>
            
            <h3>Key Achievements</h3>
            <ul>
                <li>Worked alongside Doug Milliken, co-author of Race Car Vehicle Dynamics</li>
                <li>Independently diagnosed and repaired complex mechanical and electrical systems</li>
                <li>Oversaw logistics of disassembling, transporting, and reassembling the system</li>
                <li>Gained hands-on experience in materials science, polymers, and industrial-scale engineering machinery</li>
                <li>Successfully relocated the machine to Serbia for continued research and experimentation</li>
            </ul>
            
            <h3>Technical Specifications</h3>
            <ul>
                <li>Maximum Load: 25,000N</li>
                <li>Maximum Speed: 200 kph</li>
                <li>Slip Angle Range: -15° to +15°</li>
                <li>Camber Range: -5° to +45°</li>
                <li>Testing Capabilities: Force Moment, Relaxation Length, Cornering Force, Static/Dynamic Load Radius</li>
            </ul>
            
            <h3>Impact & Learning</h3>
            <p>This project was truly transformative, exposing me to real-world industrial engineering challenges and giving me the confidence to tackle complex mechanical systems. The experience reinforced my passion for materials science and mechanical engineering while demonstrating my ability to work systematically through complex problems.</p>
        `,
        tech: ["Materials Science", "Mechanical Engineering", "Industrial Systems", "Hydraulics", "Electrical Systems", "Logistics", "Team Collaboration"]
    },
    waterfiltration: {
        title: "Hand-Crank Water Filtration System",
        images: [
            { src: "Hand cranking(1).mp4", alt: "Hand-Crank Demonstration Video", isVideo: true },
            { src: "in_hand.jpg", alt: "Water Filtration Device in Hand" },
            { src: "Filter.jpg", alt: "Filtration System Close-up" },
            { src: "in_lab.jpg", alt: "Testing in Laboratory" }
        ],
        description: `
            <h3>Project Overview</h3>
            <p>Designed and engineered a portable hand-cranked water filtration and purification device specifically for emergency response situations. Inspired by the Pacific Palisades wildfires, this system addresses the critical need for clean water access during natural disasters and humanitarian crises.</p>
            
            <h3>Innovation & Design</h3>
            <ul>
                <li>Creates suction without priming, enabling immediate use in emergency situations</li>
                <li>Hand-cranked mechanism requires no electricity or batteries</li>
                <li>Compact, portable design for easy transportation and deployment</li>
                <li>Multi-stage filtration system removes contaminants and pathogens</li>
                <li>Produces fresh, potable water with minimal physical effort</li>
            </ul>
            
            <h3>Engineering Process</h3>
            <ul>
                <li>Conducted research on emergency water needs and existing solutions</li>
                <li>Designed mechanical components using CAD software</li>
                <li>Prototyped using 3D printing and traditional manufacturing methods</li>
                <li>Tested filtration efficiency and flow rates in laboratory conditions</li>
                <li>Iterated design based on performance testing and user feedback</li>
            </ul>
            
            <h3>Impact & Applications</h3>
            <p>This project demonstrates practical engineering solutions for humanitarian challenges. The system can provide clean drinking water in disaster zones, remote areas, or situations where infrastructure has been compromised. The design prioritizes reliability, ease of use, and effectiveness—critical factors in emergency response scenarios.</p>
            
            <h3>Skills Demonstrated</h3>
            <p>Problem identification, mechanical design, prototyping, testing methodology, humanitarian engineering, and practical application of engineering principles to real-world challenges.</p>
        `,
        tech: ["Mechanical Design", "3D Printing", "Emergency Response", "Humanitarian Engineering", "Prototyping", "Fluid Dynamics", "Product Design"]
    }
};

// ============================================
// PROJECT MODAL FUNCTIONALITY
// ============================================

let currentModalImages = [];
let currentImageIndex = 0;

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMainImage = document.getElementById('modalMainImage');
    const modalThumbnails = document.getElementById('modalThumbnails');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');
    const currentImageSpan = document.getElementById('currentImage');
    const totalImagesSpan = document.getElementById('totalImages');
    
    // Store images globally for arrow navigation
    currentModalImages = project.images;
    currentImageIndex = 0;
    
    // Set title
    modalTitle.textContent = project.title;
    
    // Set main media (video or image)
    const firstMedia = project.images[0];
    modalMainImage.innerHTML = '';
    
    if (firstMedia.isVideo) {
        const video = document.createElement('video');
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
        video.src = firstMedia.src;
        modalMainImage.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = firstMedia.src;
        img.alt = firstMedia.alt;
        img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
        modalMainImage.appendChild(img);
    }
    
    // Set image counter
    currentImageSpan.textContent = '1';
    totalImagesSpan.textContent = project.images.length;
    
    // Show/hide arrows based on number of media items
    const modalGallery = document.querySelector('.modal-gallery');
    if (modalGallery) modalGallery.style.display = 'block';
    
    const prevArrow = document.querySelector('.gallery-arrow-prev');
    const nextArrow = document.querySelector('.gallery-arrow-next');
    if (project.images.length === 1) {
        if (prevArrow) prevArrow.style.display = 'none';
        if (nextArrow) nextArrow.style.display = 'none';
    } else {
        if (prevArrow) prevArrow.style.display = 'flex';
        if (nextArrow) nextArrow.style.display = 'flex';
    }
    
    // Create thumbnails
    modalThumbnails.innerHTML = '';
    project.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        if (image.isVideo) {
            thumbnail.innerHTML = `
                <video style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;">
                    <source src="${image.src}" type="video/quicktime">
                </video>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 2rem;">
                    <i class="fas fa-play-circle"></i>
                </div>
            `;
        } else {
            thumbnail.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        }
        thumbnail.addEventListener('click', () => switchModalImage(index));
        modalThumbnails.appendChild(thumbnail);
    });
    
    // Set description
    modalDescription.innerHTML = project.description;
    
    // Set tech tags
    modalTech.innerHTML = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Update arrow states
    updateArrowStates();
}

function switchModalImage(index) {
    if (index < 0 || index >= currentModalImages.length) return;
    
    currentImageIndex = index;
    const modalMainImage = document.getElementById('modalMainImage');
    const modalThumbnails = document.querySelectorAll('#modalThumbnails .thumbnail');
    const currentImageSpan = document.getElementById('currentImage');
    const currentMedia = currentModalImages[index];
    
    // Fade out
    modalMainImage.style.opacity = '0';
    
    setTimeout(() => {
        modalMainImage.innerHTML = '';
        
        // Create new media element
        if (currentMedia.isVideo) {
            const video = document.createElement('video');
            video.controls = true;
            video.autoplay = true;
            video.loop = true;
            video.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
            video.src = currentMedia.src;
            modalMainImage.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = currentMedia.src;
            img.alt = currentMedia.alt;
            img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
            modalMainImage.appendChild(img);
        }
        
        // Fade in
        setTimeout(() => {
            modalMainImage.style.opacity = '1';
        }, 50);
    }, 200);
    
    // Update active thumbnail
    modalThumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    // Update counter
    currentImageSpan.textContent = index + 1;
    
    // Update arrow states
    updateArrowStates();
}

function prevImage() {
    if (currentImageIndex > 0) {
        switchModalImage(currentImageIndex - 1);
    }
}

function nextImage() {
    if (currentImageIndex < currentModalImages.length - 1) {
        switchModalImage(currentImageIndex + 1);
    }
}

function updateArrowStates() {
    const prevArrow = document.querySelector('.gallery-arrow-prev');
    const nextArrow = document.querySelector('.gallery-arrow-next');
    
    if (prevArrow && nextArrow) {
        prevArrow.disabled = currentImageIndex === 0;
        nextArrow.disabled = currentImageIndex === currentModalImages.length - 1;
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    
    // Stop any playing videos
    const modalMainImage = document.getElementById('modalMainImage');
    if (modalMainImage) {
        const video = modalMainImage.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
    
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Close modal with Escape key and navigate with arrows
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('projectModal');
    if (!modal || !modal.classList.contains('show')) return;
    
    if (e.key === 'Escape') {
        closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
        prevImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
});

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile Navigation Toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger to X
            const bars = navToggle.querySelectorAll('.bar');
            if (navToggle.classList.contains('active')) {
                bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                bars[0].style.transform = '';
                bars[1].style.opacity = '1';
                bars[2].style.transform = '';
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            const bars = navToggle.querySelectorAll('.bar');
            bars[0].style.transform = '';
            bars[1].style.opacity = '1';
            bars[2].style.transform = '';
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Animate cards on scroll
    const animateElements = document.querySelectorAll(`
        .module-card, .project-card, .skill-category,
        .community-card, .activity-item, .experience-item,
        .stat, .school-info, .ap-scores
    `);
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(element);
    });
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                const suffix = text.replace(/[0-9]/g, '');
                
                let current = 0;
                const increment = number / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        stat.textContent = number + suffix;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + suffix;
                    }
                }, 30);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        statsObserver.observe(aboutSection);
    }
});

// ============================================
// CONTACT FORM
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name')?.trim();
            const email = formData.get('email')?.trim();
            const subject = formData.get('subject')?.trim();
            const message = formData.get('message')?.trim();
            
            // Validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Success
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            
            // Add button animation
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            setTimeout(() => {
                submitBtn.innerHTML = 'Send Message';
            }, 3000);
        });
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 500;
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 4000);
}

// ============================================
// PARALLAX EFFECTS
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// ============================================
// SMOOTH CURSOR FOLLOW EFFECT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor for desktop
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #6366f1;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease, opacity 0.2s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        
        function animate() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animate);
        }
        animate();
        
        // Scale cursor on hover
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.borderColor = '#f59e0b';
            });
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = '#6366f1';
            });
        });
    }
});

// ============================================
// IMAGE GALLERY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.project-photo');
    
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                
                // Fade effect
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    // Switch image source based on thumbnail
                    const images = ['standing.jpg', 'machine tilted.png', 'ladder.png', 'group photo.png'];
                    if (images[index]) {
                        mainImage.src = images[index];
                    }
                    mainImage.style.opacity = '1';
                }, 200);
            });
        });
    }
});

// ============================================
// 3D TILT EFFECT FOR CARDS (Subtle)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .community-card, .skill-category');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Much more subtle rotation - divided by 100 instead of 20
            const rotateX = (y - centerY) / 100;
            const rotateY = (centerX - x) / 100;
            
            card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
});

// ============================================
// LOADING ANIMATION
// ============================================

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 500);
    }
    
    // Trigger hero animation
    document.querySelector('.hero-content')?.classList.add('loaded');
    document.querySelector('.hero-image')?.classList.add('loaded');
});

// Create loader element
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = loader.querySelector('.loader-spinner');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top: 3px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    // Add spinner animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(loader);
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search (if you add one later)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Add search functionality here
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================

// Scroll helper functions
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

function scrollToExperience() {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
}

console.log('%c👋 Hello! ', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #475569;');
console.log('%cInterested in working together? Let\'s connect!', 'font-size: 14px; color: #10b981;');
