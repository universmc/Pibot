## Machine à Prompt pour Three.js : Construction d'une caméra

### Contexte

Cette machine à prompt est conçue pour générer du code source Three.js pour la construction d'une caméra. Elle prend en compte les spécificités du projet " ./three.js " et utilise un ensemble de données riche pour produire des résultats précis et pertinents.

### Dataset

Le dataset comprend :

* **HTML, SCSS, JS, JSX, JSON:** Exemples de code source Three.js, incluant des configurations de caméras, des scripts d'animation et des données de scène.
* **Documentation Three.js:** La documentation officielle de Three.js, fournissant une description complète des classes, des méthodes et des propriétés liées aux caméras.
* **Exemples de projets:** Des projets open-source Three.js utilisant différentes configurations de caméras et des techniques d'animation.

### Variables, Paramètres et Fonctions

La machine à prompt prend en compte les variables suivantes :

* **Type de caméra:** Perspective, orthographique, ou autre (par exemple, caméraFollow).
* **Position initiale:** Coordonnées x, y, z de la caméra.
* **Cible:** Point vers lequel la caméra se dirige.
* **Angle de vue:** Champ de vision de la caméra (pour les caméras perspective).
* **Profondeur de champ:**  Distance entre le plan focal et le plan de netteté (pour les caméras perspective).
* **Zoom:** Facteur de zoom appliqué à la caméra.
* **Fonctionnalités supplémentaires:** Rotation automatique, animation, etc.

### Boucles

La machine à prompt peut générer des boucles pour animer la caméra, modifier ses paramètres au fil du temps, ou suivre un objet dans la scène.

### Tâches

* **Générer le code source pour une caméra Three.js personnalisée.**
* **Ajuster les paramètres d'une caméra existante.**
* **Créer une animation de caméra.**
* **Faire suivre une caméra un objet dans la scène.**

### Processus

1. **Analyse du prompt:** La machine à prompt analyse le prompt utilisateur pour identifier les variables, les paramètres et les fonctionnalités souhaitées.
2. **Recherche dans le dataset:** Elle recherche dans le dataset des exemples de code source et des informations pertinentes correspondant aux spécifications du prompt.
3. **Génération du code:** La machine à prompt génère du code source Three.js en utilisant les informations trouvées dans le dataset et en appliquant les paramètres spécifiés dans le prompt.
4. **Optimisation et validation:** Le code généré est optimisé pour la performance et validé pour s'assurer qu'il fonctionne correctement.

### Caractéristiques et Inférence Recherchées

* **Précision:** Le code généré doit être précis et fonctionnel.
* **Flexibilité:** La machine à prompt doit être capable de générer différents types de caméras et d'animations.
* **Adaptabilité:** Elle doit pouvoir s'adapter à des prompts complexes et à des configurations spécifiques.
* **Compréhensibilité:** Le code généré doit être lisible et compréhensible pour les développeurs.

## Prompt Ultime

**Construire une caméra perspective Three.js qui suit un objet en mouvement.**

**Détails:**

* **Type de caméra:** Perspective
* **Position initiale:** (0, 5, 10)
* **Cible:** Un objet nommé "objet" avec la position (0, 0, 0).
* **Angle de vue:** 75 degrés
* **Profondeur de champ:** 0.1 - 1000
* **Fonctionnalités supplémentaires:** La caméra doit suivre l'objet en mouvement en douceur.

### Code Source Attendu

```javascript
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 5, 10 );

const target = object; // Remplacez "object" par le nom de votre objet

camera.lookAt( target.position );

function animate() {
  requestAnimationFrame( animate );

  // Mise à jour de la position de la caméra pour suivre l'objet
  camera.position.lerp( target.position.clone().add( new THREE.Vector3( 0, 5, 0 ) ), 0.1 );
  camera.lookAt( target.position );

  // ... Autres mises à jour de la scène
}

animate();
```

**Note:**

Ce code est un exemple basique et peut nécessiter des ajustements en fonction de votre projet spécifique.


