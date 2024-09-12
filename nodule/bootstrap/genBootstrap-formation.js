const fs = require("fs");
const Groq = require('groq-sdk');
const axios = require('axios');
const emoji = require('node-emoji');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const Composants = [
   "navBar",
   "Hero Section",
//  "About Section",
   "Service Cards",
//  "Testimonials",
//  "Blog Posts",
//  "Newsletter Signup",
//  "Contact Form",
//  "Sidebar",
//  "Product List",
//  "Shopping Cart",
//  "Pagination",
//  "Search Bar",
//  "User Profile",
//  "Gallery",
//  "Map",
//  "Login/Signup Forms",
//  "Loading Spinner",
//  "Error Message"
];

// Générateur de Composants React (JavaScript avec JSX)
async function generateComponentHTML(composant) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `Vous êtes un assistant spécialisé dans la génération de ${composant} Bootsrap https://cdnjs.com/. Votre tâche est de produire du code HTML uniquement, sans explications, et formaté comme un composant Bootstrap valide.` },
        { role: "user", content: `Génère uniquement le code source html pour le ${composant} Bootsrap https://cdnjs.com/ fonctionnel nommé "${composant}". Assurez-vous d'inclure l'import du CDN, d'utiliser les conventions du web sementique W3C` }
      ],
      model: "gemma2-9b-it",
      temperature: 0.3,
      max_tokens: 4096,
    });

    const htmlContent = completion.choices[0]?.message?.content.trim(); // Utiliser .trim() pour supprimer les espaces inutiles
    const outputFilePath = `build/${composant}_component_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log(`Le composant ${composant} a été généré au format JSX dans ${outputFilePath}`);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la génération du composant :", error);
  }
}
// Générateur de Composants React (JavaScript avec JSX)
async function generateComponentSCSS(composant) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `Vous êtes un assistant spécialisé dans la génération de ${composant}  Bootsrap https://cdnjs.com/. Votre tâche est de produire du code SCSS uniquement, sans explications, et formaté comme un composant Bootstrap valide.` },
        { role: "user", content: `Génère uniquement le code source SCSS pour un composant Bootsrap https://cdnjs.com/ fonctionnel nommé "${composant}". Assurez-vous d'inclure l'import du CDN, d'utiliser les conventions du web sementique W3C` }
      ],
      model: "gemma2-9b-it",
      temperature: 0.3,
      max_tokens: 4096,
    });

    const scssContent = completion.choices[0]?.message?.content.trim(); // Utiliser .trim() pour supprimer les espaces inutiles
    const outputFilePath = `build/${composant}_component_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".scss";
    fs.writeFileSync(outputFilePath, scssContent);
    console.log(`Le composant ${composant} a été généré au format JSX dans ${outputFilePath}`);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la génération du composant :", error);
  }
}

async function generateComponentJS(composant) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `Vous êtes un assistant spécialisé dans la génération de ${composant}  Bootsrap https://cdnjs.com/. Votre tâche est de produire du code Javascript uniquement, sans explications, et formaté comme un composant Bootstrap valide.` },
        { role: "user", content: `Génère uniquement le code source Javascript pour un composant Bootsrap https://cdnjs.com/ fonctionnel nommé "${composant}". Assurez-vous d'inclure l'import du CDN, d'utiliser les conventions du web sementique W3C` }
      ],
      model: "gemma2-9b-it",
      temperature: 0.3,
      max_tokens: 4096,
    });

    const jsContent = completion.choices[0]?.message?.content.trim(); // Utiliser .trim() pour supprimer les espaces inutiles
    const outputFilePath = `build/${composant}_component_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".js";
    fs.writeFileSync(outputFilePath, jsContent);
    console.log(`Le composant ${composant} a été généré au format JSX dans ${outputFilePath}`);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la génération du composant :", error);
  }
}

// Générateur de Documentation
async function generateDocumentation(composant) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Vous êtes un assistant chargé de générer la documentation pour des composants Bootrap." },
        { role: "user", content: `Génère la documentation, présentation détaillé pour le composant Bootstrap nommé "${composant}".` },
        { role: "assistant", content: `
### Présentation du Composant ${composant}:

- **Nom du Composant**: ${composant}
- **Description**: [Insère ici la description spécifique pour ce composant]
- **Props**: [Liste des props avec leurs noms, types, valeurs par défaut et descriptions]
- **State**: [Liste des états avec leurs noms, types, valeurs initiales et descriptions]
- **Functions**: [Liste des fonctions internes avec leurs noms, descriptions, paramètres, types de retour et logique]
- **EventHandlers**: [Liste des gestionnaires d'événements avec leurs noms, types d'événements, descriptions, fonctions liées et logiques]
- **ConditionalRendering**: [Logique de rendu conditionnel, conditions et sorties associées]
- **Loops**: [Boucles utilisées pour le rendu des listes ou autres éléments, avec le type de boucle, la description, la variable d'itération, la logique et la sortie]
- **Exemple d'Intégration**: Comment intégrer ce composant dans d'autres parties de l'application.
        `},
      ],
      model: "gemma2-9b-it",
      temperature: 0.6,
      max_tokens: 4096,
    });

    const mdContent = completion.choices[0]?.message?.content;
    const outputFilePath = `build/${composant}_documentation_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(`La documentation pour le composant ${composant} a été générée dans ${outputFilePath}`);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la génération de la documentation :", error);
  }
}

async function main() {
  for (const composant of Composants) {
    await generateComponentHTML(composant); // Générer le composant au format JSX
    await generateComponentSCSS(composant); // Générer le composant au format JSX
    await generateComponentJS(composant); // Générer le composant au format JSX
    await generateDocumentation(composant); // Générer la documentation du composant
  }
}

main();
