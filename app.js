const topBar = document.querySelector('.top-bar');
const headerNav = document.querySelector('.header-nav');

window.onwheel = event => {
    if(event.deltaY >= 0){
        // Scrolling Down with the mouse
      headerNav.classList.add('scrolled');
      headerNav.classList.remove('.header-nav')

    } else {
      // Scrolling Up with mouse
      headerNav.classList.remove('scrolled');
      headerNav.classList.add('.header-nav')
    }
  }