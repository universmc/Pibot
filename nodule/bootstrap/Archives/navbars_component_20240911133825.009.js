```javascript
import 'bootstrap/dist/js/bootstrap.bundle.min';

const navbar = document.createElement('nav');
navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');

const container = document.createElement('div');
container.classList.add('container');

const brand = document.createElement('a');
brand.classList.add('navbar-brand');
brand.textContent = 'My Website';

const toggleButton = document.createElement('button');
toggleButton.classList.add('navbar-toggler');
toggleButton.setAttribute('type', 'button');
toggleButton.setAttribute('data-bs-toggle', 'collapse');
toggleButton.setAttribute('data-bs-target', '#navbarNav');
toggleButton.setAttribute('aria-controls', 'navbarNav');
toggleButton.setAttribute('aria-expanded', 'false');
toggleButton.setAttribute('aria-label', 'Toggle navigation');

const span = document.createElement('span');
span.classList.add('navbar-toggler-icon');

toggleButton.appendChild(span);

const collapse = document.createElement('div');
collapse.classList.add('collapse', 'navbar-collapse');
collapse.setAttribute('id', 'navbarNav');

const navList = document.createElement('ul');
navList.classList.add('navbar-nav');

const listItem1 = document.createElement('li');
listItem1.classList.add('nav-item');
const link1 = document.createElement('a');
link1.classList.add('nav-link');
link1.href = '#';
link1.textContent = 'Home';
listItem1.appendChild(link1);

const listItem2 = document.createElement('li');
listItem2.classList.add('nav-item');
const link2 = document.createElement('a');
link2.classList.add('nav-link');
link2.href = '#';
link2.textContent = 'About';
listItem2.appendChild(link2);

const listItem3 = document.createElement('li');
listItem3.classList.add('nav-item');
const link3 = document.createElement('a');
link3.classList.add('nav-link');
link3.href = '#';
link3.textContent = 'Contact';
listItem3.appendChild(link3);

navList.appendChild(listItem1);
navList.appendChild(listItem2);
navList.appendChild(listItem3);

collapse.appendChild(navList);

container.appendChild(brand);
container.appendChild(toggleButton);
container.appendChild(collapse);

navbar.appendChild(container);

document.body.appendChild(navbar);
```