document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Typing Effect for Logo Subtitle
    const logoText = "PORTFOLIO";
    const logoContainer = document.querySelector(".logo");
    
    if (logoContainer) {
        // Keep the prompt symbol intact
        const promptSymbol = logoContainer.querySelector(".prompt-symbol")?.outerHTML || ">_ ";
        const cursor = logoContainer.querySelector(".cursor")?.outerHTML || "";
        
        let charIndex = 0;
        logoContainer.innerHTML = `${promptSymbol}<span class="typed-text"></span>${cursor}`;
        const typedSpan = logoContainer.querySelector(".typed-text");

        function typeEffect() {
            if (charIndex < logoText.length) {
                typedSpan.textContent += logoText.charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 120);
            }
        }
        typeEffect();
    }

    // 2. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a, .cyber-btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 3. Active Link Highlighting on Scroll
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.style.color = "";
            if (item.getAttribute("href") === `#${currentSection}`) {
                item.style.color = "var(--accent-cyan)";
            }
        });
    });

    // 4. Interactive Feedback for Tech Tags
    const techTags = document.querySelectorAll(".tech-tag");
    techTags.forEach(tag => {
        tag.addEventListener("click", () => {
            tag.style.transform = "scale(1.1)";
            tag.style.boxShadow = "0 0 15px rgba(0, 240, 255, 0.6)";
            setTimeout(() => {
                tag.style.transform = "scale(1)";
                tag.style.boxShadow = "none";
            }, 200);
        });
    });
});