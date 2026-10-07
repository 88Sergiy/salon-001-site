// Анімація тексту
document.addEventListener("DOMContentLoaded", () => {
  const text = "зі стильною зачіскою";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  if (!typingElement) return;

  typingElement.textContent = "";
  typingElement.style.borderRight = "2px solid #e91e63";
  typingElement.style.animation = "blink 0.7s infinite";

  function typeText() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100);
    } else {
      typingElement.style.borderRight = "none";
      typingElement.style.animation = "none";
    }
  }

  typeText();
});


// Swiper-слайдер
document.addEventListener("DOMContentLoaded", () => {
  const swiperElement = document.querySelector(".swiper");
  if (!swiperElement) return;

  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});


// Модальне вікно прайсу — ПРАВИЛЬНИЙ ОДИН БЛОК
document.addEventListener("DOMContentLoaded", () => {
    const priceLink = document.getElementById("price-link");
    const modal = document.getElementById("price-modal");
    const closeBtn = modal.querySelector(".close");

    if (!priceLink || !modal || !closeBtn) return;

    // Відкрити модальне вікно
    priceLink.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // Закрити по кнопці ×
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрити по кліку поза модальним вікном
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


// Бургер-меню
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navs = document.querySelectorAll(".nav-contact nav");

  if (!burger || !navs.length) return;

  burger.addEventListener("click", () => {
    navs.forEach(n => n.classList.toggle("active"));
  });
});
