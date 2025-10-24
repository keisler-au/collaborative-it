document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.header');
    const desiredWidth = 400;

    headers.forEach(header => {
        const fitText = () => {
            let fontSize = 100; // Starting font size
            header.style.fontSize = fontSize + 'px';

            // Adjust font size until the text width is close to the desired width
            while (header.scrollWidth > desiredWidth && fontSize > 10) {
                fontSize -= 1;
                header.style.fontSize = fontSize + 'px';
            }

            // Fine-tune to get closer to 400px
            while (header.scrollWidth < desiredWidth && fontSize < 200) {
                fontSize += 0.5;
                header.style.fontSize = fontSize + 'px';
                if (header.scrollWidth > desiredWidth) {
                    fontSize -= 0.5;
                    header.style.fontSize = fontSize + 'px';
                    break;
                }
            }
        };

        fitText();

        // Optional: Re-run on window resize if the layout is responsive
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(fitText, 100);
        });
    });
});
