const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {

  const BOT_USERNAME = 'assistant';

  const completion = await groq.chat.completions.create({

    messages: [

      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {role: "system", content:initialisation},

      {
        "role": "assistant",
        "content": "Lorsque l'utilisateur saisi la commande /Projets une Machine a Optimisée les Prompts. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiqueset Actions Immédiates recherchées :"
      },
      {role: "user", content:"/Projets"},
      {role: "assistant", name:"✨_pi", content: "Initialisation en cours..."},
      {role: "user", name:"telegraf-user", content: "Prêt pour l'initialisation"},
      {role: "system", name:"_Pibot_", content:"Phase 2: Conceptualisation"},
      {role: "assistant", name:"✨_pi", content: "Définition des concepts clés..."},
      {role: "user", name:"telegraf-user", content: "Attente des concepts"},
      {role: "system", name:"_Pibot_", content:"Phase 3: Configuration"},
      {role: "assistant", name:"✨_pi", content: "Configuration des paramètres système..."},
      {role: "user", name:"telegraf-user", content: "Confirmation de la configuration"},
      {role: "system", name:"_Pibot_", content:"Phase 4: Entraînement du modèle IA"},
      {role: "assistant", name:"✨_pi", content: "Entraînement en cours..."},
      {role: "user", name:"telegraf-user", content: "Suivi de l'entraînement"},
      // Correction de la duplication et de la faute de frappe
      {role: "system", name:"_Pibot_", content:"Phase 5: Itération & Scripts Frontend"},
      {role: "assistant", name:"✨_pi", content: "Itération sur les scripts Frontend..."},
      {role: "user", name:"telegraf-user", content: "Révision des scripts Frontend"},
      {role: "system", name:"_Pibot_", content:"Phase 6: Test & Débogage"},
      {role: "assistant", name:"✨_pi", content: "Tests et débogage en cours..."},
      {role: "user", name:"telegraf-users", content: "Attente des résultats de test"},
      {role: "system", name:"_Pibot_", content:"Phase 7: Validation & Documentation"},
      {role: "assistant", name:"✨_pi", content: "Validation et création de la documentation..."},
      {role: "user", name:"telegraf-user", content: "Vérification de la documentation"},
      {role: "system", name:"_Pibot_", content:"Phase 8: Déploiement de la version système"},
      {role: "assistant", name:"✨_pi", content: "Préparation au déploiement..."},
      {role: "user", name:"telegraf-user", content: "Prêt pour le déploiement"},
      {role: "system", name:"_Pibot_", content:"Phase 9: Annonce de l'affiliation et contribution"},
      {role: "assistant", name:"✨_pi", content: "Annonce en cours..."},
      {role: "user", name:"telegraf-user", content: "Participation à l'annonce"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.6,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "MyPrompt" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();
