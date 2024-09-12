##  Documentation de Bootstrap: `navbar-fixed`

Le composant `navbar-fixed` de Bootstrap permet de fixer un menu de navigation en haut de la page, de manière à ce qu'il reste visible même lorsque l'utilisateur fait défiler la page. 

**Fonctionnement:**

Le `navbar-fixed` est une classe CSS qui s'applique à un élément `<nav>` pour le fixer en haut de la page. 

**Utilisation:**

1. **Incluez Bootstrap:** Assurez-vous d'avoir inclus les fichiers CSS et JavaScript de Bootstrap dans votre HTML.

2. **Créez votre navigation:** Définissez votre élément `<nav>` avec la classe `navbar navbar-fixed-top` (ou `navbar navbar-fixed-bottom` pour fixer le menu en bas de la page).

3. **Ajoutez des liens:** Placez vos liens de navigation dans les éléments `<ul>` et `<li>` à l'intérieur de votre élément `<nav>`.

**Exemple:**

```html
<nav class="navbar navbar-fixed-top">
  <div class="container">
    <ul class="nav navbar-nav">
      <li><a href="#">Accueil</a></li>
      <li><a href="#">À propos</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>
```

**Options:**

* **`navbar-fixed-top`:** Fixe le menu en haut de la page.
* **`navbar-fixed-bottom`:** Fixe le menu en bas de la page.

**Points importants:**

*  Utilisez `navbar-fixed` avec parcimonie, car il peut affecter l'expérience utilisateur si le menu est trop volumineux ou intrusif.
*  Assurez-vous que le contenu de votre page est suffisamment espacé pour éviter que le menu fixé ne recouvre du contenu important.
*  Vous pouvez personnaliser l'apparence de votre menu fixé en utilisant les autres classes et options de Bootstrap.

**Ressources supplémentaires:**

* [Documentation officielle de Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/)