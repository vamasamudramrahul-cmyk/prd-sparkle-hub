/**
 * BikerGram Interactive Scripts
 * Handles mobile nav toggle, accordions, tabs, carousels,
 * and live search/filtering across States, Districts, and Categories.
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Menu Toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.framer-5goy0n');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('mobile-open');
      const isExpanded = navLinks.classList.contains('mobile-open');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // 2. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.bg-faq-item, .framer-OoD6h');
  faqItems.forEach(function (item) {
    const header = item.querySelector('.bg-faq-header') || item.querySelector('.framer-1ld7j9b');
    if (header) {
      header.addEventListener('click', function () {
        item.classList.toggle('open');
      });
    }
  });

  // 3. Homepage Feature Showcase Tabs (Destinations / Features)
  const tabButtons = document.querySelectorAll('[data-bg-tab]');
  const tabPanels = document.querySelectorAll('[data-bg-panel]');
  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-bg-tab');
        tabButtons.forEach(b => {
          b.classList.remove('active');
          b.style.borderColor = 'transparent';
          const p = b.querySelector('p');
          if (p) p.style.color = 'var(--token-5d3602f5-d470-4b4b-916d-5b57bbf588f8, rgb(133, 133, 133))';
        });
        btn.classList.add('active');
        btn.style.borderColor = 'var(--token-18c2b5cb-5f3a-4a37-ad6a-197cd994af92, rgba(250, 250, 250, 0.32))';
        const pActive = btn.querySelector('p');
        if (pActive) pActive.style.color = 'var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255))';

        tabPanels.forEach(panel => {
          if (panel.getAttribute('data-bg-panel') === targetId) {
            panel.style.display = 'block';
            panel.style.opacity = '1';
          } else {
            panel.style.display = 'none';
            panel.style.opacity = '0';
          }
        });
      });
    });
  }

  // 4. Communities Slider (Previous & Next buttons)
  const prevBtn = document.querySelector('button[aria-label="Previous"]');
  const nextBtn = document.querySelector('button[aria-label="Next"]');
  const sliderList = document.querySelector('.framer-slideshow ul');
  if (prevBtn && nextBtn && sliderList) {
    let currentSlide = 0;
    const slides = sliderList.querySelectorAll('li');
    const totalSlides = slides.length;

    function updateSlider() {
      const offsetPercent = -(currentSlide * 100);
      sliderList.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
      sliderList.style.transform = `translateX(${offsetPercent}%)`;
    }

    prevBtn.addEventListener('click', function (e) {
      e.preventDefault();
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    });

    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    });
  }

  // 5. Live Search & Filtering for Directory Pages
  const searchInput = document.querySelector('.bg-search-input');
  const filterPills = document.querySelectorAll('.bg-filter-pill');
  const items = document.querySelectorAll('[data-category], [data-state], [data-district]');

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activePill = document.querySelector('.bg-filter-pill.active');
    const filterVal = activePill ? activePill.getAttribute('data-filter') : 'all';

    items.forEach(function (item) {
      const itemCat = (item.getAttribute('data-category') || '').toLowerCase();
      const itemState = (item.getAttribute('data-state') || '').toUpperCase();
      const itemDistrict = (item.getAttribute('data-district') || '').toUpperCase();
      const text = item.textContent.toLowerCase();

      let matchesFilter = false;
      if (filterVal === 'all') {
        matchesFilter = true;
      } else if (filterVal.toUpperCase() === itemState) {
        matchesFilter = true;
      } else if (filterVal.toUpperCase() === itemDistrict) {
        matchesFilter = true;
      } else if (filterVal.toLowerCase() === itemCat) {
        matchesFilter = true;
      }

      const matchesSearch = query === '' || text.includes(query);

      if (matchesFilter && matchesSearch) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  if (filterPills.length > 0) {
    filterPills.forEach(function (pill) {
      pill.addEventListener('click', function (e) {
        e.preventDefault();
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        applyFilters();
      });
    });

    // Check URL parameters (e.g. ?state=AP or ?state=TS, ?district=..., ?category=...)
    const urlParams = new URLSearchParams(window.location.search);
    const stateParam = urlParams.get('state');
    const distParam = urlParams.get('district');
    const catParam = urlParams.get('category');
    const target = stateParam || distParam || catParam;
    if (target) {
      const targetPill = document.querySelector(`.bg-filter-pill[data-filter="${target}" i]`);
      if (targetPill) {
        filterPills.forEach(p => p.classList.remove('active'));
        targetPill.classList.add('active');
        applyFilters();
      }
    }
  }

  // 6. Item detail switcher if ?id= is passed in URL
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get('id');
  if (idParam) {
    const detailPanels = document.querySelectorAll('[data-detail-id]');
    if (detailPanels.length > 0) {
      let matched = false;
      detailPanels.forEach(panel => {
        if (panel.getAttribute('data-detail-id') === idParam) {
          panel.style.display = 'block';
          matched = true;
        } else {
          panel.style.display = 'none';
        }
      });
      // If no exact match, show first panel as default
      if (!matched && detailPanels[0]) {
        detailPanels[0].style.display = 'block';
      }
    }
  }
});
