## Machine à Prompt pour Three.js

**Contexte:**

La machine à prompt vise à faciliter la création de code Three.js en transformant des prompts en code fonctionnel. Le projet cible est un rendu 3D interactif basé sur Three.js avec des éléments visuels, des animations et des interactions utilisateur.

**Dataset:**

Le dataset comprendra :

* **Exemples de code Three.js:**  Bibliothèque de code fonctionnel couvrant des concepts clés de Three.js (géométrie, lumières, matériaux, caméras, animations, etc.).
* **Documentation Three.js:**  Accès à la documentation officielle de Three.js pour référence et compréhension des API.
* **HTML, SCSS, JS, JSX, JSON:**  Exemples de fichiers liés à la structure et au fonctionnement d'un projet Three.js.

**Variables, Paramètres, Fonctions, Boucles:**

La machine à prompt analysera les prompts pour identifier :

* **Variables:**  Noms et types de données utilisés dans le code.
* **Paramètres:**  Valeurs d'entrée pour les fonctions ou les objets.
* **Fonctions:**  Opérations spécifiques à réaliser (ex: créer un objet 3D, animer une scène, etc.).
* **Boucles:**  Structures répétitives pour gérer des tâches multiples (ex: créer plusieurs objets, appliquer des animations).

**Tâches:**

* **Générer du code Three.js:**  Transformer des prompts en code fonctionnel répondant aux besoins spécifiés.
* **Compléter du code Three.js:**  Fournir des suggestions de code pour compléter des fragments existants.
* **Déboguer du code Three.js:**  Identifier et suggérer des solutions à des erreurs dans le code Three.js.
* **Traduire des concepts en code Three.js:**  Transformer des descriptions textuelles de concepts 3D en code Three.js correspondant.

**Processus:**

1. **Analyse du Prompt:** La machine à prompt analysera le prompt pour comprendre les besoins du développeur.
2. **Recherche dans le Dataset:**  Elle recherchera des exemples de code et des informations pertinentes dans le dataset pour répondre au prompt.
3. **Génération du Code:**  Elle générera du code Three.js en utilisant les informations trouvées dans le dataset et en adaptant le code aux spécifications du prompt.
4. **Optimisation et Validation:**  Le code généré sera optimisé pour la clarté, la performance et la conformité aux meilleures pratiques de Three.js. La machine à prompt pourra également proposer des tests pour valider le fonctionnement du code.

**Caractéristiques et Inférences Recherchées:**

* **Compréhension du Contexte:**  La machine à prompt devra comprendre le contexte du projet et les objectifs du développeur.
* **Génération de Code Précis:**  Le code généré devra être précis, fonctionnel et répondre directement aux besoins du prompt.
* **Adaptation et Flexibilité:**  La machine à prompt devra être capable d'adapter le code à différents types de prompts et de projets.
* **Suggestion et Complétion:**  La machine à prompt devra proposer des suggestions de code et compléter des fragments existants pour faciliter le développement.
* **Débogage et Assistance:**  La machine à prompt devra être capable d'identifier des erreurs dans le code et de proposer des solutions.

**Prompt Ultime:**

"Créez un cube rouge animé qui tourne autour de son axe dans la scène Three.js. Le cube doit être de taille 1 unité et sa rotation doit être de 360 degrés en 5 secondes."

**Code Source Attendue:**

```javascript
// Créer un cube rouge
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const cube = new THREE.Mesh( geometry, material );

// Ajouter le cube à la scène
scene.add( cube );

// Animation de rotation
const rotationSpeed = Math.PI * 2 / 5; // 360 degrés en 5 secondes

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += rotationSpeed;
  cube.rotation.y += rotationSpeed;

  renderer.render( scene, camera );
}

animate();
```



