
let lastScrollTop = 0;

// listens for scroll event
// and executes a callback function
window.addEventListener('scroll', () => {

    let currentScrollTop = window.scrollY;

    let scrollDiffrenece = currentScrollTop - lastScrollTop;

    let tolerance = 5;

    if (Math.abs(scrollDiffrenece) >= tolerance) {

        if (scrollDiffrenece > 0) {
            if (!nav.classList.contains('hidden')) {
                nav.classList.add('hidden');
            }
        } else {
            if (nav.classList.contains('hidden')) {
                nav.classList.remove('hidden');
            }
        }

    }

    lastScrollTop = currentScrollTop;
});