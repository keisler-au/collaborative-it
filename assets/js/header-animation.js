document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('dynamic-wrapper');
    const words = Array.from(wrapper.children);
    let currentIndex = 0;

    const pauseTime = 3000;
    const transitionTime = 1000;

    function cycleWords() {
        const currentWord = words[currentIndex];
        currentWord.classList.add('active');
        const newWidth = currentWord.getBoundingClientRect().width;
        wrapper.style.width = newWidth + 'px';
        setTimeout(() => {
            wrapper.style.width = '0px';
            setTimeout(() => {
                currentWord.classList.remove('active');
                currentIndex = (currentIndex + 1) % words.length;
                cycleWords();
            }, transitionTime);
        }, pauseTime);
    }
    wrapper.style.width = '0px';
    setTimeout(cycleWords, 100);
});