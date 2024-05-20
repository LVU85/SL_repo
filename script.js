// Добавление интерактивности

// Плавная прокрутка к якорю
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Анимация при скролле
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const featuresSection = document.querySelector('.features');
  const testimonialsSection = document.querySelector('.testimonials');

  if (scrollPosition > featuresSection.offsetTop - window.innerHeight / 2) {
    featuresSection.classList.add('animate');
  }

  if (scrollPosition > testimonialsSection.offsetTop - window.innerHeight / 2) {
    testimonialsSection.classList.add('animate');
  }
});