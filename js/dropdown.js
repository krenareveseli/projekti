const burger = document.querySelector('.kv-burger');
  const navBar = document.querySelector('.kv-nav-bar');

  // Toggle navbar në mobile
  burger.addEventListener('click', () => {
    navBar.classList.toggle('active');
  });

  // Toggle dropdown në mobile
  const dropdownLinks = document.querySelectorAll('.kv-dropdown > a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        link.nextElementSibling.classList.toggle('show');
      }
    });
  });