const topBar = document.querySelector('.top-bar');
const headerNav = document.querySelector('.header-nav');

//add event listener for navbar
document.addEventListener('scroll', () => {
  if(window.scrollY > 0){
    //remove top bar on scroll
    topBar.setAttribute("style","display:none");
    //add styles to the main nav
    headerNav.classList.add('scrolled');
    headerNav.classList.remove('.header-nav');
  } else{
    //add back top bar
    topBar.removeAttribute("style")
    headerNav.classList.remove('scrolled');
    headerNav.classList.add('.header-nav');
  }
})

const likeButton = document.querySelector('.likeButton');
likeButton.addEventListener('mouseover',() => {
  likeButton.classList.remove('bi-heart');
  likeButton.classList.add('bi-heart-fill');
})
likeButton.addEventListener('mouseout',() => {
  likeButton.classList.remove('bi-heart-fill');
  likeButton.classList.add('bi-heart');
})


