/* ========================================
   SkillConnect India - Main JavaScript
   Interactive Features & Functionality
   ======================================== */

// ==================== SERVICE DATA ====================
const serviceProviders = [
  {
    id: 1,
    name: 'Priya Sharma',
    category: 'Graphic Design',
    experience: '5 years',
    rating: 4.8,
    reviews: 245,
    description: 'Creative graphic designer specializing in brand identity',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/branding%20expert%20girl-ebdHsniNRzhLFk1B6YnccwzA8KiKrn.png'
  },
  {
    id: 2,
    name: 'Rajesh Verma',
    category: 'Web Development',
    experience: '7 years',
    rating: 4.9,
    reviews: 312,
    description: 'Full-stack web developer with modern tech stack expertise',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web%20developer%20boy-ysksptHqOEAq3SiwH3EjE1t4hri3gh.png'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    category: 'Graphic Design',
    experience: '4 years',
    rating: 4.7,
    reviews: 189,
    description: 'UI/UX designer with eye for beautiful and functional designs',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/graphic%20designer%20girl-478MEjki1h1jyVhbRqLnOk3FoXVKuy.png'
  },
  {
    id: 4,
    name: 'Arjun Singh',
    category: 'Digital Marketing',
    experience: '6 years',
    rating: 4.6,
    reviews: 278,
    description: 'Digital marketing expert focused on ROI and growth strategies',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/digital%20marketer%20girl-hnqzqdGKUi01tZHrw75447SP8y1ZCC.png'
  },
  {
    id: 5,
    name: 'Vikram Reddy',
    category: 'Web Development',
    experience: '8 years',
    rating: 4.9,
    reviews: 356,
    description: 'Frontend developer with expertise in React and modern frameworks',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontend%20developer%20boy-g3LEeJNFq7l1VEReArMJYkXRryGFgL.png'
  },
  {
    id: 6,
    name: 'Neha Gupta',
    category: 'App Development',
    experience: '5 years',
    rating: 4.8,
    reviews: 234,
    description: 'Mobile app developer specializing in iOS and Android',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app%20developer%20boy-Rm5VfTLGSHnT9pTIukH040vnSUDS6I.png'
  },
  {
    id: 7,
    name: 'Sanjay Kumar',
    category: 'Web Development',
    experience: '9 years',
    rating: 4.9,
    reviews: 401,
    description: 'Backend developer with database and API expertise',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/backend%20developer%20boy-hNh2xQ1AegTn1fHO4NrYGSOSgSFoNQ.png'
  },
  {
    id: 8,
    name: 'Divya Nair',
    category: 'Content Writing',
    experience: '4 years',
    rating: 4.7,
    reviews: 167,
    description: 'Content strategist and writer for blogs and marketing materials',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/content%20girl-p6Cy7hLinBggxuk3yHwdpyTqrUVt6J.png'
  },
  {
    id: 9,
    name: 'Rohan Desai',
    category: 'Web Design',
    experience: '6 years',
    rating: 4.8,
    reviews: 289,
    description: 'Web designer creating stunning and responsive websites',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web%20designer%20boy-DFLHd1WjLXsvPMitJoNItIJU2hUwPn.png'
  },
  {
    id: 10,
    name: 'Meera Iyer',
    category: 'UI/UX Design',
    experience: '5 years',
    rating: 4.8,
    reviews: 223,
    description: 'UI/UX designer focused on user-centered design principles',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ui%20designer%20girl-Wc47SLRSnGnL1GMbjg3Z7JYn4edGyE.png'
  },
  {
    id: 11,
    name: 'Harsh Bhat',
    category: 'Web Development',
    experience: '7 years',
    rating: 4.9,
    reviews: 342,
    description: 'Full-stack developer proficient in multiple technologies',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/full%20stack%20boy-Stb0b1X1SY507IcJiGWYAx1R1tvzku.png'
  },
  {
    id: 12,
    name: 'Pooja Malhotra',
    category: 'Digital Marketing',
    experience: '5 years',
    rating: 4.7,
    reviews: 198,
    description: 'Social media and content marketing specialist',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social%20media%20manager%20girl-0qciCKdotkZtxndtxDwHBut0UGDUMq.png'
  },
  {
    id: 13,
    name: 'Karan Negi',
    category: 'SEO',
    experience: '6 years',
    rating: 4.8,
    reviews: 267,
    description: 'SEO expert helping businesses rank higher on Google',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seo%20boy-qvLwSfsOq0TwOwbH6u3laiSjk4tQhS.png'
  },
  {
    id: 14,
    name: 'Isha Tiwari',
    category: 'UI/UX Design',
    experience: '4 years',
    rating: 4.7,
    reviews: 145,
    description: 'Designing beautiful user experiences for web and mobile',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ui%20designer%20girl0-jRwYUP8hUsOfy0nOAADBVGwEx8Hwvy.png'
  },
  {
    id: 15,
    name: 'Aryan Kapoor',
    category: 'Video Editing',
    experience: '5 years',
    rating: 4.8,
    reviews: 201,
    description: 'Professional video editor for marketing and entertainment content',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video%20editor%20boy-KFROCuasgXZs80KRgW7MwB7z99SIL4.png'
  }
];

