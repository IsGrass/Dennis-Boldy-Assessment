
     let slideIndex = 0;
     const slides = document.getElementsByClassName("bannerslides");
     const wrapper = document.querySelector(".slides-wrapper");
     const totalSlides = slides.length;     function showSlides() {
         slideIndex++;
         if (slideIndex >= totalSlides) slideIndex = 0;
         wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
         setTimeout(showSlides, 4000);
     }
     wrapper.style.transform = `translateX(0)`;
     showSlides();     document.querySelector('.hbtn').addEventListener('click', function() {
     document.getElementById('shift').classList.add('body-shift');
     document.getElementById('sidebar').classList.add('active');
 });
     document.getElementById('closeSidebar').addEventListener('click', function() {
     document.getElementById('shift').classList.remove('body-shift');
     document.getElementById('sidebar').classList.remove('active');
 });      window.addEventListener('DOMContentLoaded', function() {
     if (!localStorage.getItem('cookiesAccepted',)) {
         document.getElementById('cookie-popup').style.display = 'block';
     }
     document.getElementById('accept-cookies').onclick = function() {
         localStorage.setItem('cookiesAccepted', 'true');
         document.getElementById('cookie-popup').style.display = 'none';
     };
 });