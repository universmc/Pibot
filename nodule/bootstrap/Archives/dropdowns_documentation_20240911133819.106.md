## Documentation Bootstrap : Dropdowns

Les dropdowns permettent aux utilisateurs d'accéder à un menu déroulant de liens ou d'options. Ils sont faciles à utiliser et à personnaliser grâce à la flexibilité de Bootstrap.

###  Aperçu

Les dropdowns sont construits avec des éléments `<div>` et `<button>`, et utilisent des classes CSS pour leur style et leur comportement.  

**Structure basique:**

```html
<div class="dropdown">
  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Lien déclencheur
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Option 1</a>
    <a class="dropdown-item" href="#">Option 2</a>
    <a class="dropdown-item" href="#">Option 3</a>
  </div>
</div>
```

###  Classes CSS

* **`.dropdown`**: La classe principale qui encapsule le menu déroulant.
* **`.dropdown-toggle`**: La classe appliquée au bouton déclencheur du menu.
* **`.dropdown-menu`**: La classe appliquée au conteneur des options du menu.
* **`.dropdown-item`**: La classe appliquée à chaque élément de menu.

###  Options

* **`data-bs-toggle="dropdown"`**: Déclenche le menu déroulant lorsque le bouton est cliqué.
* **`aria-haspopup="true"`**: Indique que le bouton déclenche un menu déroulant.
* **`aria-expanded="false"`**: Indique que le menu est initialement fermé.

###  Variations

* **Dropdowns alignés à droite:** Utilisez la classe `.dropdown-menu-end` pour aligner le menu à droite.
* **Dropdowns alignés à gauche:** Utilisez la classe `.dropdown-menu-start` pour aligner le menu à gauche.
* **Dropdowns insérés dans d'autres éléments:** Vous pouvez insérer des dropdowns dans des éléments `<nav>`, `<div>`, etc.

###  Personnalisation

* **Style:** Vous pouvez personnaliser l'apparence des dropdowns en modifiant les classes CSS et en utilisant les variables de Bootstrap.
* **Fonctionnalité:** Vous pouvez ajouter des fonctionnalités supplémentaires aux dropdowns en utilisant JavaScript.

###  Exemples

* **Dropdown simple:**

```html
<div class="dropdown">
  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Menu
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

* **Dropdown aligné à droite:**

```html
<div class="dropdown dropdown-menu-end">
  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Menu
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```



###  Ressources supplémentaires

* [Documentation Bootstrap officielle](https://getbootstrap.com/docs/5.2/components/dropdowns/#)
* [Exemple source](https://getbootstrap.com/docs/5.2/examples/dropdowns/#)