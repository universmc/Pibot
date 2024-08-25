## Machine à Prompt pour Three.js : Build Camera

### Contexte

Cette machine à prompt est conçue pour faciliter la génération de code Three.js pour la création de caméras 3D. Elle utilise un prompt textuel pour comprendre les besoins spécifiques de l'utilisateur et générer du code adapté.

### Dataset

La machine à prompt est entraînée sur un large dataset comprenant :

* **Code Three.js source:**  Exemples de caméras 3D avec différentes configurations (position, rotation, FOV, etc.).
* **Documentation Three.js:**  Définitions des classes et méthodes liées aux caméras.
* **Exemples d'utilisation:**  Code illustrant l'utilisation de caméras dans des projets Three.js concrets.
* **HTML, SCSS, JS, JSX, JSON:**  Exemples de fichiers associés aux projets Three.js, pour comprendre le contexte global.

### Variables, Paramètres et Fonctions

La machine à prompt utilise les informations suivantes pour générer le code :

* **Variables:** 
    * `position`: Vecteur 3D définissant la position de la caméra.
    * `target`: Vecteur 3D définissant le point vers lequel la caméra pointe.
    * `fov`: Angle de champ de vision de la caméra.
    * `near`: Distance minimale à laquelle les objets sont rendus.
    * `far`: Distance maximale à laquelle les objets sont rendus.
* **Paramètres:**
    * `type`: Type de caméra (PerspectiveCamera, OrthographicCamera).
* **Fonctions:**
    * `lookAt()`:  Permet de définir le point vers lequel la caméra pointe.
    * `updateProjectionMatrix()`: Met à jour la matrice de projection de la caméra.

### Boucles

La machine à prompt peut prendre en compte des boucles si l'utilisateur souhaite animer la caméra ou modifier ses paramètres au fil du temps.

### Tâches

La machine à prompt peut réaliser les tâches suivantes :

* **Créer une caméra Three.js:** Générer le code pour une caméra avec les paramètres spécifiés par l'utilisateur.
* **Modifier les paramètres d'une caméra existante:** Changer la position, la rotation, le FOV, etc. d'une caméra Three.js existante.
* **Animer une caméra:** Générer du code pour faire bouger la caméra dans l'espace.

### Processus

1. **Analyse du prompt:** La machine à prompt analyse le texte du prompt pour identifier les informations clés (type de caméra, position, paramètres, etc.).
2. **Recherche dans le dataset:** Elle recherche dans son dataset des exemples de code pertinents pour la tâche demandée.
3. **Génération du code:** La machine à prompt assemble le code à partir des exemples trouvés dans le dataset, en utilisant les informations du prompt pour personnaliser le code généré.

### Caractéristiques et Inférence Recherchées

* **Actions Immédiates:** La machine à prompt peut générer du code fonctionnel immédiatement après avoir reçu le prompt.
* **Prompt Ultime:**  

```
Créer une caméra PerspectiveCamera avec les paramètres suivants:
* Position: [0, 5, 10]
* Target: [0, 0, 0]
* FOV: 75
* Near: 0.1
* Far: 1000
```

* **Code Source Attendue:**

```javascript
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);
```

### Limitations

* La machine à prompt peut ne pas comprendre des prompts très complexes ou spécifiques.
* Le code généré peut nécessiter des modifications mineures pour s'intégrer parfaitement à un projet existant.
* La machine à prompt ne peut pas générer de code pour des fonctionnalités Three.js qui ne sont pas présentes dans son dataset.



