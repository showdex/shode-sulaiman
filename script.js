document.querySelectorAll('.project1 a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevents the default link behavior for demonstration
                alert("This project is still in progress: " + link.parentElement.querySelector('h3').textContent);
            });
        });