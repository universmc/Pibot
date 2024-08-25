## Machine à Prompt pour Three.js

**Contexte:**

La machine à prompt a pour objectif d'aider les développeurs à générer du code source Three.js de manière efficace et intuitive. Elle prend en entrée des prompts naturels et les transforme en code fonctionnel pour le projet " ./three.js ".

**Dataset:**

La machine à prompt sera entraînée sur un dataset riche et diversifié comprenant:

* **Documentation Three.js:**  Tous les documents officiels, tutoriels et exemples de code.
* **Exemples de projets Three.js:**  Répertoires de projets open-source utilisant Three.js pour des applications variées (jeux, animations, visualisations).
* **Forums et Stack Overflow:**  Discussions et solutions à des problèmes rencontrés lors du développement avec Three.js.
* **Code source de bibliothèques Three.js:**  Comprendre l'architecture interne et les patterns de code utilisés.

**Informations à fournir dans le prompt:**

* **HTML, SCSS, JS, JSX, JSON:**  Si nécessaire, fournir des fragments de code existants pour contextualiser la demande.
* **Variables:**  Définir les variables nécessaires au fonctionnement du code (position, taille, couleur, etc.).
* **Paramètres:**  Spécifier les paramètres de l'objet Three.js (type, matériau, etc.).
* **Fonctions:**  Indiquer les fonctions à utiliser ou à créer (ajouter un objet, déplacer un objet, etc.).
* **Boucles:**  Décrire les boucles à implémenter (itérer sur des objets, animer un mouvement, etc.).
* **Tâches:**  Expliquer clairement la tâche à réaliser avec le code Three.js.
* **Actions Immédiates:**  Décrire les actions souhaitées dès le lancement du code (afficher un objet, jouer une animation, etc.).

**Exemple de prompt:**

"Générer le code Three.js pour un cube rouge animé qui tourne autour d'un axe vertical. La taille du cube est de 1 unité, et il tourne à une vitesse de 0.1 radians par seconde. Le cube doit être placé à la position (0, 0, 0)."

**Caractéristiques et inférence recherchées:**

* **Génération de code fonctionnel:** La machine à prompt doit produire du code Three.js valide et exécutable.
* **Compréhension du contexte:**  Elle doit être capable de comprendre les informations fournies dans le prompt et de générer du code adapté.
* **Précision:**  Le code généré doit répondre précisément aux spécifications du prompt.
* **Flexibilité:**  La machine à prompt doit être capable de gérer des prompts complexes et variés.
* **Documentation:**  Générer des commentaires clairs et concis pour expliquer le fonctionnement du code.

**Prompt ultime pour générer le code source:**

```
// Informations contextuelles:
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Variables:
const cubeSize = 1;
const rotationSpeed = 0.1;

// Paramètres:
const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Fonctions:
function createCube() {
  // Générer le cube
}

// Boucles:
function animate() {
  // Animation du cube
}

// Actions immédiates:
createCube();
animate();
```

**Code source attendu:**

```javascript
// Informations contextuelles:
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Variables:
const cubeSize = 1;
const rotationSpeed = 0.1;

// Paramètres:
const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Fonctions:
function createCube() {
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  scene.add(cube);
}

// Boucles:
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += rotationSpeed;
}

// Actions immédiates:
createCube();
animate();
```



