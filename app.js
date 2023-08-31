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

const likeButton = document.querySelector('.likeButton');
likeButton.addEventListener('mouseover',() => {
  likeButton.classList.remove('bi-heart');
  likeButton.classList.add('bi-heart-fill');
})
likeButton.addEventListener('mouseout',() => {
  likeButton.classList.remove('bi-heart-fill');
  likeButton.classList.add('bi-heart');
})
