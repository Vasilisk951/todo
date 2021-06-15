export default function scrollTo(top) {
    window.scrollTo({
        top: top + 'px',
        behavior: 'smooth'
    });
};