##  Documentation du composant Bootstrap : Hero Section

La section Hero de Bootstrap est un composant puissant et flexible permettant de créer des bannières attrayantes et impactantes pour votre site web. Elle est idéale pour mettre en avant des messages clés, des promotions, des appels à l'action ou des images captivantes.

**Structure et Fonctionnement:**

La section Hero est construite à partir de plusieurs éléments Bootstrap:

* **`container`:**  Définie la largeur de la section et assure un affichage optimal sur différents écrans.
* **`row`:**  Divise la section en lignes horizontales pour organiser le contenu.
* **`col`:**  Détermine la largeur des colonnes contenues dans la section.
* **`jumbotron`:**  Élément Bootstrap qui définit le style et la mise en page de la bannière.

**Utilisation de Base:**

```html
<div class="jumbotron text-center">
  <h1>Titre de la section Hero</h1>
  <p class="lead">Description courte et accrocheuse.</p>
  <a href="#" class="btn btn-primary btn-lg">Appeler à l'action</a>
</div>
```

**Personnalisation:**

La section Hero offre de nombreuses possibilités de personnalisation:

* **Style:**

    *  Utilisez la classe `jumbotron` pour le style par défaut.
    *  Utilisez des classes supplémentaires comme `bg-primary`, `bg-secondary` etc. pour personnaliser la couleur de fond.
    *  Utilisez des classes comme `text-white`, `text-light`, `text-dark` pour personnaliser la couleur du texte.
    *  Ajustez la hauteur de la section en modifiant la hauteur de l'élément `jumbotron`.

* **Contenu:**

    *  Adaptez le titre (h1) et la description (p) à votre message.
    *  Ajoutez des images en utilisant l'élément `img`.
    *  Ajoutez des éléments supplémentaires comme des listes (ul, ol), des liens, des formulaires etc.

* **Responsive Design:**

    *  Bootstrap s'adapte automatiquement aux différents écrans.
    *  Utilisez des classes `col-md-` pour contrôler la largeur des colonnes sur les écrans moyens et plus grands.
    *  Utilisez des classes `col-sm-` pour contrôler la largeur des colonnes sur les écrans petits.

**Exemples:**

* **Hero Section avec image:**

```html
<div class="jumbotron text-center">
  <img src="image.jpg" alt="Image de la section Hero" class="img-fluid">
  <h1 class="display-4">Titre de la section Hero</h1>
  <p class="lead">Description courte et accrocheuse.</p>
  <a href="#" class="btn btn-primary btn-lg">Appeler à l'action</a>
</div>
```

* **Hero Section avec deux colonnes:**

```html
<div class="jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Titre de la section Hero</h1>
        <p>Description courte et accrocheuse.</p>
      </div>
      <div class="col-md-6">
        <img src="image.jpg" alt="Image de la section Hero" class="img-fluid">
      </div>
    </div>
  </div>
</div>
```



**Ressources Supplémentaires:**

* [Documentation Bootstrap officielle](https://getbootstrap.com/docs/4.5/components/jumbotron/)
* [Exemple de Hero Section avec code source](https://startbootstrap.com/themes/heroic-features)