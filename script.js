const siteConfig = {
  phoneNumber: "0778601003",
  whatsappNumber: "94774903171",
  mapUrl: "https://maps.app.goo.gl/SrgETrKg2yQ91ghu7",
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=100064768060664&mibextid=wwXIfr&mibextid=wwXIfr",
    instagram: "https://www.instagram.com/madhusanka_tailors",
    tiktok: "https://www.tiktok.com/@madhusanka.tailor"
  }
};


const heroSlides = [
  {
    image: "images/hero/hero.png",
    alt: "Wedding suit showroom"
  },
  {
    image: "images/hero/hero01.jpg",
    alt: "Modern groom styling"
  },
  {
    image: "images/hero/hero02.JPG",
    alt: "Men's formal collection"
  },
];

const products = [
  {
    title: "Wedding Suits",
    tag: "Tailored Collection",
    image: "images/products/weddingSuit.png",
    desc: "Premium groom suits with modern cuts, clean detailing, and luxury finishing.",
    bullets: ["Custom fitting", "Modern silhouettes", "Special occasion ready"]
  },
  {
    title: "Leather Shoes",
    tag: "Premium Footwear",
    image: "images/products/leatherShoes.jpg",
    desc: "Elegant formal leather shoes designed to match wedding and event wear.",
    bullets: ["Classic finish", "Comfortable wear", "Formal styling"]
  },
  {
    title: "Rexine Shoes",
    tag: "Smart Style",
    image: "images/products/rexineShoes.png",
    desc: "Modern rexine footwear options with a stylish look and practical durability.",
    bullets: ["Affordable elegance", "Event friendly", "Modern design"]
  },
  {
    title: "Accessories",
    tag: "Final Touch",
    image: "images/products/accessories.png",
    desc: "Ties, bow ties, cufflinks, and belts that complete the perfect groom appearance.",
    bullets: ["Tie sets", "Bow ties", "Belts & cufflinks"]
  }
];

const gallery = [
  {
    title: "Distinguished Bridal Party",
    collection: "bridal-party",
    tag: "Wedding Party",
    image: "images/gallery/gallery01.JPG",
    desc: "Perfectly coordinated and tailored to perfection. Our collection ensures the entire wedding party looks sophisticated, complementing the groom with sharp, matching suit designs."
  },
  {
    title: "The Groom's Entrance",
    collection: "grooms-entrance",
    tag: "Grand Entrance",
    image: "images/gallery/gallery03.jpg",
    desc: "Step into the new chapter with confidence. Our signature navy suit offers an impeccable fit that makes a powerful statement on your walk toward the future."
  },
  {
    title: "Heritage and Style",
    collection: "heritage-style",
    tag: "Tradition & Style",
    image: "images/gallery/gallery04.jpg",
    desc: "Exquisite detailing for traditional and fusion ceremonies. We specialize in custom finishes and special occasion attire that honours heritage with a clean, modern aesthetic."
  },
];

const sliderGallery = gallery.slice(0, 3);

const reviews = [
  {
    name: "Imal Menuka",
    // time: "2 months ago",
    stars: 5,
    title: "Excellent wedding suit finishing",
    text: "Best tailor shop in the town, Perfect fitting, quick service, and very polite staff. Highly recommended.",
    avatarStart: "#d8b36a",
    avatarEnd: "#c49849"
  },
  {
    name: "Asintha Nimsara",
    // time: "1 month ago",
    stars: 5,
    title: "Good quality and friendly service",
    text: "Highly recommend ❤️",
    avatarStart: "#5f87ff",
    avatarEnd: "#7f57f1"
  },
  {
    name: "Isuru De Silva",
    // time: "3 weeks ago",
    stars: 4,
    title: "Modern style and fair price",
    text: "Great service and excellent tailoring. Perfect fit and good quality work. Highly recommend Madhusanka Tailor’s. 👍",
    avatarStart: "#34a853",
    avatarEnd: "#1f8b43"
  },
  {
    name: "Prabath Jayasuriya",
    // time: "2 weeks ago",
    stars: 5,
    title: "Perfect fit and elegant finish",
    text: "Good Tailor and Friendly. Reasonable prizes Highly recomended 😊😊💐💐",
    avatarStart: "#ea4335",
    avatarEnd: "#c93327"
  },
  {
    name: "Ashinka Imalshi",
    // time: "1 week ago",
    stars: 5,
    title: "Great collection and fast service",
    text: "I cannot thank Madusanka tailor’s enough for the incredible work they did for my brother’s wedding,Highly recommended! Madusanka tailors.",
    avatarStart: "#fbbc05",
    avatarEnd: "#d49a00"
  },
  {
    name: "Kalpa Madhushan",
    // time: "5 days ago",
    stars: 5,
    title: "Trusted place for wedding styling",
    text: "Excellent service and quality tailoring. Highly recommend!",
    avatarStart: "#7a5cff",
    avatarEnd: "#5b3fe0"
  }
];

