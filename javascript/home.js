/* menu-drawer가 open 되면 header의 색상을 흰색으로 */
const drawer = document.querySelector('.menu-drawer');
const header = document.querySelector('header');

const observer = new MutationObserver(() => {
    if (drawer.classList.contains('open')) {
        header.classList.add('has-background');
    } else {
        header.classList.remove('has-background');
    }
});

observer.observe(drawer, { attributes: true, attributeFilter: ['class'] });

window.addEventListener('resize', () => {
    if (drawer.classList.contains('open')) {
        const menuToggle = document.querySelector('.menu-toggle');
        menuToggle.click();
    }
});

/* */
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('header .menu');
    const rootStyles = getComputedStyle(document.documentElement);
    const headerHeight = parseInt(rootStyles.getPropertyValue('--header-height')) || 60;

    window.addEventListener('scroll', () => {
    if (window.scrollY >= headerHeight) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
    });
});