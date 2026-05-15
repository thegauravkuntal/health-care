// ==========================
// HERO SLIDER
// ==========================

const slider = document.getElementById("heroSlider");

if (slider) {

  const totalSlides = 3;

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


// OPEN MENU
if (menuBtn) {

  menuBtn.addEventListener("click", () => {

    mobileMenu.style.right = "0";

    overlay.classList.remove("hidden");

    setTimeout(() => {

      overlay.classList.remove("opacity-0");

    }, 10);

  });

}


// CLOSE MENU
function closeMenu() {

  mobileMenu.style.right = "-100%";

  overlay.classList.add("opacity-0");

  setTimeout(() => {

    overlay.classList.add("hidden");

  }, 300);

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