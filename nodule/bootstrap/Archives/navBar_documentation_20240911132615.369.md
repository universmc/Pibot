## Bootstrap Navbar: Documentation

Le composant **Navbar** de Bootstrap est un outil puissant pour construire des en-têtes et des barres de navigation robustes et flexibles pour vos sites web. Il vous permet de créer des menus de navigation, des logo, des boutons d'appel à l'action et d'autres éléments essentiels pour votre interface utilisateur.

### Structure de base

Le composant Navbar est construit avec les éléments HTML suivants:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Votre Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">À propos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
    </ul>
  </div>
</nav>
```

### Classes clés

* **`navbar`:** Classe principale pour le composant Navbar.
* **`navbar-expand-lg`:** Classe pour activer la responsive behavior du menu (s'adapte aux différents écrans).
* **`navbar-light`:** Classe pour un style clair de Navbar.
* **`navbar-dark`:** Classe pour un style sombre de Navbar.
* **`bg-light`:** Classe pour un fond clair.
* **`bg-dark`:** Classe pour un fond sombre.
* **`navbar-brand`:** Classe pour l'élément de logo.
* **`navbar-toggler`:** Classe pour le bouton de toggle du menu.
* **`navbar-collapse`:** Classe pour le contenu du menu qui se collapse sur les petits écrans.
* **`navbar-nav`:** Classe pour la liste des liens du menu.
* **`nav-item`:** Classe pour chaque élément du menu.
* **`nav-link`:** Classe pour les liens du menu.

### Options de personnalisation

Bootstrap offre de nombreuses options pour personnaliser l'apparence et le comportement du Navbar:

* **Styles:** Vous pouvez choisir entre différents styles de Navbar (clair, sombre, etc.) en utilisant les classes `navbar-light`, `navbar-dark` et autres.
* **Alignment:** Vous pouvez aligner le logo et le menu à gauche, au centre ou à droite en utilisant les classes `justify-content-start`, `justify-content-center` et `justify-content-end`.
* **Responsiveness:** Vous pouvez contrôler comment le menu se comporte sur les différents écrans en utilisant les classes `navbar-expand-sm`, `navbar-expand-md`, `navbar-expand-lg` et `navbar-expand-xl`.
* **Boutons:** Vous pouvez ajouter des boutons à votre Navbar en utilisant les classes `btn` et `btn-primary`, etc.

### Exemples

* **Navbar simple:**

```html
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Votre Logo</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Accueil</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">À propos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Services</a>
    </li>
  </ul>
</nav>
```

* **Navbar avec bouton toggle:**

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Votre Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">À propos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
    </ul>
  </div>
</nav>
```

### Ressources supplémentaires

* [Documentation Bootstrap Navbar](https://getbootstrap.com/docs/4.5/components/navbar/)
* [Exemples Bootstrap Navbar](https://getbootstrap.com/docs/4.5/examples/navbar/)