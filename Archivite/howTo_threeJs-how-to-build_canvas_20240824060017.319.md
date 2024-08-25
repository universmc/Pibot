## Machine à Prompt pour la gestion du code source Three.js

### Contexte

Ce projet vise à créer une machine à prompt capable de générer du code source Three.js à partir de prompts clairs et précis. 

Le but est de faciliter le développement d'applications 3D en automatisant la création de composants et de fonctionnalités courantes.

### Dataset

Le dataset de la machine à prompt comprendra :

* **Exemples de prompts:**

Des prompts variés illustrant différents types de tâches, par exemple:

* "Créer une sphère rouge avec un rayon de 100 pixels."
* "Ajouter un éclairage ambiant à la scène."
* "Faire tourner une cube autour de son axe Y."

* **Code source Three.js correspondant:**

Le code source généré à partir des prompts ci-dessus, ainsi que des exemples de code pour des fonctionnalités plus complexes.

* **Documentation Three.js:**

La documentation officielle Three.js sera utilisée pour alimenter la compréhension des concepts et des API de la librairie.

### Variables, Paramètres et Fonctions

La machine à prompt utilisera les informations suivantes pour générer du code :

* **Variables:**

Nom, type et valeur des variables nécessaires au fonctionnement du code.

* **Paramètres:**

Valeurs numériques ou booléennes qui définissent les propriétés des objets 3D et des éléments de la scène.

* **Fonctions:**

Appels à des fonctions Three.js spécifiques pour créer des objets, les manipuler et les afficher.

* **Boucles:**

Utilisation de boucles `for` ou `while` pour répéter des actions sur plusieurs objets ou éléments.

### Tâches et Processus

La machine à prompt suivra les étapes suivantes :

1. **Analyse du prompt:**

Comprendre les instructions et les éléments clés du prompt.
2. **Extraction des informations:**

Identifier les variables, paramètres, fonctions et boucles nécessaires.
3. **Génération du code:**

Composer le code source Three.js en utilisant les informations extraites et les exemples du dataset.
4. **Validation du code:**

S'assurer que le code généré est valide et fonctionnel.

### Caractéristiques et Inférénces Recherchées

* **Actions Immédiates:**

La machine à prompt doit être capable de générer du code pour des actions spécifiques, comme la création d'un objet 3D, l'ajout d'un matériau ou la modification de la position d'un objet.
* **Prompt Ultime:**

L'objectif est de créer un prompt suffisamment puissant pour générer du code complet et fonctionnel pour des applications 3D simples.
* **Code Source Attendu:**

Le code source généré devra être propre, lisible et conforme aux conventions de codage Three.js.

### Exemple

**Prompt:**

"Créer une scène Three.js avec une lumière ambiante et une sphère bleue avec un rayon de 50 pixels."

**Code Source Attendu:**

```javascript
// Initialiser la scène et le renderer
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Ajouter une lumière ambiante
const ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( ambientLight );

// Créer une sphère bleue
const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// Animation loop
function animate() {
  requestAnimationFrame( animate );

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render( scene, renderer );
}
animate();
```

**Note:** Ce code est un exemple simplifié et peut nécessiter des modifications en fonction des besoins spécifiques du projet.



