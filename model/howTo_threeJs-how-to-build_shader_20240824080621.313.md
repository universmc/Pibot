## Machine à Prompt pour Three.js

**Objectif:** Générer du code source Three.js à partir de prompts descriptifs.

**Contexte:** 

Ce projet vise à créer une machine à prompt capable de comprendre des descriptions textuelles de scènes, d'objets et d'effets 3D et de les traduire en code Three.js fonctionnel. 

**Dataset:**

Le dataset utilisé pour entraîner la machine à prompt comprendra:

* **Exemples de code Three.js:** Un large éventail de code source Three.js couvrant différents types d'objets, de matériaux, d'animations et d'effets.
* **Descriptions textuelles de scènes:** Des descriptions détaillées de scènes 3D, incluant les objets présents, leurs propriétés (couleur, taille, position), les interactions possibles et les effets visuels souhaités.
* **Exemples de prompts:** Des prompts textuels variés, allant de simples descriptions à des instructions plus complexes, pour entraîner la machine à comprendre différents niveaux de granularité.

**Format des Données:**

* Le dataset sera organisé en paires "prompt - code source".
* Les prompts seront rédigés de manière claire et concise, en utilisant un langage naturel.
* Le code source sera bien formaté et commenté.

**Variables, Paramètres, Fonctions et Boucles:**

La machine à prompt devra être capable de comprendre et d'utiliser les variables, paramètres, fonctions et boucles dans le code Three.js généré.

**Tâches:**

* **Analyser le prompt:**  Identifier les éléments clés de la description, tels que les objets, les matériaux, les positions, les mouvements et les effets.
* **Structurer le code:** Générer une structure de code Three.js logique et cohérente en utilisant les éléments clés du prompt.
* **Généré le code:**  Traduire les descriptions textuelles en code source Three.js fonctionnel.

**Processus:**

1. **Ingestion du dataset:** La machine à prompt sera entraînée sur le dataset de prompts et de code source.
2. **Modélisation:** Un modèle de langage sera utilisé pour apprendre les relations entre les descriptions textuelles et le code Three.js.
3. **Générations de code:** En recevant un nouveau prompt, la machine à prompt utilisera le modèle entraîné pour générer du code source Three.js correspondant.

**Caractéristiques et Inférence Recherchées:**

* **Précision:** Le code généré doit être fonctionnel et produire les résultats attendus.
* **Flexibilité:** La machine à prompt doit être capable de gérer des prompts de différentes granularités et de complexité.
* **Créativité:** La machine à prompt devrait être capable de générer des solutions innovantes et originales.
* **Actions Immédiates:** La machine à prompt devra être capable de générer du code source pour des actions spécifiques, comme ajouter un objet à la scène, modifier sa couleur ou appliquer une animation.
* **Prompt Ultime:**

**"Crée une sphère rouge en rotation dans un cube noir, avec une lumière blanche au centre. La sphère doit avoir un rayon de 0.5 et tourner autour de son axe vertical à une vitesse de 0.1 radians par seconde. La lumière doit être positionnée à 2 unités de distance du centre du cube."**

**Code Source Attendu:**

```javascript
// Initialisation de la scène, de la caméra et du renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Création du cube noir
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Création de la sphère rouge
const sphereGeometry = new THREE.SphereGeometry( 0.5, 32, 32 );
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

// Création de la lumière blanche
const light = new THREE.PointLight( 0xffffff, 1, 10 );
light.position.set( 0, 0, 2 );
scene.add( light );

// Animation de la sphère
function animate() {
  requestAnimationFrame( animate );

  sphere.rotation.y += 0.1;

  renderer.render( scene, camera );
}
animate();
```



**Remarques:**

* Ce code est un exemple simple et peut être étendu pour inclure des fonctionnalités plus complexes.
* La machine à prompt devra être capable de gérer les différents types de données (HTML, SCSS, JS, JSX, JSON) et de les intégrer au code Three.js généré.
* L'entraînement et l'évaluation de la machine à prompt nécessiteront une grande quantité de données et de ressources informatiques.



