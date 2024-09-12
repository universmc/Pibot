```javascript
import 'bootstrap';

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-fixed-top');
  } else {
    navbar.classList.remove('navbar-fixed-top');
  }
});
```