// ==================== DYNAMIC AVAILABILITY ====================
function getRandomAvailability() {
  return Math.random() > 0.5 ? 'Available' : 'Busy';
}

function assignAvailability(providers) {
  return providers.map(provider => ({
    ...provider,
    availability: getRandomAvailability()
  }));
}

// ==================== NAVBAR TOGGLE ====================
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.navbar-menu a').forEach(link => {
      link.addEventListener('click', function() {
        navbarMenu.classList.remove('active');
      });
    });
  }

  // Scroll to top button
  const scrollBtn = document.querySelector('.scroll-to-top');
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });

    scrollBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Animate counters on home page
  const counters = document.querySelectorAll('.stat-item h3');
  let animated = false;

  function animateCounters() {
    if (!animated) {
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 30;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target + '+';
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + '+';
          }
        }, 50);
      });
      animated = true;
    }
  }

  // Trigger animation when stats section is visible
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    window.addEventListener('scroll', () => {
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        animateCounters();
      }
    });
  }
});

// ==================== SERVICES PAGE ====================
function renderServices(providers = null, filter = 'All') {
  const serviceGrid = document.getElementById('serviceGrid');
  if (!serviceGrid) return;

  let providersToShow = providers || serviceProviders;
  
  if (filter !== 'All') {
    providersToShow = providersToShow.filter(p => p.category === filter);
  }

  serviceGrid.innerHTML = '';

  providersToShow.forEach(provider => {
    const badgeClass = provider.availability === 'Available' ? 'badge-available' : 'badge-busy';
    const buttonText = provider.availability === 'Available' ? 'Hire Now' : 'Notify Me';
    const buttonClass = provider.availability === 'Available' ? 'btn-primary' : 'btn-outline';

    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <div class="service-img-container">
        <img src="${provider.image}" alt="${provider.name}">
        <span class="badge ${badgeClass}">${provider.availability}</span>
      </div>
      <div class="service-content">
        <h4 class="service-title">${provider.name}</h4>
        <div class="service-category">${provider.category}</div>
        <div class="service-experience">💼 ${provider.experience} experience</div>
        <div class="service-rating">
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span>${provider.rating}</span>
          <span>(${provider.reviews} reviews)</span>
        </div>
        <p class="service-desc">${provider.description}</p>
        <div class="service-actions">
          <button class="btn ${buttonClass} btn-sm" onclick="hireProvider('${provider.name}')">${buttonText}</button>
          <button class="btn btn-secondary btn-sm" onclick="viewProfile('${provider.name}')">View Profile</button>
        </div>
      </div>
    `;
    serviceGrid.appendChild(card);
  });
}

// ==================== FILTER FUNCTIONALITY ====================
const categories = ['All', 'Web Development', 'Graphic Design', 'Digital Marketing', 'Web Design', 'UI/UX Design', 'App Development', 'Content Writing', 'Video Editing', 'SEO'];

function setupFilters() {
  const filterContainer = document.getElementById('filterContainer');
  if (!filterContainer) return;

  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${category === 'All' ? 'active' : ''}`;
    btn.textContent = category;
    btn.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const providers = assignAvailability(serviceProviders);
      renderServices(providers, category);
    };
    filterContainer.appendChild(btn);
  });
}

// ==================== HIRE PROVIDER ====================
function hireProvider(name) {
  const modal = document.getElementById('bookingModal');
  const modalContent = document.querySelector('.modal-content');
  
  if (modal) {
    modal.classList.add('show');
    const modalBody = modal.querySelector('.modal-body');
    if (modalBody) {
      modalBody.innerHTML = `
        <h3>Book ${name}</h3>
        <p>You are about to book <strong>${name}</strong> for your project.</p>
        <p>Redirecting to payment...</p>
      `;
    }

    // Redirect to payment page after 2 seconds
    setTimeout(() => {
      window.location.href = 'payment.html?provider=' + encodeURIComponent(name);
    }, 2000);
  }
}

// ==================== VIEW PROFILE ====================
function viewProfile(name) {
  alert(`Viewing profile of ${name}\n\nFull profile details would load here.`);
}

