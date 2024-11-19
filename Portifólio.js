    let index = 0; 
    const images = document.querySelectorAll('.carrossel img');
    const totalImages = images.length;
    const carrossel = document.querySelector('.carrossel');


    function atualizarCarrossel() {
        carrossel.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index === 0) ? totalImages - 1 : index - 1;
        atualizarCarrossel();
    });

    document.querySelector('.next').addEventListener('click', () => {
        index = (index === totalImages - 1) ? 0 : index + 1;
        atualizarCarrossel();
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
