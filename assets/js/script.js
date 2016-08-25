// Check if the DOMContentLoaded has already been completed
if (document.readyState === 'complete' || document.readyState !== 'loading') {
  scrollBarHandler();
} else {
  document.addEventListener('DOMContentLoaded', scrollBarHandler);
}

function scrollBarHandler() {
  var nav = document.querySelector('.scroll-nav');

  window.addEventListener('scroll', function() {
    var distance = document.body.scrollTop;

    if (distance > 190) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  })
}
