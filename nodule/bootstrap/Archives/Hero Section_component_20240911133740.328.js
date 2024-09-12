```javascript
import 'bootstrap';

const heroSection = document.createElement('section');
heroSection.classList.add('hero-section');

const container = document.createElement('div');
container.classList.add('container');

const row = document.createElement('div');
row.classList.add('row');

const col = document.createElement('div');
col.classList.add('col-md-12');

const content = document.createElement('div');
content.classList.add('hero-content');

const heading = document.createElement('h1');
heading.textContent = 'Bienvenue sur notre site!';

const subheading = document.createElement('p');
subheading.textContent = 'Découvrez nos produits et services!';

content.appendChild(heading);
content.appendChild(subheading);

col.appendChild(content);
row.appendChild(col);
container.appendChild(row);
heroSection.appendChild(container);

document.body.appendChild(heroSection);
```