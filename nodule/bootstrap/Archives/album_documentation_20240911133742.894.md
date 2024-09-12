## Documentation du composant Album de Bootstrap

Le composant **Album** de Bootstrap est un outil puissant pour présenter vos photos et vos galeries d'images de manière élégante et responsive. Il s'adapte parfaitement à différents types de contenu, que ce soit des portraits, des paysages, des produits ou des illustrations. 

### Structure du composant

Le composant Album est construit autour d'une grille de photos. Chaque image est encapsulée dans un élément **.album-item**, qui peut être utilisé pour personnaliser l'apparence et le comportement de chaque élément de la galerie.

**Exemple de structure:**

```html
<div class="album">
  <div class="album-item">
    <img src="image1.jpg" alt="Image 1">
    <div class="album-item-caption">
      <p>Description de l'image 1</p>
    </div>
  </div>
  <div class="album-item">
    <img src="image2.jpg" alt="Image 2">
    <div class="album-item-caption">
      <p>Description de l'image 2</p>
    </div>
  </div>
  <!-- ...Plus d'éléments album-item -->
</div>
```

### Classes CSS clés

* **`.album`**: Classe principale pour le composant Album.

* **`.album-item`**: Classe pour chaque élément de la galerie.
* **`.album-item img`**: Classe pour l'image dans chaque élément de la galerie.
* **`.album-item-caption`**: Classe pour la légende sous l'image.

### Options de personnalisation

* **Nombres de colonnes**: Utilisez la classe `d-sm-flex` pour définir le nombre de colonnes par ligne. Vous pouvez utiliser `d-sm-1`, `d-sm-2`, `d-sm-3` etc. pour définir 1 à 3 colonnes par ligne.
* **Taille des images**: Vous pouvez ajuster la taille des images en utilisant les classes d'image Bootstrap.
* **Style de la légende**: Vous pouvez personnaliser l'apparence de la légende en utilisant les classes CSS Bootstrap pour les polices, les couleurs, les marges, etc.
* **Animations**: Vous pouvez ajouter des animations à l'album en utilisant les classes CSS Bootstrap.

### Exemples d'utilisation

* **Galerie de produits**: Présentez vos produits dans un format attrayant.
* **Portfolio**: Montrez vos travaux les plus récents.
* **Blog**: Intégrez une galerie d'images avec vos articles.
* **Site web personnel**: Partagez vos photos préférées.

### Ressources

* [Documentation Bootstrap](https://getbootstrap.com/docs/5.2/components/album/)
* [GitHub Bootstrap](https://github.com/twbs/bootstrap)