```javascript
import 'bootstrap';

const heroSection = document.createElement('section');
heroSection.classList.add('hero');

const container = document.createElement('div');
container.classList.add('container');

const row = document.createElement('div');
row.classList.add('row');

const col = document.createElement('div');
col.classList.add('col-md-12');

const heading = document.createElement('h1');
heading.textContent = 'Bienvenue sur notre site!';

const subheading = document.createElement('p');
subheading.textContent = 'Découvrez nos produits et services!';

col.appendChild(heading);
col.appendChild(subheading);
row.appendChild(col);
container.appendChild(row);
heroSection.appendChild(container);

document.body.appendChild(heroSection);
```