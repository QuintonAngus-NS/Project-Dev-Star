const cards = document.querySelectorAll('.whyChooseOption');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll', 'show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));