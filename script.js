// ============================================
// MODERN PORTFOLIO - INTERACTIVE FEATURES
// ============================================

// Project Modal Data
const projectData = {
    flattrac: {
        title: "Materials Testing Equipment Restoration",
        images: [
            { src: "standing.jpg", alt: "Mane with MTS Flat Trac Machine" },
            { src: "machine tilted.png", alt: "Machine Tilted View" },
            { src: "ladder.png", alt: "Working on the Machine" },
            { src: "group photo.png", alt: "Team Photo" }
        ],
        description: `
            <h3>What I Did</h3>
            <p>During my summer apprenticeship at Sumitomo Rubber Industries, I fully restored an 8,000+ pound MTS Flat Trac tire testing machine. This thing had been sitting inactive for years, so it needed a lot of mechanical and electrical work to get it running again.</p>
            
            <h3>The Experience</h3>
            <ul>
                <li>Got to work with Doug Milliken (co-author of Race Car Vehicle Dynamics) and Neil Rampton, which was incredible</li>
                <li>Diagnosed and fixed mechanical and electrical systems pretty much on my own</li>
                <li>Handled the logistics of taking it apart, moving it, and putting it back together</li>
                <li>Learned a ton about materials science, polymers, and how industrial equipment actually works</li>
                <li>Eventually relocated the whole machine to Serbia for continued research</li>
            </ul>
            
            <h3>Machine Specs</h3>
            <ul>
                <li>Max Load: 25,000N</li>
                <li>Max Speed: 200 kph</li>
                <li>Slip Angle: -15° to +15°</li>
                <li>Camber Range: -5° to +45°</li>
                <li>Tests: Force moment, relaxation length, cornering force, load radius</li>
            </ul>
            
            <h3>What I Learned</h3>
            <p>This project really showed me what materials testing is actually like. Working on equipment that tests tire materials gave me hands-on experience with polymers and material properties. Understanding how materials behave under stress is crucial for environmental engineering—whether it's designing sustainable materials or testing environmental impact. This experience made me way more interested in materials science.</p>
        `,
        tech: ["Materials Science", "Materials Testing", "Polymer Analysis", "Industrial Systems", "Equipment Restoration", "Team Collaboration"]
    },
    waterfiltration: {
        title: "Sustainable Water Filtration System",
        images: [
            { src: "Hand cranking(1).mp4", alt: "Hand-Crank Demonstration Video", isVideo: true },
            { src: "in_hand.jpg", alt: "Water Filtration Device in Hand" },
            { src: "Filter.jpg", alt: "Filtration System Close-up" },
            { src: "in_lab.jpg", alt: "Testing in Laboratory" }
        ],
        description: `
            <h3>Why I Built This</h3>
            <p>After seeing the Pacific Palisades wildfires, I wanted to design something that could help people get clean water during disasters. Built a portable hand-cranked water filtration device that works without electricity—just crank it and it filters water.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Creates suction without priming, so you can use it right away</li>
                <li>Hand-cranked—no electricity or batteries needed</li>
                <li>Compact and portable for emergencies</li>
                <li>Multi-stage filtration to remove contaminants</li>
                <li>Doesn't take much effort to produce clean water</li>
            </ul>
            
            <h3>How I Built It</h3>
            <ul>
                <li>Researched what people actually need during emergencies and what solutions already exist</li>
                <li>Designed the mechanical parts in CAD</li>
                <li>3D printed prototypes and tested different versions</li>
                <li>Tested filtration efficiency and flow rates in the lab</li>
                <li>Made improvements based on what worked and what didn't</li>
            </ul>
            
            <h3>What It's For</h3>
            <p>The idea is to provide clean drinking water in disaster zones or anywhere infrastructure gets compromised—especially during environmental disasters like wildfires. It's designed to be sustainable (no electricity needed) and reliable when things go wrong. This is exactly the kind of environmental engineering solution we need more of.</p>
        `,
        tech: ["Environmental Engineering", "Sustainable Design", "Water Treatment", "Emergency Response", "Prototyping", "Fluid Dynamics", "3D Printing"]
    },
    motioncontrol: {
        title: "Motion Control Robotic End-Effector",
        images: [
            { src: "CAD project - Motion control rig/Cover photo.jpg", alt: "Motion Control Rig Cover Photo" },
            { src: "CAD project - Motion control rig/second photo.jpg", alt: "Motion Control Setup" },
            { src: "CAD project - Motion control rig/first cad, after first two.jpg", alt: "CAD Design - Assembly View 1" },
            { src: "CAD project - Motion control rig/second cad.jpg", alt: "CAD Design - Assembly View 2" },
            { src: "CAD project - Motion control rig/third cad.jpg", alt: "CAD Design - Detail View 1" },
            { src: "CAD project - Motion control rig/fourth cad.jpg", alt: "CAD Design - Detail View 2" },
            { src: "CAD project - Motion control rig/fifth cad.jpg", alt: "CAD Design - Component Analysis" },
            { src: "CAD project - Motion control rig/sixth cad.jpg", alt: "CAD Design - System Integration" },
            { src: "CAD project - Motion control rig/seventh cad.jpg", alt: "CAD Design - Final Assembly" }
        ],
        description: `
            <h3>What I Built</h3>
            <p>I designed a camera mount for a discarded Denso 6-axis industrial robot that could hold a DSLR and automatically pull focus during movement. Basically turning old industrial equipment into a motion control rig for filming.</p>
            
            <h3>The Challenge</h3>
            <p>The hard part was integrating everything—an existing focus-pulling gearbox, the camera mount, and a rail system all had to work together. Plus, programming these old robots with barely any documentation was tough. Everything needed precise fitment and the different mechanical systems had to be perfectly synchronized.</p>
            
            <h3>What I Did</h3>
            <ul>
                <li>Modeled all custom parts in CATIA V5</li>
                <li>Designed brackets and adapters to connect everything</li>
                <li>Figured out the robot programming for smooth camera movements</li>
                <li>Tested and optimized for the best range of motion</li>
            </ul>
            
            <h3>Results</h3>
            <p>Got pretty smooth point-to-point motion control working. The 6th axis pulls focus automatically during camera moves. Still needs more programming optimization and the range of motion is limited by the robot's physical constraints, but it works. Biggest lesson was learning how complex systems affect project timing.</p>
        `,
        tech: ["CATIA V5", "Robotics", "Motion Control", "CAD Design", "Mechanical Assembly", "Industrial Automation", "Programming", "Precision Engineering"]
    },
    fidgetspinner: {
        title: "Fidget Spinner - Early CAD/CAM Project",
        images: [
            { src: "CAD project - Fidget Spinner/fidget spinner.jpg", alt: "Custom Fidget Spinner Design" }
        ],
        description: `
            <h3>What I Made</h3>
            <p>This was one of my first real CAD/CAM projects. I designed and machined a fidget spinner in my garage using skateboard bearings. Simple idea, but it taught me a lot about manufacturing.</p>
            
            <h3>What I Learned</h3>
            <ul>
                <li>How to use CAD software to design parts with proper tolerances</li>
                <li>CAM programming—figuring out tool paths and how to actually machine what I designed</li>
                <li>Tool selection, work-holding, and dealing with real materials</li>
                <li>Getting precise bearing fits so everything spins smoothly</li>
            </ul>
            
            <h3>The Process</h3>
            <p>Measured the skateboard bearings, modeled the body around them, generated tool paths, and machined it on the equipment I had access to. Then assembled and tested it.</p>
            
            <h3>Results</h3>
            <p>It worked! Maybe not perfectly balanced, but my friends were impressed I built it in my garage. More importantly, it got me hooked on mechanical design and taught me the basics that helped with bigger projects later.</p>
        `,
        tech: ["CAD Design", "CAM Programming", "CNC Machining", "Manufacturing", "Tolerancing", "Material Selection", "Precision Engineering", "Product Design"]
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
    
    // Show/hide gallery controls based on number of media items
    const modalGallery = document.querySelector('.modal-gallery');
    const prevArrow = document.querySelector('.gallery-arrow-prev');
    const nextArrow = document.querySelector('.gallery-arrow-next');
    const imageCounter = document.querySelector('.image-counter');
    
    if (project.images.length === 1) {
        // Hide all gallery controls for single images
        if (prevArrow) prevArrow.style.display = 'none';
        if (nextArrow) nextArrow.style.display = 'none';
        if (imageCounter) imageCounter.style.display = 'none';
        if (modalThumbnails) modalThumbnails.style.display = 'none';
    } else {
        // Show gallery controls for multiple images
        if (modalGallery) modalGallery.style.display = 'block';
        if (prevArrow) prevArrow.style.display = 'flex';
        if (nextArrow) nextArrow.style.display = 'flex';
        if (imageCounter) imageCounter.style.display = 'flex';
        if (modalThumbnails) modalThumbnails.style.display = 'flex';
        
        // Create thumbnails only if there are multiple images
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
    }
    
    // Set description
    modalDescription.innerHTML = project.description;
    
    // Set tech tags
    modalTech.innerHTML = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Update arrow states (only if multiple images)
    if (project.images.length > 1) {
        updateArrowStates();
    }
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
