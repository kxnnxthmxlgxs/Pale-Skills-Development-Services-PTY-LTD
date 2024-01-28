
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');

    function handleScroll() {
        elements.forEach(function(element) {
            const rect = element.getBoundingClientRect();
            const isInView = (rect.top >= 0 && rect.bottom <= window.innerHeight);

            if (isInView && !element.classList.contains('active')) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    // Trigger the initial check on page load
    handleScroll();
});
