## Bootstrap Service Cards Documentation

**Service Cards** sont un composant Bootstrap puissant permettant de présenter de l'information de manière claire et concise. Ils sont idéaux pour mettre en valeur des services, des fonctionnalités ou des offres spécifiques.

**Structure HTML:**

```html
<div class="card">
  <div class="card-header">
    <h5 class="card-title">Nom du service</h5>
  </div>
  <div class="card-body">
    <p class="card-text">Description concise du service.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">En savoir plus</button>
  </div>
</div>
```

**Classes CSS:**

* **`.card`**: Classe principale pour définir un service card.
* **`.card-header`**: En-tête du service card, généralement contenant le titre du service.
* **`.card-title`**: Classe pour le titre du service, affiché en `h5`.
* **`.card-body`**: Corps du service card, contenant la description du service.
* **`.card-text`**: Classe pour le texte de description du service.
* **`.card-footer`**: Pied du service card, souvent utilisé pour les boutons d'action.

**Options de personnalisation:**

* **Icones:** Ajoutez une icône à l'en-tête du service card en utilisant les classes Bootstrap pour les icônes.
* **Images:** Incluez une image dans le corps du service card en utilisant la classe `.card-img` et ses sous-classes.
* **Boutons:** Personnalisez les boutons dans le pied du service card en utilisant les classes Bootstrap pour les boutons.
* **Couleurs:** Utilisez les classes Bootstrap pour modifier la couleur du service card et de ses éléments.

**Exemples:**

**Service Card simple:**

```html
<div class="card">
  <div class="card-header">
    <h5 class="card-title">Design Web</h5>
  </div>
  <div class="card-body">
    <p class="card-text">Des designs web modernes et responsive pour votre entreprise.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Contactez-nous</button>
  </div>
</div>
```

**Service Card avec image:**

```html
<div class="card">
  <img src="image.jpg" class="card-img-top" alt="Image du service">
  <div class="card-body">
    <h5 class="card-title">Développement Web</h5>
    <p class="card-text">Des solutions web sur mesure pour vos besoins spécifiques.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">En savoir plus</button>
  </div>
</div>
```

**Service Card avec icône:**

```html
<div class="card">
  <div class="card-header">
    <i class="fas fa-rocket card-icon"></i>
    <h5 class="card-title">Marketing Digital</h5>
  </div>
  <div class="card-body">
    <p class="card-text">Augmentez votre visibilité en ligne avec nos stratégies marketing.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Découvrez nos services</button>
  </div>
</div>
```



N'hésitez pas à consulter la documentation officielle de Bootstrap pour plus d'informations et d'options de personnalisation.