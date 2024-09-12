##  Documentation Bootstrap NavBar 

Le composant `navbar` de Bootstrap permet de créer des en-têtes de page puissants et flexibles. Il offre une structure et des styles pour les menus, les logos, les boutons et d'autres éléments essentiels du header d'un site web. 

**Vue d'ensemble**

Le composant `navbar` est composé de plusieurs éléments clés :

* **`navbar`**:  Classe principale qui définit le style global du menu.
* **`navbar-brand`**:  Élément contenant le logo du site ou son nom.
* **`navbar-nav`**:  Élément contenant les liens du menu.
* **`nav-item`**:  Élément individuel pour chaque lien du menu.
* **`nav-link`**:  Lien du menu.
* **`collapse`**:  Classe permettant de créer un menu déroulant.
* **`navbar-toggler`**:  Bouton pour activer/désactiver le menu déroulant.

**Exemple de base**

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mon Site</a>
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

**Options de personnalisation**

* **`navbar-dark`**:  Utilisez cette classe pour un header sombre.
* **`navbar-light`**:  Utilisez cette classe pour un header clair.
* **`navbar-expand-lg`**:  Développez le menu en mode grand écran (largeur de l'écran supérieure à 992px).
* **`navbar-expand-md`**:  Développez le menu en mode medium écran (largeur de l'écran supérieure à 768px).
* **`navbar-expand-sm`**:  Développez le menu en mode petit écran (largeur de l'écran supérieure à 576px).
* **`navbar-fixed-top`**:  Fixez le header en haut de la page.
* **`navbar-fixed-bottom`**:  Fixez le header au bas de la page.

**Liens additionnels**

* [Documentation officielle Bootstrap NavBar](https://getbootstrap.com/docs/4.5/components/navbar/)