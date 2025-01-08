function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    const content = document.querySelector('.content');
    if (sideMenu.style.width === '250px') {
        sideMenu.style.width = '0';
        content.style.marginLeft = '0';
    } else {
        sideMenu.style.width = '250px';
        content.style.marginLeft = '250px';
    }
}
