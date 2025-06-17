const items = document.querySelectorAll('.itemm');
let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
            item.classList.remove('hidden');
        } else {
            item.classList.remove('active');
            item.classList.add('hidden');
        }
    });
}

document.getElementById('next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
});

// Inicializa mostrando o primeiro
showSlide(currentIndex);



document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.getElementById("mobile_btn");
  const mobileMenu = document.getElementById("mobile_menu");

  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

let list = document.querySelectorAll('.itemm')
let next = document.querySelectorById('next')
let prev = document.querySelectorById('prev')

//count = 3
//
