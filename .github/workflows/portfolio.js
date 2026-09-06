/* ==========================================================================
   Portfolio Interactive Scripts
   ========================================================================== */

// 1. Function with parameters: Displays dynamic tooltip on hover
function showTooltip(event, message) {
    let tooltip = document.getElementById("custom-tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "custom-tooltip";
        tooltip.style.position = "fixed";
        tooltip.style.background = "var(--bg-card)";
        tooltip.style.border = "1px solid var(--accent-cyan)";
        tooltip.style.color = "var(--accent-cyan)";
        tooltip.style.padding = "4px 8px";
        tooltip.style.borderRadius = "4px";
        tooltip.style.fontFamily = "var(--font-code)";
        tooltip.style.fontSize = "0.75rem";
        tooltip.style.pointerEvents = "none";
        tooltip.style.zIndex = "1000";
        document.body.appendChild(tooltip);
    }
    tooltip.textContent = message;
    tooltip.style.left = `${event.clientX + 10}px`;
    tooltip.style.top = `${event.clientY + 10}px`;
    tooltip.style.display = "block";
}

// Helper function to hide tooltip
function hideTooltip() {
    const tooltip = document.getElementById("custom-tooltip");
    if (tooltip) tooltip.style.display = "none";
}

// 2. Function with parameter: Pulse effect on click
function triggerPulse(element) {
    element.style.transition = "transform 0.15s ease, box-shadow 0.15s ease";
    element.style.transform = "scale(1.08)";
    element.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.8)";
    
    setTimeout(() => {
        element.style.transform = "scale(1)";
        element.style.boxShadow = "none";
    }, 200);
}

// 3. Function without parameters: Highlights education cards on double click
function toggleCardHighlight() {
    // Aligned class name with portfolio.css (.active-card)
    this.classList.toggle("active-card");
}

// 4. Function with parameters: Interactive tilt effect following mouse movement
function apply3DTilt(event, card) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
}

// 5. Function with parameter: Resets 3D tilt when mouse leaves
function resetTilt(card) {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
}


/* ==========================================================================
   UI Event Bindings (Mouse Events)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // Mouse Event 1: 'mouseenter' & 'mouseleave' bound to Tech Stack tags
    const techTags = document.querySelectorAll(".tech-tag");
    techTags.forEach(tag => {
        tag.addEventListener("mouseenter", (e) => showTooltip(e, `Skill: ${tag.textContent}`));
        tag.addEventListener("mouseleave", hideTooltip);
    });

    // Mouse Event 2: 'click' bound to Explore System & Contact buttons
    const interactiveBtns = document.querySelectorAll(".cyber-btn, .contact-btn");
    interactiveBtns.forEach(btn => {
        btn.addEventListener("click", () => triggerPulse(btn));
    });

    // Mouse Event 3: 'dblclick' bound to Education content blocks
    const eduBlocks = document.querySelectorAll(".edu-content");
    eduBlocks.forEach(block => {
        block.style.cursor = "pointer";
        block.addEventListener("dblclick", toggleCardHighlight);
    });

    // Mouse Event 4 & 5: 'mousemove' & 'mouseleave' bound to Profile Card for 3D Effect
    const profileCard = document.querySelector(".profile-card");
    if (profileCard) {
        profileCard.style.transition = "transform 0.1s ease";
        profileCard.addEventListener("mousemove", (e) => apply3DTilt(e, profileCard));
        profileCard.addEventListener("mouseleave", () => resetTilt(profileCard));
    }
});