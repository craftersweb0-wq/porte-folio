// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const nav = document.getElementById("nav")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  nav.classList.toggle("active")
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    nav.classList.remove("active")
  })
})

// Header scroll effect
const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all animated elements
const animatedElements = document.querySelectorAll(".animate-fade-up")
animatedElements.forEach((el) => observer.observe(el))

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Contact form submission
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  // Here you would normally send the data to a server
  console.log("Form submitted:", formData)

  // Show success message
  alert("Merci pour votre message ! Nous vous contacterons bientôt.")

  // Reset form
  contactForm.reset()
})

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Animate service cards on hover
const serviceCards = document.querySelectorAll(".service-card")
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const icon = this.querySelector(".service-icon")
    icon.style.transform = "rotate(360deg) scale(1.1)"
    icon.style.transition = "transform 0.6s ease"
  })

  card.addEventListener("mouseleave", function () {
    const icon = this.querySelector(".service-icon")
    icon.style.transform = "rotate(0deg) scale(1)"
  })
})

// Counter animation for workflow steps
const stepNumbers = document.querySelectorAll(".step-number")
const animateCounter = (element) => {
  const target = Number.parseInt(element.textContent)
  let current = 0
  const increment = target / 30
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current)
    }
  }, 30)
}

const stepObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        stepObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

stepNumbers.forEach((step) => stepObserver.observe(step))