function starLine(count) {
  return "★".repeat(count) + "☆".repeat(5 - count);
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function googleWordMarkup() {
  return `
    <span class="google-word" aria-label="Google">
      <span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>
    </span>
  `;
}

function profilePhotoSvg(name, startColor = "#d8b36a", endColor = "#c49849") {
  const initials = getInitials(name) || "G";

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
      <defs>
        <linearGradient id="avatarGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${startColor}" />
          <stop offset="100%" stop-color="${endColor}" />
        </linearGradient>
      </defs>
      <rect width="160" height="160" rx="80" fill="url(#avatarGradient)" />
      <circle cx="80" cy="62" r="28" fill="rgba(255,255,255,0.22)" />
      <path d="M35 140c10-24 28-36 45-36s35 12 45 36" fill="rgba(255,255,255,0.2)" />
      <text x="50%" y="54%" fill="#ffffff" font-size="34" font-family="Arial, sans-serif" font-weight="700" text-anchor="middle">${initials}</text>
    </svg>
  `)}`;
}

function placeholderSvg(label) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#1b212b" />
          <stop offset="100%" stop-color="#0f1115" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#g)" />
      <rect x="50" y="50" width="1100" height="800" rx="30" fill="none" stroke="#d8b36a" stroke-opacity="0.55" stroke-dasharray="14 10" />
      <text x="50%" y="44%" fill="#f5f7fb" font-size="54" font-family="Arial, sans-serif" text-anchor="middle">${label}</text>
      <text x="50%" y="54%" fill="#d8b36a" font-size="30" font-family="Arial, sans-serif" text-anchor="middle">Add your own photo in images/</text>
    </svg>
  `)}`;
}

function setManagedImage(img, src, alt) {
  const fallback = placeholderSvg(alt);
  const showFallback = () => {
    if (img.src !== fallback) {
      img.src = fallback;
    }
  };

  img.alt = alt;
  img.dataset.fallback = fallback;
  img.onerror = showFallback;
  img.src = src;

  if (img.complete && img.naturalWidth === 0) {
    showFallback();
  }
}

function imageMarkup(src, alt) {
  return `<img src="${src}" alt="${alt}" loading="lazy" data-fallback="${placeholderSvg(alt)}">`;
}

function applyImageFallbacks(root = document) {
  root.querySelectorAll("img[data-fallback]").forEach((img) => {
    const fallback = img.dataset.fallback;
    const showFallback = () => {
      if (img.src !== fallback) {
        img.src = fallback;
      }
    };

    img.addEventListener("error", showFallback, { once: true });

    if (!img.getAttribute("src") || (img.complete && img.naturalWidth === 0)) {
      showFallback();
    }
  });

  root.querySelectorAll("img[data-fallback-label]").forEach((img) => {
    const fallback = placeholderSvg(img.dataset.fallbackLabel || img.alt || "Photo");
    const showFallback = () => {
      if (img.src !== fallback) {
        img.src = fallback;
      }
    };

    img.addEventListener("error", showFallback, { once: true });

    if (!img.getAttribute("src") || (img.complete && img.naturalWidth === 0)) {
      showFallback();
    }
  });
}

