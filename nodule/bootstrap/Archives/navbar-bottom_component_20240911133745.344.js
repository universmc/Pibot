```javascript
import 'bootstrap';

const navbarBottom = document.createElement('nav');
navbarBottom.classList.add('navbar', 'navbar-bottom');

// Ajoutez votre contenu de navigation ici
navbarBottom.innerHTML = `
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">À propos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
`;

document.body.appendChild(navbarBottom);
```