// Detecting when the user has scrolled down
const scrollingHeader = (() => {
    const scrollHeader = (header, scrollY) => {
        header.classList.toggle('scrolling', scrollY > 5);
    };

    const onWindowScroll = () => {
        const header = document.querySelector('body > header');
        const scrollY = window.scrollY;

        scrollHeader(header, scrollY);
    };

    const initialise = () => {
        window.addEventListener('scroll', onWindowScroll);
    };

    return {
        init: initialise,
    }
})();

window.addEventListener('load', scrollingHeader.init);
