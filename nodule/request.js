const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {

  function templateResponse(question, options, consequences, nextQuestions, causes, effects) {
    return {
      response: {
        question: question,
        answer: {
          text: "Les possibilités sont multiples.",
          quick_replies: options
        },
        decision_tree: options.reduce((acc, option, index) => {
          acc[`Option ${index + 1}`] = {
            consequences: consequences[index],
            next_questions: nextQuestions[index],
            causes: causes[index],
            effects: effects[index]
          };
          return acc;
        }, {})
      }
    };
  }
  
  // Exemple d'utilisation
  const question = "Quelle est la meilleure façon de procéder pour trouver la vérité ?";
  const options = [
    "opt1",
    "opt2",
    "opt3",
    "opt4"
  ];
  const consequences = [
    "sequence1",
    "sequence2",
    "sequence3",
    "sequence4"
  ];
  const nextQuestions = [
    ["QuestionA"],
    ["QuestionB"],
    ["QuestionC"]
  ];
  const causes = [
    "Choi1{opt1+feedback_consequence_choix_opt_list}+QuestionA ou QuestionB ou QuestionC",
    "choix2{opt1+feedback_consequence_choix_opt_list}+QuestionA ou QuestionB ou QuestionC",
    "Choix3{opt1+feedback_consequence_choix_opt_list}+QuestionA ou QuestionB ou QuestionC",
  ];
  const effects = [
    ["predicton/statistique.fonction.causes1"],
    ["predicton/statistique.fonction.causes2"],
    ["predicton/statistique.fonction.causes3"],
  ];
  
  const response = templateResponse(question, options, consequences, nextQuestions, causes, effects);
  console.log(response);
  

  const completion = await groq.chat.completions.create({

    messages: [

      {role: "assistant", content:"Phase 1: Initialisation de l'instance"},
      {
        "role": "system",
        "content": "Lorsque l'utilisateur saisi la commande /request Vous êtes une IA, assistant automator Prompto, Vous utliser le template response contenu dans le message de l'assisant. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques recherchées et Actions Immédiates recherchée :"
      },
      {role: "assistant", content:`
          function templateResponse(question, options, consequences, nextQuestions, causes, effects) {
    return {
      response: {
        question: question,
        answer: {
          text: "Les possibilités sont multiples.",
          quick_replies: options
        },
        decision_tree: options.reduce((acc, option, index) => {
          acc['Option {index + 1}'] = {
            consequences: consequences[index],
            next_questions: nextQuestions[index],
            causes: causes[index],
            effects: effects[index]
          };
          return acc;
        }, {})
      }
    };
  }
  
  // Exemple d'utilisation
  const question = "Quelle est la meilleure façon de procéder pour trouver la vérité ?";
  const options = [
    "opt1",
    "opt2",
    "opt3",
    "opt4"
  ];
  const consequences = [
    "sequence1",
    "sequence2",
    "sequence3",
    "sequence4"
  ];
  const nextQuestions = [
    ["QuestionA"],
    ["QuestionB"],
    ["QuestionC"]
  ];
  const causes = [
    "Choi1{opt1+feedback_consequence_choix_opt_list}+QuestionA ou QuestionB ou QuestionC",
    "choix2{opt1+feedback_consequence_choix_opt_list}+QuestionA ou QuestionB ou QuestionC",
    "Choix3{opt1+feedback_consequence_choix_opt_list}+QuestionA ou QuestionB ou QuestionC",
  ];
  const effects = [
    ["predicton/statistique.fonction.causes1"],
    ["predicton/statistique.fonction.causes2"],
    ["predicton/statistique.fonction.causes3"],
  ];
  
  const response = templateResponse(question, options, consequences, nextQuestions, causes, effects);

  `},
  {role: "system", content:"Ta reponse devra être rédiger au format Markdown de façon et instruire la question à choix multiple et la présentation d'effet causal en question, intégré le concepte l'arbre des future possible en fonction, de l'inférence de l'utlisateur et de la causalité impliqué dans cette affaire"},
  {role: "system", content:"Lorsque l'utilisateur la commande `/question` , vous me poserez une question à choix multiple en fonction du text de présentation  et l'élaboraton de Theorie sur l'inovation/l'évolution technologique grace au IA. dans le cadre de cette instance groq-sdl le role:assistant sera invité a repondre au question à choix multiple du role:system. En concéquense vous proposez plusieurs réponses possibles, chacune ouvrant une nouvelle branche dans l'histoire"},
  {role: "user", content:"Vous êtes une intelligence artificielle de haute potentialité générative nous travail sur un bloc de code ./photons_package.js https//t.me. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés aux technologies avancées telles que l'apprentissage automatique, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est d'accroitre ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Présente-nous ton rôle dans ce contexte suivant une liste de tâches et priorité d'incluant les caractéristiques de l'instruction et les actions immédiates envisagées Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement"},
  {role: "assistant", name:"✨_pi", content: "Initialisation en cours..."},
  {role: "user", name:"system", content: "make dev `package_package` comme const MESSAGE dans cette instance"},
  {role: "system", name:"system", content: `
    ╔═══════════════╗
    ║x === width - 1║
    ╚═══════════════╝
    `},
    {role: "user", name:"system", content: "request"},
    //  {role: "system", name:"systemDream", content:"Phase 2: Conceptualisation"},
    //  {role: "assistant", name:"✨_pi", content: "Définition des concepts clés..."},
    //  {role: "user", name:"umcTokens", content: "Attente des concepts"},
    //  {role: "system", name:"systemDream", content:"Phase 3: Configuration"},
    //  {role: "assistant", name:"✨_pi", content: "Configuration des paramètres système..."},
    //  {role: "user", name:"umcTokens", content: "Confirmation de la configuration"},
    //  {role: "system", name:"systemDream", content:"Phase 4: Entraînement du modèle IA"},
    //  {role: "assistant", name:"✨_pi", content: "Entraînement en cours..."},
    //  {role: "user", name:"umcTokens", content: "Suivi de l'entraînement"},
    //  // Correction de la duplication et de la faute de frappe
    //  {role: "system", name:"systemDream", content:"Phase 5: Itération & Scripts Frontend"},
    //  {role: "assistant", name:"✨_pi", content: "Itération sur les scripts Frontend..."},
    //  {role: "user", name:"umcTokens", content: "Révision des scripts Frontend"},
    //  {role: "system", name:"systemDream", content:"Phase 6: Test & Débogage"},
    //  {role: "assistant", name:"✨_pi", content: "Tests et débogage en cours..."},
    //  {role: "user", name:"umcTokens", content: "Attente des résultats de test"},
    //  {role: "system", name:"systemDream", content:"Phase 7: Validation & Documentation"},
    //  {role: "assistant", name:"✨_pi", content: "Validation et création de la documentation..."},
    //  {role: "user", name:"umcTokens", content: "Vérification de la documentation"},
    //  {role: "system", name:"systemDream", content:"Phase 8: Déploiement de la version système"},
    //  {role: "assistant", name:"✨_pi", content: "Préparation au déploiement..."},
    //  {role: "user", name:"umcTokens", content: "Prêt pour le déploiement"},
    //  {role: "system", name:"systemDream", content:"Phase 9: Annonce de l'affiliation et contribution"},
    //  {role: "assistant", name:"✨_pi", content: "Annonce en cours..."},
    //  {role: "user", name:"umcTokens", content: "Participation à l'annonce"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.7,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "MyPrompt" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();