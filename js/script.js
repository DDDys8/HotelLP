
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('#heroSplide')) {
    new Splide('#heroSplide', {
      type   : 'loop',
      perPage: 1,
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
    }).mount();
  }
});
