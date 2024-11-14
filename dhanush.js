document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");

  // Check for previously saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeToggleButton.textContent =
      savedTheme === "dark" ? "Light Mode" : "Dark Mode";
  }

  // Toggle dark/light mode
  themeToggleButton.addEventListener("click", () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggleButton.textContent =
      newTheme === "dark" ? "Light Mode" : "Dark Mode";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");

  // 1. Dark/Light Mode Toggle with Local Storage
  // Get the button and current theme
  const button = document.getElementById("theme-toggle");
  let currentTheme = localStorage.getItem("theme") || "light";

  // Set initial theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  button.innerText = currentTheme === "dark" ? "Light Mode" : "Dark Mode";

  // Toggle theme on button click
  button.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
    button.innerText = currentTheme === "dark" ? "light Mode" : "Dark Mode";
  });

  // 2. Smooth Scroll for Navbar Links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // 3. Scroll Animations
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.25,
  };

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealOnScroll.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    section.classList.add("hidden");
    revealOnScroll.observe(section);
  });

  // 4. Neon Button Animation
  const neonButtons = document.querySelectorAll(".neon-button");
  neonButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.classList.add("neon-glow");
    });
    button.addEventListener("mouseleave", () => {
      button.classList.remove("neon-glow");
    });
  });

  // 5. Project Card Hover Effect
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });

  // 6. Testimonials Carousel
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonial = 0;

  const showTestimonial = (index) => {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
    });
  };

  const nextTestimonial = () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  };

  setInterval(nextTestimonial, 4000); // Auto-switch testimonials every 4 seconds
});
