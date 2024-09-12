
##  Utilisation du composant navBar

Le composant `navBar` est conçu pour créer des barres de navigation intuitives et esthétiques. 

**Exemple de code:**

```html
<navBar 
  title="Votre Application"
  items={[
    { label: "Accueil", link: "/" },
    { label: "À propos", link: "/about" },
    { label: "Contact", link: "/contact" },
  ]}
/> 
```

**Props disponibles:**

- **title**: (string) Le titre de la barre de navigation.
- **items**: (array) Une liste d'objets représentant les éléments de la barre de navigation. Chaque objet doit contenir les propriétés suivantes:
    - **label**: (string) Le texte affiché pour l'élément.
    - **link**: (string) Le lien associé à l'élément.

**Fonctionnalités:**

- **Rendu adaptatif**: Le composant est responsive et s'adapte aux différents écrans.
- **Navigation intuitive**:  Les éléments de navigation sont clairement affichés et permettent une navigation fluide.
- **Personnalisation**: Vous pouvez personnaliser l'apparence de la barre de navigation en modifiant les props.

**Astuces:**

- Utilisez des icônes pour les éléments de navigation afin de les rendre plus visuellement attrayants.
- Vous pouvez ajouter des classes CSS personnalisées pour modifier l'apparence de la barre de navigation.



##  Remarques Importantes

- **Dépendances**: Le composant `navBar` dépend du framework Bootstrap. Assurez-vous d'avoir inclus les fichiers Bootstrap dans votre application.
- **Logique interne**: [Décrivez ici la logique interne du composant, si nécessaire]