function applySiteLinks() {
  const hrefMap = {
    phone: `tel:${siteConfig.phoneNumber}`,
    whatsapp: `https://wa.me/${siteConfig.whatsappNumber}`,
    maps: siteConfig.mapUrl,
    facebook: siteConfig.socialLinks.facebook,
    instagram: siteConfig.socialLinks.instagram,
    tiktok: siteConfig.socialLinks.tiktok
  };

  document.querySelectorAll("[data-link]").forEach((link) => {
    const href = hrefMap[link.dataset.link] || "#";
    link.setAttribute("href", href);

    if (href.startsWith("http")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}

function buildGalleryPageUrl(item, index = 0) {
  const params = new URLSearchParams({
    collection: item.collection || `gallery-${index + 1}`,
    focus: "0"
  });

  return `gallery.html?${params.toString()}`;
}

function renderProducts() {
  const root = document.getElementById("productGrid");
  if (!root) return;

  root.innerHTML = products.map((item) => `
    <article class="product-card reveal">
      <div class="product-image">
        ${imageMarkup(item.image, item.title)}
      </div>
      <span class="tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="muted-list">
        ${item.bullets.map((point) => `<span>• ${point}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderSlider() {
  const thumbsRoot = document.getElementById("sliderThumbs");
  const mainImage = document.getElementById("sliderImage");
  const mainTitle = document.getElementById("sliderTitle");
  const mainText = document.getElementById("sliderText");
  const mainLink = document.getElementById("sliderImageLink");
  const openLink = document.getElementById("sliderOpenLink");

  if (!thumbsRoot || !mainImage || !mainTitle || !mainText || !mainLink || !openLink) return;

  let currentIndex = 0;

  function updateSlider(index) {
    currentIndex = index;
    const item = sliderGallery[index];
    mainImage.style.opacity = 0;
    mainImage.style.transform = "scale(1.03)";

    setTimeout(() => {
      const galleryPageUrl = buildGalleryPageUrl(item, index);

      setManagedImage(mainImage, item.image, item.title);
      mainTitle.textContent = item.title;
      mainText.textContent = item.desc;
      mainLink.href = galleryPageUrl;
      openLink.href = galleryPageUrl;
      openLink.setAttribute("aria-label", `Open ${item.title} in a new tab`);
      mainImage.style.opacity = 1;
      mainImage.style.transform = "scale(1)";
    }, 180);

    [...thumbsRoot.children].forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
  }

  thumbsRoot.innerHTML = sliderGallery.map((item, index) => `
    <button class="thumb ${index === 0 ? "active" : ""}" data-index="${index}" aria-label="Show ${item.title}">
      ${imageMarkup(item.image, item.title)}
    </button>
  `).join("");

  thumbsRoot.querySelectorAll(".thumb").forEach((btn) => {
    btn.addEventListener("click", () => updateSlider(Number(btn.dataset.index)));
  });

  updateSlider(0);

  setInterval(() => {
    updateSlider((currentIndex + 1) % sliderGallery.length);
  }, 3500);
}

function renderGallery() {
  const root = document.getElementById("galleryGrid");
  if (!root) return;

  root.innerHTML = gallery.map((item, index) => `
    <a
      class="gallery-card gallery-link reveal"
      href="${buildGalleryPageUrl(item, index)}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open ${item.title} in a new tab"
      style="transition-delay: ${index * 80}ms"
    >
      <div class="gallery-image">
        ${imageMarkup(item.image, item.title)}
        <div class="gallery-overlay">
          <span class="tag">${item.tag || "Wedding Style"}</span>
          <span class="gallery-open">View full photo ↗</span>
        </div>
      </div>
      <div class="gallery-content">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </a>
  `).join("");
}

function renderReviews() {
  const root = document.getElementById("reviewGrid");
  if (!root) return;

  root.innerHTML = reviews.map((item, index) => `
    <article class="review-card reveal" style="transition-delay: ${index * 90}ms">
      <div class="review-top">
        <div class="review-user">
          <img
            class="review-avatar"
            src="${profilePhotoSvg(item.name, item.avatarStart, item.avatarEnd)}"
            alt="${item.name} profile photo"
            loading="lazy"
          />
          <div class="review-meta">
            <strong>${item.name}</strong>
            <span>${item.time || "Recent review"}</span>
          </div>
        </div>
        <div class="review-brand" aria-label="Google review mark">
          <span class="quote-stamp">”</span>
          ${googleWordMarkup()}
        </div>
      </div>

      <div class="rating-row">
        <div class="rating">${starLine(item.stars)}</div>
      </div>

      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initBackToTop() {
  const button = document.getElementById("backToTop");
  if (!button) return;

  const updateVisibility = () => {
    button.classList.toggle("visible", window.scrollY > 360);
  };

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
function initHeroSlider() {
  const heroImage = document.getElementById("heroSliderImage");
  const dotsRoot = document.getElementById("heroSliderDots");

  if (!heroImage || !dotsRoot || !heroSlides.length) return;

  let currentIndex = 0;

  function updateHeroSlide(index) {
    currentIndex = index;
    const slide = heroSlides[index];

    heroImage.style.opacity = 0;
    heroImage.style.transform = "scale(1.04)";

    setTimeout(() => {
      setManagedImage(heroImage, slide.image, slide.alt);
      heroImage.style.opacity = 1;
      heroImage.style.transform = "scale(1)";
    }, 220);

    [...dotsRoot.children].forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  dotsRoot.innerHTML = heroSlides.map((slide, index) => `
    <button
      class="hero-dot ${index === 0 ? "active" : ""}"
      type="button"
      data-index="${index}"
      aria-label="Show hero photo ${index + 1}"
    ></button>
  `).join("");

  dotsRoot.querySelectorAll(".hero-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      updateHeroSlide(Number(dot.dataset.index));
    });
  });

  updateHeroSlide(0);

  setInterval(() => {
    updateHeroSlide((currentIndex + 1) % heroSlides.length);
  }, 3000);
}

window.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  applySiteLinks();
  renderProducts();
  renderSlider();
  renderGallery();
  renderReviews();
  applyImageFallbacks();
  initScrollReveal();
  initHeroSlider();
  initBackToTop();
});
