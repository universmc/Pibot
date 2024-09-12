##  Documentation de Bootstrap Album RTL

**Album RTL** est un composant Bootstrap conçu pour présenter des galeries d'images de manière attractive et responsive, adapté à la lecture de texte de droite à gauche (RTL).

**Installation:**

Comme tous les composants Bootstrap, Album RTL est intégré au framework Bootstrap. Vous n'avez donc pas besoin d'installation supplémentaire. 

**Structure:**

Album RTL utilise une structure HTML simple et flexible pour organiser les images. Voici un exemple de base:

```html
<div class="album">
  <div class="album-item">
    <img src="image1.jpg" alt="Image 1">
  </div>
  <div class="album-item">
    <img src="image2.jpg" alt="Image 2">
  </div>
  <!-- Ajoutez plus d'éléments album-item pour vos images -->
</div>
```

**Classes:**

* **`.album`**: Classe principale pour le conteneur de la galerie.
* **`.album-item`**: Classe pour chaque élément de la galerie, représentant une image.

**Options de personnalisation:**

* **Nombre de colonnes:** Vous pouvez contrôler le nombre de colonnes d'images affichées en utilisant les classes suivantes:
    * `.album-grid-1`: Une colonne
    * `.album-grid-2`: Deux colonnes
    * `.album-grid-3`: Trois colonnes
    * `.album-grid-4`: Quatre colonnes
* **Taille des images:** Vous pouvez ajuster la taille des images en utilisant des classes comme `.img-fluid` pour les rendre responsive.

**Exemple complet:**

```html
<div class="album album-grid-3">
  <div class="album-item">
    <img src="image1.jpg" alt="Image 1" class="img-fluid">
  </div>
  <div class="album-item">
    <img src="image2.jpg" alt="Image 2" class="img-fluid">
  </div>
  <div class="album-item">
    <img src="image3.jpg" alt="Image 3" class="img-fluid">
  </div>
  <!-- Ajoutez plus d'éléments album-item pour vos images -->
</div>
```

**Remarques:**

* L'album RTL est conçu pour fonctionner avec les thèmes Bootstrap RTL.
* Vous pouvez ajouter des liens, des titres et des descriptions aux images comme vous le souhaitez.
* Adaptez les classes et les options de personnalisation à vos besoins spécifiques.