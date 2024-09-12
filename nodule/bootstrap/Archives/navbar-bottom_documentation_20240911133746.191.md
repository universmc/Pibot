## Documentation Bootstrap: navbar-bottom

Le composant **navbar-bottom** est une classe de Bootstrap qui permet de positionner la barre de navigation en bas de la page. 

**Utilisation:**

Pour utiliser cette classe, il suffit d'ajouter **`navbar-bottom`** à l'élément `<nav>` qui contient votre barre de navigation.

```html
<nav class="navbar navbar-bottom navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar Bottom</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Accueil <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">À propos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
```

**Options de personnalisation:**

* **`navbar-light` et `navbar-dark`:** Définissent la couleur de fond de la barre de navigation.
* **`bg-primary`, `bg-secondary`, etc.:**  Utilisez les classes de couleur Bootstrap pour personnaliser la couleur de fond.
* **`navbar-expand-lg`, `navbar-expand-md`, `navbar-expand-sm`, `navbar-expand-xs`:** Définissez la taille de l'écran à partir de laquelle la barre de navigation s'étend.
* **`justify-content-start`, `justify-content-center`, `justify-content-end`:** Ajustez l'alignement des éléments de la barre de navigation.
* **`align-items-center`:** Ajustez l'alignement vertical des éléments de la barre de navigation.

**Fonctions complémentaires:**

* **`navbar-toggler`:**  Permet de créer le bouton hamburger qui déclenche l'extension de la barre de navigation sur les écrans plus petits.
* **`navbar-collapse`:**  Contient les éléments de la barre de navigation qui s'étendent lorsque le bouton hamburger est activé.
* **`nav-item` et `nav-link`:**  Utilisez ces classes pour créer les éléments de menu de la barre de navigation.



**Remarque:** Le composant `navbar-bottom` est un composant simple et peut être combiné avec d'autres classes de Bootstrap pour créer des barres de navigation personnalisées.