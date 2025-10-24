
document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.positioning-container');
    if (containers.length === 0) return;

    let currentIndex = 0;
    containers[currentIndex].classList.add('active');

    function animateContainers() {
        containers[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % containers.length;
        containers[currentIndex].classList.add('active');
    }

    setInterval(animateContainers, 7000);
});