// ==================== FORM VALIDATION ====================
function validateContactForm(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.form-error').forEach(el => el.remove());

  // Full Name validation
  if (!fullName || fullName.value.trim() === '') {
    showError(fullName, 'Full Name is required');
    isValid = false;
  }

  // Email validation
  if (!email || email.value.trim() === '') {
    showError(email, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Please enter a valid email');
    isValid = false;
  }

  // Subject validation
  if (!subject || subject.value.trim() === '') {
    showError(subject, 'Subject is required');
    isValid = false;
  }

  // Message validation
  if (!message || message.value.trim() === '') {
    showError(message, 'Message is required');
    isValid = false;
  } else if (message.value.trim().length < 10) {
    showError(message, 'Message must be at least 10 characters');
    isValid = false;
  }

  if (isValid) {
    showSuccessMessage('Message sent successfully! We will contact you soon.');
    document.querySelector('form').reset();
  }
}

function showError(element, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  element.parentElement.appendChild(errorDiv);
  element.style.borderColor = '#E74C3C';
}

function showSuccessMessage(message) {
  alert(message);
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ==================== PAYMENT PAGE ====================
function setupPaymentPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const provider = urlParams.get('provider') || 'Service Provider';

  const providerElement = document.getElementById('providerName');
  if (providerElement) {
    providerElement.textContent = provider;
  }

  // Card input handling
  const cardNumber = document.getElementById('cardNumber');
  if (cardNumber) {
    cardNumber.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\s/g, '');
      let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
      e.target.value = formattedValue;
    });
  }

  // Payment method selection
  const paymentMethods = document.querySelectorAll('.payment-method');
  paymentMethods.forEach(method => {
    method.addEventListener('click', function() {
      paymentMethods.forEach(m => m.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Pay button
  const payBtn = document.getElementById('payBtn');
  if (payBtn) {
    payBtn.addEventListener('click', processPayment);
  }
}

function processPayment() {
  const cardNumber = document.getElementById('cardNumber').value;
  const cardName = document.getElementById('cardName').value;
  const cardExpiry = document.getElementById('cardExpiry').value;
  const cardCVV = document.getElementById('cardCVV').value;

  if (!cardNumber || !cardName || !cardExpiry || !cardCVV) {
    alert('Please fill all payment details');
    return;
  }

  // Simulate payment processing
  const loadingText = document.querySelector('.btn-primary');
  const originalText = loadingText.textContent;
  loadingText.textContent = 'Processing...';
  loadingText.disabled = true;

  setTimeout(() => {
    // Redirect to success page
    window.location.href = 'paymentSuccess.html';
  }, 2000);
}

// ==================== PAYMENT SUCCESS PAGE ====================
function setupPaymentSuccessPage() {
  // Generate random transaction ID
  const transactionId = 'TXN' + Date.now() + Math.floor(Math.random() * 1000);
  const transactionElement = document.getElementById('transactionId');
  if (transactionElement) {
    transactionElement.textContent = transactionId;
  }

  // Set current date and time
  const dateElement = document.getElementById('transactionDate');
  if (dateElement) {
    const now = new Date();
    dateElement.textContent = now.toLocaleString('en-IN');
  }

  // Print receipt button
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', printReceipt);
  }

  // Return to home button
  const homeBtn = document.getElementById('homeBtn');
  if (homeBtn) {
    homeBtn.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
}

function printReceipt() {
  const printContent = document.querySelector('.transaction-card').outerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = `
    <html>
      <head>
        <title>Receipt - SkillConnect India</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { text-align: center; color: #004E89; }
          .receipt { max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; }
          .receipt-header { text-align: center; margin-bottom: 20px; }
          .receipt-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
          .receipt-row:last-child { border-bottom: none; }
          .receipt-footer { text-align: center; margin-top: 20px; color: #666; }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="receipt-header">
            <h2>SkillConnect India</h2>
            <p>Payment Receipt</p>
          </div>
          ${printContent}
          <div class="receipt-footer">
            <p>Thank you for using SkillConnect India!</p>
            <p>For support, contact: support@skillconnect.com</p>
          </div>
        </div>
        <script>
          window.print();
          window.onafterprint = function() {
            window.location.href = 'index.html';
          };
        </script>
      </body>
    </html>
  `;
}

// ==================== MODAL HANDLING ====================
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Close modal when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('show');
      }
    });
  });
});

// ==================== PAGE LOAD HANDLERS ====================
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Home page
  if (currentPage === 'index.html' || currentPage === '') {
    // Initialize home page
  }

  // Services page
  if (currentPage === 'services.html') {
    const providers = assignAvailability(serviceProviders);
    renderServices(providers, 'All');
    setupFilters();
  }

  // Contact page
  if (currentPage === 'contact.html') {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', validateContactForm);
    }
  }

  // Payment page
  if (currentPage === 'payment.html') {
    setupPaymentPage();
  }

  // Payment success page
  if (currentPage === 'paymentSuccess.html') {
    setupPaymentSuccessPage();
  }
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.card, .service-card, .why-us-item').forEach(el => {
    observer.observe(el);
  });
});
