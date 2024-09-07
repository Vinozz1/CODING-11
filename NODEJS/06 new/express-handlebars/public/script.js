document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Iterate over each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            
            const url = this.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    document.getElementById('goat').innerHTML = html;
                })
                .catch(error => {
                    console.error('Error loading content:', error);
                });
        });
    });
});
