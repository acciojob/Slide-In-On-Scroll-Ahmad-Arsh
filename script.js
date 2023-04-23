// Your JS code here.
 function debounce(func, wait = 20, immediate = true) {
      let timeout;
      return function() {
        const context = this, args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    function checkSlide(e) {
      const images = document.querySelectorAll('.slide-in');
      images.forEach(image => {
        // halfway through the image
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        // bottom of the image
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));