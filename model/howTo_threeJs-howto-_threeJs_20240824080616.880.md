##  Machine à Prompt pour la Gestion du Code Source Three.js 

**Objectif:** Simplifier la génération de code Three.js en utilisant des prompts clairs et concis. 

**Fonctionnement:**

La machine à prompt analyse un prompt utilisateur, comprenant des informations contextuelles et des spécifications de code, puis génère du code Three.js adapté.

**Composants:**

1. **Contexte:**
    * **Projet:**  "./three.js" (chemin du projet)
    * **Description:**  Brève description du projet (ex: "Création d'une scène 3D avec une sphère rouge")
2. **Dataset:**
    * **HTML:** Structure de la page web (ex: inclusion de Three.js, canvas)
    * **SCSS:** Styles CSS pour la scène et les éléments 3D
    * **JS:** Code JavaScript pour initialiser Three.js et manipuler la scène
    * **JSX:** Code JSX pour intégrer la scène dans un composant React (optionnel)
    * **JSON:** Données pour les objets 3D (ex: géométrie, textures)
3. **Variables:** 
    * **Scene:**  Objet Three.js représentant la scène
    * **Camera:** Objet Three.js représentant la caméra
    * **Renderer:** Objet Three.js responsable du rendu graphique
    * **Geometry:** Objet Three.js représentant la géométrie d'un objet 3D
    * **Material:** Objet Three.js définissant l'apparence d'un objet 3D
    * **Mesh:** Objet Three.js représentant un objet 3D composé de géométrie et de matériau
4. **Paramètres:**
    * **Taille de la scène:** Largeur et hauteur en pixels
    * **Angle de vue de la caméra:**  
    * **Position de la caméra:** Coordonnées (x, y, z)
    * **Couleur de la lumière:** RGB
    * **Couleur de l'objet:** RGB

5. **Fonctions:**
    * **initScene():** Initialisation de la scène, de la caméra et du renderer
    * **addSphere():** Ajout d'une sphère à la scène
    * **animate():** Fonction d'animation de la scène

6. **Boucles:**
    * **Animation:** Boucle `requestAnimationFrame()` pour animer la scène en continu

**Tâches:**

* **Générer du code HTML:** Créer la structure de la page web avec le canvas pour le rendu Three.js.
* **Générer du code SCSS:** Définir les styles CSS pour la scène et les éléments 3D.
* **Générer du code JS:** Initialiser Three.js, créer la scène, la caméra, le renderer, ajouter des objets 3D et animer la scène.
* **Générer du code JSX:**  Intégrer la scène dans un composant React (optionnel).
* **Générer du code JSON:** Définir les données pour les objets 3D (géométrie, textures).

**Processus:**

1. **Analyse du prompt:** La machine à prompt analyse les informations fournies dans le prompt (Contexte, Dataset, Variables, Paramètres, Fonctions, Boucles).
2. **Sélection des templates:** La machine à prompt sélectionne les templates de code appropriés en fonction des informations analysées.
3. **Remplacement des variables:** Les variables du template sont remplacées par les valeurs spécifiées dans le prompt.
4. **Génération du code:** La machine à prompt assemble le code final en utilisant les templates et les variables remplacées.

**Caractéristiques:**

* **Flexibilité:**  Adaptable à différents types de projets Three.js.
* **Intuitivité:**  Utilise des prompts simples et compréhensibles.
* **Précision:** Génère du code Three.js correct et fonctionnel.
* **Efficacité:**  Réduit le temps de développement en automatisant la génération de code.

**Inférrence recherchées:**

* **Actions Immédiates:**
    * "Ajouter une sphère rouge à la scène"
    * "Définir la couleur de fond de la scène en bleu"
    * "Faire tourner la sphère autour de son axe"
* **Prompt ultime:**

```
Contexte: Création d'une scène 3D avec une sphère rouge qui tourne autour de son axe.

Dataset: HTML, SCSS, JS

Variables:

* Scene: Objet Three.js représentant la scène
* Camera: Objet Three.js représentant la caméra
* Renderer: Objet Three.js responsable du rendu graphique
* Geometry: Objet Three.js représentant la géométrie d'une sphère
* Material: Objet Three.js définissant l'apparence de la sphère (rouge)
* Mesh: Objet Three.js représentant la sphère

Paramètres:

* Taille de la scène: 800x600 pixels
* Angle de vue de la caméra: 45 degrés
* Position de la caméra: (0, 0, 5)
* Couleur de la lumière: RGB(255, 255, 255)

Fonctions:

* initScene(): Initialisation de la scène, de la caméra et du renderer

Boucles:

* Animation: Boucle `requestAnimationFrame()` pour animer la sphère

```

**Code source attendu:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Three.js Scene</title>
  <link rel="stylesheet" href="style.scss">
</head>
<body>
  <canvas id="myCanvas"></canvas>
  <script src="script.js"></script>
</body>
</html>
```

```scss
body {
  margin: 0;
  overflow: hidden;
}

#myCanvas {
  width: 800px;
  height: 600px;
}
```

```javascript
// initScene()
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// ... (ajout de la sphère et animation) ...

function animate() {
  requestAnimationFrame(animate);
  // ... (mise à jour de la sphère) ...
  renderer.render(scene, camera);
}

animate();
```

**Note:** 

Ce code est un exemple simplifié. 

La machine à prompt pourrait générer du code plus complexe en fonction des spécifications du prompt. 



