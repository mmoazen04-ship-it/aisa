(function () {
  "use strict";

  const D = AISA_CONTENT;

  const ICONS = {
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>',
    droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3c4 4.5 6 7.7 6 10.5A6 6 0 016 13.5C6 10.7 8 7.5 12 3z"/></svg>',
    wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0M3 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/></svg>',
    gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 3h12l3 5-9 13L3 8z"/><path d="M3 8h18M9 3l3 5 3-5M12 8l-3 13M12 8l3 13"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 4C10 4 4 10 4 18c0 1 0 2 1 2 8 0 14-6 14-16 0-0 1 0 1 0z"/></svg>',
    medical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 8v8M8 12h8"/><circle cx="12" cy="12" r="9"/></svg>',
    tech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="4" y="5" width="16" height="12" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    personal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c1.5-4 5-6 7-6s5.5 2 7 6"/></svg>',
    luxury: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 8l4 3 4-6 4 6 4-3-2 10H6z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>'
  };
  const icon = (name) => ICONS[name] || ICONS.sparkle;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const create = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  function initPreloader() {
    const pre = $("#preloader");
    const fill = $(".preloader-line-fill");
    requestAnimationFrame(() => { fill.style.width = "100%"; });
    window.addEventListener("load", () => { setTimeout(() => pre.classList.add("is-done"), 900); });
    setTimeout(() => pre.classList.add("is-done"), 2200);
  }

  function initCursor() {
    if (window.matchMedia("(max-width:640px)").matches) return;
    const dot = $("#cursorDot"), ring = $("#cursorRing");
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    $$("a,button,.filter-btn,.compare-wrap,.testimonials-dot").forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-active"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
    });
  }

  function renderNav() {
    $("[data-brand]").textContent = D.brand.name;
    $("[data-brand-mobile]").textContent = `${D.brand.name} · ${D.brand.nameFa}`;

    const navRoot = $("[data-nav-root]");
    const navMobileRoot = $("[data-nav-root-mobile]");
    D.navigation.forEach((item) => {
      navRoot.appendChild(create(`<a href="${item.href}">${item.label}</a>`));
      navMobileRoot.appendChild(create(`<a href="${item.href}">${item.label}</a>`));
    });

    $("[data-nav-cta]").textContent = "رزرو مشاوره";
    $("[data-nav-cta-mobile]").textContent = "رزرو مشاوره";

    $("[data-footer-brand]").textContent = D.brand.name;
    $("[data-footer-tagline]").textContent = D.footer.tagline;
    $("[data-footer-copyright]").textContent = D.footer.copyright;

    const footerCols = $("[data-footer-cols-root]");
    D.footer.columns.forEach((col) => {
      const links = col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
      footerCols.appendChild(create(`<div class="footer-col"><h4>${col.title}</h4><ul>${links}</ul></div>`));
    });
    const footerSocial = $("[data-footer-social-root]");
    D.footer.social.forEach((s) => {
      footerSocial.appendChild(create(`<a href="${s.href}" target="_blank" rel="noopener">${s.label}</a>`));
    });
  }

  function initHeaderScroll() {
    const header = $("#siteHeader");
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initMobileNav() {
    const burger = $("#burgerBtn"), drawer = $("#mobileDrawer");
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      drawer.classList.toggle("is-open");
    });
    $$("#mobileDrawer a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.classList.remove("is-active");
        drawer.classList.remove("is-open");
      })
    );
  }

  function renderHero() {
    $("[data-hero-tag]").textContent = D.hero.tag;
    $("[data-hero-title]").innerHTML = `<span class="hero-title-em">${D.hero.titleEmphasis}</span>${D.hero.titleRest}`;
    $("[data-hero-subtitle]").textContent = D.hero.subtitle;
    const p = $("[data-hero-btn-primary]");
    p.textContent = D.hero.primaryButton.label;
    p.setAttribute("href", D.hero.primaryButton.href);
    const s = $("[data-hero-btn-secondary]");
    s.textContent = D.hero.secondaryButton.label;
    s.setAttribute("href", D.hero.secondaryButton.href);
    $("[data-hero-scroll]").textContent = D.hero.scrollText;
  }

  function initHeroCanvas() {
    const canvas = $("#heroCanvas");
    const ctx = canvas.getContext("2d");
    let w, h, particles = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width:640px)").matches;
    const COUNT = reduced ? 0 : isMobile ? 46 : 110;
    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }
    function Particle() { this.reset(); }
    Particle.prototype.reset = function () {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.z = Math.random() * 1 + 0.2;
      this.r = (Math.random() * 1.8 + 0.5) * this.z * devicePixelRatio;
      this.vy = (Math.random() * 0.25 + 0.06) * this.z * devicePixelRatio;
      this.vx = (Math.random() - 0.5) * 0.12 * devicePixelRatio;
      this.alpha = Math.random() * 0.5 + 0.25;
      this.hue = Math.random() > 0.5 ? "198,161,91" : "244,235,221";
    };
    function init() {
      resize();
      particles = Array.from({ length: COUNT }, () => new Particle());
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      particles.forEach((p) => {
        const parallax = (p.z - 0.5) * 40 * devicePixelRatio;
        const px = p.x + targetX * parallax;
        const py = p.y + targetY * parallax;
        p.y -= p.vy;
        p.x += p.vx;
        if (p.y < -10) p.y = h + 10;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},${p.alpha})`;
        ctx.shadowColor = `rgba(${p.hue},0.9)`;
        ctx.shadowBlur = p.r * 4;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    window.addEventListener("resize", resize);
    if (!isMobile) {
      window.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      });
    } else {
      window.addEventListener("deviceorientation", (e) => {
        if (e.gamma != null && e.beta != null) {
          mouseX = Math.max(-1, Math.min(1, e.gamma / 30));
          mouseY = Math.max(-1, Math.min(1, (e.beta - 40) / 30));
        }
      }, true);
    }
    init();
    if (COUNT > 0) draw();
  }

  function initHeroTilt() {
    if (window.matchMedia("(max-width:640px)").matches) return;
    const hero = $("#hero");
    const content = $(".hero-content");
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      content.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    });
    hero.addEventListener("mouseleave", () => { content.style.transform = `rotateY(0) rotateX(0)`; });
  }

  function renderServices() {
    $("[data-services-kicker]").textContent = D.servicesSection.kicker;
    $("[data-services-title]").textContent = D.servicesSection.title;
    $("[data-services-desc]").textContent = D.servicesSection.description;

    const root = $("[data-services-root]");
    const sorted = [...D.services].sort((a, b) => a.order - b.order);
    sorted.forEach((s) => {
      const card = create(`
        <article class="service-card" data-reveal data-tilt>
          <a href="${s.detailHref}" class="service-card-link-wrap">
            <div class="service-card-media">
              <img src="${s.image}" alt="${s.title}" loading="lazy">
              <span class="service-card-icon">${icon(s.icon)}</span>
            </div>
            <h3>${s.title}</h3>
            <p>${s.description}</p>
            <span class="service-card-link">مطالعه کامل و رزرو مشاوره ${icon("arrow")}</span>
          </a>
        </article>
      `);
      root.appendChild(card);
    });
  }

  function initTiltCards() {
    if (window.matchMedia("(max-width:640px)").matches) return;
    $$(".service-card, .team-card, .blog-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  function renderWhy() {
    $("[data-why-kicker]").textContent = D.whySection.kicker;
    $("[data-why-title]").textContent = D.whySection.title;
    $("[data-why-desc]").textContent = D.whySection.description;
    $("[data-why-image]").setAttribute("src", D.whySection.image);
    $("[data-why-image]").setAttribute("alt", D.whySection.title);
    $("[data-why-badge-number]").textContent = D.whySection.badgeNumber;
    $("[data-why-badge-text]").textContent = D.whySection.badgeText;

    const root = $("[data-why-root]");
    D.whySection.points.forEach((p) => {
      root.appendChild(create(`
        <div class="why-item" data-reveal>
          <span class="why-item-icon">${icon(p.icon)}</span>
          <div><h4>${p.title}</h4><p>${p.text}</p></div>
        </div>
      `));
    });
  }

  let currentFilter = "all";

  function renderPortfolio() {
    $("[data-portfolio-kicker]").textContent = D.portfolioSection.kicker;
    $("[data-portfolio-title]").textContent = D.portfolioSection.title;
    $("[data-portfolio-desc]").textContent = D.portfolioSection.description;

    const filtersRoot = $("[data-portfolio-filters-root]");
    D.portfolioCategories.forEach((cat) => {
      const btn = create(`<button class="filter-btn ${cat.id === "all" ? "is-active" : ""}" data-filter="${cat.id}">${cat.label}</button>`);
      btn.addEventListener("click", () => {
        currentFilter = cat.id;
        $$(".filter-btn").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        drawPortfolioItems();
      });
      filtersRoot.appendChild(btn);
    });

    drawPortfolioItems();

    if (D.portfolioSection.instagramCta) {
      const cta = D.portfolioSection.instagramCta;
      $("[data-portfolio-root]").insertAdjacentElement("afterend", create(`
        <div class="portfolio-instagram-cta">
          <p>${cta.text}</p>
          <a href="${cta.href}" target="_blank" rel="noopener" class="btn btn-outline btn-lg">${cta.label}</a>
        </div>
      `));
    }
  }

  function drawPortfolioItems() {
    const root = $("[data-portfolio-root]");
    root.innerHTML = "";
    const items = currentFilter === "all" ? D.portfolioItems : D.portfolioItems.filter((i) => i.category === currentFilter);

    items.forEach((item) => {
      const card = create(`
        <article class="portfolio-card" data-reveal>
          <div class="portfolio-card-media">
            <img src="${item.image}" alt="${item.categoryLabel}" loading="lazy">
          </div>
          <div class="portfolio-card-body">
            <span class="portfolio-card-tag">${item.categoryLabel}</span>
            <p>${item.description}</p>
          </div>
        </article>
      `);
      root.appendChild(card);
    });

    observeReveal();
  }

  function initCompareSlider(wrap) {
    const after = wrap.querySelector(".compare-after");
    const slider = wrap.querySelector(".compare-slider");
    let dragging = false;

    function setPos(percent) {
      percent = Math.max(0, Math.min(100, percent));
      after.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      slider.style.right = `${100 - percent}%`;
    }
    function handleMove(clientX) {
      const rect = wrap.getBoundingClientRect();
      const percent = ((clientX - rect.left) / rect.width) * 100;
      setPos(percent);
    }

    wrap.addEventListener("mousedown", (e) => { dragging = true; handleMove(e.clientX); });
    window.addEventListener("mousemove", (e) => { if (dragging) handleMove(e.clientX); });
    window.addEventListener("mouseup", () => (dragging = false));
    wrap.addEventListener("mousemove", (e) => { if (!dragging) handleMove(e.clientX); });
    wrap.addEventListener("mouseleave", () => { if (!dragging) setPos(50); });
    wrap.addEventListener("touchstart", (e) => { dragging = true; handleMove(e.touches[0].clientX); }, { passive: true });
    wrap.addEventListener("touchmove", (e) => { if (dragging) handleMove(e.touches[0].clientX); }, { passive: true });
    wrap.addEventListener("touchend", () => (dragging = false));

    setPos(50);
  }

  function renderTeam() {
    $("[data-team-kicker]").textContent = D.teamSection.kicker;
    $("[data-team-title]").textContent = D.teamSection.title;
    $("[data-team-desc]").textContent = D.teamSection.description;

    const root = $("[data-team-root]");
    D.team.forEach((m) => {
      root.appendChild(create(`
        <article class="team-card" data-reveal>
          <div class="team-card-media"><img src="${m.image}" alt="${m.name}" loading="lazy"></div>
          <div class="team-card-body">
            ${m.group ? `<span class="team-card-group">${m.group}</span>` : ""}
            <h3>${m.name}</h3>
            <span>${m.role}</span>
            <p>${m.bio}</p>
          </div>
        </article>
      `));
    });
  }

  function renderTestimonials() {
    $("[data-testimonials-kicker]").textContent = D.testimonialsSection.kicker;
    $("[data-testimonials-title]").textContent = D.testimonialsSection.title;

    const track = $("[data-testimonials-root]");
    const dotsRoot = $("#testimonialsDots");
    D.testimonials.forEach((t, idx) => {
      track.appendChild(create(`
        <div class="testimonial-card">
          <div class="testimonial-stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
          <p class="testimonial-text">«${t.text}»</p>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-service">${t.service}</div>
        </div>
      `));
      const dot = create(`<span class="testimonials-dot ${idx === 0 ? "is-active" : ""}"></span>`);
      dot.addEventListener("click", () => goToTestimonial(idx));
      dotsRoot.appendChild(dot);
    });

    let current = 0;
    function goToTestimonial(idx) {
      current = idx;
      track.style.transform = `translateX(${idx * 100}%)`;
      $$(".testimonials-dot").forEach((d, i) => d.classList.toggle("is-active", i === idx));
    }
    let autoplay = setInterval(() => { goToTestimonial((current + 1) % D.testimonials.length); }, 5500);
    track.closest(".testimonials").addEventListener("mouseenter", () => clearInterval(autoplay));
  }

  function renderBlog() {
    $("[data-blog-kicker]").textContent = D.blogSection.kicker;
    $("[data-blog-title]").textContent = D.blogSection.title;
    $("[data-blog-desc]").textContent = D.blogSection.description;

    const root = $("[data-blog-root]");
    D.blogPosts.forEach((post) => {
      root.appendChild(create(`
        <article class="blog-card" data-reveal>
          <a href="${post.href}" class="blog-card-link-wrap">
            <div class="blog-card-media"><img src="${post.image}" alt="${post.title}" loading="lazy"></div>
            <div class="blog-card-body">
              <span class="blog-card-cat">${post.category}</span>
              <h3>${post.title}</h3>
              <p>${post.excerpt}</p>
              <div class="blog-card-meta"><span>زمان مطالعه: ${post.readTime}</span><span class="blog-card-readmore">مطالعه مقاله ←</span></div>
            </div>
          </a>
        </article>
      `));
    });
  }

  function renderConsultation() {
    $("[data-consult-kicker]").textContent = D.consultationSection.kicker;
    $("[data-consult-title]").textContent = D.consultationSection.title;
    $("[data-consult-desc]").textContent = D.consultationSection.description;

    const pointsRoot = $("[data-consult-points-root]");
    D.consultationSection.points.forEach((p) => { pointsRoot.appendChild(create(`<li>${p}</li>`)); });

    const select = $("[data-consult-service-select]");
    select.appendChild(create(`<option value="">انتخاب خدمت مورد نظر...</option>`));
    D.services.forEach((s) => { select.appendChild(create(`<option value="${s.id}">${s.title}</option>`)); });

    $("#consultationForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const btn = form.querySelector("button[type=submit]");
      const btnLabel = btn.querySelector("span");
      const originalLabel = btnLabel.textContent;

      const serviceSelect = form.querySelector("#fservice");
      const serviceText = serviceSelect.selectedIndex > -1 ? serviceSelect.options[serviceSelect.selectedIndex].text : "";

      const payload = {
        name: form.fname.value.trim(),
        phone: form.fphone.value.trim(),
        service: serviceText,
        message: form.fmsg.value.trim(),
        website: form.website.value, // honeypot — باید همیشه خالی باشد
      };

      if (!payload.name || !payload.phone) {
        showToast("لطفاً نام و شماره تماس را وارد کنید.");
        return;
      }

      btn.disabled = true;
      btnLabel.textContent = "در حال ارسال...";

      try {
        const resp = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await resp.json().catch(() => ({ ok: false }));

        if (resp.ok && data.ok) {
          showToast("درخواست شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.");
          form.reset();
        } else {
          showToast("ارسال درخواست با مشکل مواجه شد. لطفاً دوباره تلاش کنید یا با شماره تماس ما در ارتباط باشید.");
        }
      } catch (err) {
        showToast("اتصال برقرار نشد. لطفاً اینترنت خود را بررسی و دوباره تلاش کنید.");
      } finally {
        btn.disabled = false;
        btnLabel.textContent = originalLabel;
      }
    });
  }

  function showToast(msg) {
    const toast = $("#toast");
    toast.textContent = msg;
    toast.classList.add("is-visible");
    setTimeout(() => toast.classList.remove("is-visible"), 3800);
  }

  function initLightbox() {
    const lightbox = $("#lightbox");
    const content = $("#lightboxContent");
    let gallery = [];
    let index = 0;

    function open(images, startIndex) {
      gallery = images;
      index = startIndex;
      render();
      lightbox.classList.add("is-open");
    }
    function render() { content.innerHTML = `<img src="${gallery[index]}" alt="">`; }

    $("#lightboxClose").addEventListener("click", () => lightbox.classList.remove("is-open"));
    $("#lightboxNext").addEventListener("click", () => { index = (index + 1) % gallery.length; render(); });
    $("#lightboxPrev").addEventListener("click", () => { index = (index - 1 + gallery.length) % gallery.length; render(); });
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.classList.remove("is-open"); });

    window.AISA_openLightbox = open;
  }

  let revealObserver;
  function observeReveal() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
    }
    $$("[data-reveal]").forEach((el) => { if (!el.classList.contains("is-visible")) revealObserver.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    renderNav();
    initHeaderScroll();
    initMobileNav();

    renderHero();
    initHeroCanvas();
    initHeroTilt();

    renderServices();
    renderWhy();
    renderPortfolio();
    renderTeam();
    renderTestimonials();
    renderBlog();
    renderConsultation();

    initCursor();
    initTiltCards();
    initLightbox();
    observeReveal();
  });
})();