// ==========================
// HERO SLIDER
// ==========================

const slider =
  document.getElementById("heroSlider");

if (slider) {

  const totalSlides =
    slider.children.length;

  let currentSlide = 0;

  function moveSlider() {

    slider.style.transition =
      "transform 0.8s ease-in-out";

    slider.style.transform =
      `translateX(-${currentSlide * 100}%)`;

  }

  // AUTO SLIDE
  setInterval(() => {

    currentSlide++;

    if (currentSlide >= totalSlides) {

      currentSlide = 0;

    }

    moveSlider();

  }, 4000);


  // NEXT BUTTON
  const nextBtn =
    document.getElementById("nextBtn");

  if (nextBtn) {

    nextBtn.addEventListener("click", () => {

      currentSlide++;

      if (currentSlide >= totalSlides) {

        currentSlide = 0;

      }

      moveSlider();

    });

  }


  // PREV BUTTON
  const prevBtn =
    document.getElementById("prevBtn");

  if (prevBtn) {

    prevBtn.addEventListener("click", () => {

      currentSlide--;

      if (currentSlide < 0) {

        currentSlide = totalSlides - 1;

      }

      moveSlider();

    });

  }

}



// ==========================
// MOBILE SIDEBAR
// ==========================

const menuBtn =
  document.getElementById("menu-btn");

const closeBtn =
  document.getElementById("close-btn");

const mobileMenu =
  document.getElementById("mobile-menu");

const overlay =
  document.getElementById("overlay");


// OPEN SIDEBAR
if (
  menuBtn &&
  mobileMenu &&
  overlay
) {

  menuBtn.addEventListener("click", () => {

    mobileMenu.style.right = "0";

    overlay.classList.remove("hidden");

    setTimeout(() => {

      overlay.classList.remove("opacity-0");

    }, 10);

  });

}


// CLOSE SIDEBAR
function closeMenu() {

  if (mobileMenu) {

    mobileMenu.style.right = "-100%";

  }

  if (overlay) {

    overlay.classList.add("opacity-0");

    setTimeout(() => {

      overlay.classList.add("hidden");

    }, 300);

  }

}


// CLOSE BUTTON
if (closeBtn) {

  closeBtn.addEventListener(
    "click",
    closeMenu
  );

}


// OVERLAY CLICK
if (overlay) {

  overlay.addEventListener(
    "click",
    closeMenu
  );

}



// ==========================
// ACTIVE NAVLINK
// ==========================

const currentPage =
  window.location.pathname
    .split("/")
    .pop();

const navLinks =
  document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

  const linkPage =
    link.getAttribute("href")
      .split("/")
      .pop();

  // REMOVE ACTIVE
  link.classList.remove(
    "text-blue-600"
  );

  // DEFAULT COLOR
  link.classList.add(
    "text-gray-700"
  );

  // ACTIVE LINK
  if (
    currentPage === linkPage
  ) {

    link.classList.remove(
      "text-gray-700"
    );

    link.classList.add(
      "text-blue-600"
    );

  }

});



// ==========================
// CLOSE SIDEBAR ON LINK CLICK
// ==========================

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    closeMenu();

  });

});



// ==========================
// STICKY HEADER SHADOW
// ==========================

const header =
  document.querySelector("header");

if (header) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

      header.classList.add(
        "shadow-md"
      );

    } else {

      header.classList.remove(
        "shadow-md"
      );

    }

  });

}



// ==========================
// AUTO CLOSE SIDEBAR
// ON DESKTOP VIEW
// ==========================

window.addEventListener("resize", () => {

  if (window.innerWidth >= 1024) {

    closeMenu();

  }

});