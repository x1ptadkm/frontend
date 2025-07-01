let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const slider = document.querySelector('.slider');

// Tạo dots
const dotsContainer = document.querySelector('.dots');
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Cập nhật dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function goToSlide(n) {
    currentSlide = n;
    updateSlider();
}

// Auto slide
setInterval(nextSlide, 5000);

// Khởi tạo
updateSlider(); 