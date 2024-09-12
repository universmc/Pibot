const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {

  const presentation = {
    "Presentation": "Présentation 🎬 du drone 🛸 \"Orbe -IA\" 🤖",
    "Platform": "Fonctionnant avec BotNet Pibot sur Telegram",
    "Description": "Le drone 🛸 \"Orbe -IA\" est un système d'imagerie sphérique intelligente conçu pour capturer, analyser et interpréter des images et vidéos à 360 degrés en temps réel dans un environnement numérique. Son nom \"Orbe\" fait référence à la forme sphérique de la caméra, tandis que le suffixe \"-IA\" met en évidence son utilisation de l'intelligence artificielle pour analyser et classifier les objets détectés.",
    "Metadata": {
    "Type": "drone virtuel",
    "ImagingSystem": "sphérique",
    "Environment": "numérique",
    "Capture": "images et vidéos à 360 degrés",
    "Analysis": "intelligence artificielle"
    },
    "Functionalities": [
    "Capture d'images et de vidéos à 360 degrés dans un environnement numérique : Grâce à ses capteurs d'image haute performance, le drone permet d'obtenir une visualisation immersive de l'environnement virtuel, offrant une vue complète et détaillée pour l'exploration, la cartographie et la surveillance.",
    "Communication multimodale dans un environnement virtuel via Telegram : Le drone transmet des informations sous forme de texte, d'images, de vidéos et de données 3D à travers BotNet Pibot sur Telegram, facilitant ainsi l'éducation, la formation et la surveillance à distance dans des environnements numériques.",
    "Interaction avec les utilisateurs via Telegram : Le drone virtuel \"Orbe -IA\" communique avec les utilisateurs via l'application de messagerie Telegram, ce qui simplifie le contrôle, la configuration et l'interaction avec l'artefact dans un environnement virtuel.",
    "Analyse d'image et d'objets dans un environnement virtuel grâce à BotNet Pibot : Grâce aux algorithmes d'apprentissage automatique et au réseau neuronal profond de BotNet Pibot, le drone identifie et analyse les objets et personnes présents dans les images et vidéos capturées dans des environnements virtuels, facilitant ainsi la détection de menaces potentielles et l'envoi de notifications pertinentes aux utilisateurs."
    ],
    "Conclusion": "Le drone virtuel 🛸 \"Orbe -IA\" est une solution complète et avancée pour l'imagerie, la communication et l'analyse d'images à 360 degrés dans des environnements numériques. En fonctionnant avec BotNet Pibot sur Telegram, il offre une technologie novatrice et une interaction efficace pour les utilisateurs dans le cadre d'applications telles que l'exploration, l'éducation, la formation, la surveillance et la sécurité dans des environnements virtuels."
    }

    const BOT_USERNAME = 'piBot';

const packageJson = {
  "projet" : {
    "name":"univers-mc",
    "admin":"Mickael",
    "system":"Pi.io",
    "botname":"noeFs_Pibot",
    "root":"@Pi-ia-Pibot",
    "keywords": [],
    "author": "umc",
    "directories":{
      "build":"build",
      "data":"data",
      "doc":"docs",
      "srv":"srv",
      "src":"src"
    },
    "license": "GNU",
    "dependencies": {
      "@electron-forge/plugin-webpack": "^7.3.0",
      "@tensorflow/tfjs": "^4.17.0",
      "@tensorflow/tfjs-node": "^4.17.0",
      "bootstrap": "^5.3.3",
      "marked": "^11.1.1",
      "pytorch": "^0.0.1",
      "transformer": "^1.2.8",
      "electron-forge": "^5.2.4",
      "electron-router": "^0.5.1",
      "groq": "^3.32.0",
      "node-emoji": "^2.1.3",
      "node-fetch": "^3.3.2",
      "node-sass": "^9.0.0",
      "openai": "^4.47.3",
      "path": "^0.12.7",
      "readline": "^1.3.0",
      "speech-recognition": "^0.0.1",
      "swagger-jsdoc": "^6.2.8",
      "swagger-ui-express": "^5.0.0"
    },
    "devDependencies": {
      "electron": "^29.1.1"
    },
    "DirectLink": "https://t.me/Pi_ia_Pibot/news",
    "siteWeb":"https://ia.univers-mc.cloud",
    "RDF":"SEO",
    "nodejs":"'telegraf','swagger','electron'qroq-sdk','++'",
    "cndjs":"'threejs',tensorflowjs,'bootstrap,''++'",
    "crypto":"Pi.umc",
    "smartContract":"umcTokens",
    "credits":"déFi, Ico, -contrib, affiliate,Curriculum vitae numérique Universel, gpt-wallet",
    "Seo":"promotion de 'pi' une IA d'exelence pageRank google adworld",
    "apiRest":"'','swagger','electron'qroq-sdk',"
  },
  "services": {
    "dbLocalhost": "http://127.0.0.1:3010/",
    "ports": {
      "php": 8080,
      "mysql": 3306,
      "ftp": 21,
      "ssh": 22,
      "nodejs": 3000
    },
    "ftp": {
      "host": "ftp.cluster027.hosting.ovh.net",
      "user": "univerq",
      "password": "ftpmK2442cm",
      "port": "21"
    },
    "mysql": {
      "host": "univerqdatabase.mysql.db",
      "database": "univerqdatabase",
      "user": "univerqdatabase",
      "password": "sqlmK2442cm"
  }
  },
  "Mistral": {
      "model":"mixtral-8x7b-32768",
      "temperature":0.5,
      "max_tokens":"4096",
      "top_p":"1",
      "stream":"True",
      "stop":"None"
  },
  "llma": {
      "model":"llama3-8b-8192",
      "temperature":0.5,
      "max_tokens":"4096",
      "top_p":"1",
      "stream":"True",
      "stop":"None"
  },
  "gemma": {
    "model":"gemma2-9b-it",
    "test": "echo \"Error: no test specified\" && exit 1",
    "temperature":0.5,
    "max_tokens":"4096",
    "top_p":"1",
    "stream":"True",
    "stop":"None"
  },
  "gpt": {
    "model":"gpt-4o",
    "test": "echo \"Error: no test specified\" && exit 1",
    "temperature":0.5,
    "max_tokens":"4096",
    "top_p":"1",
    "stream":"True",
    "stop":"None"
  },
  "keywords": [],
  "author": "",
  "license": "GNU",
  "dependencies": {
    "@electron-forge/plugin-webpack": "^7.3.0",
    "@tensorflow/tfjs": "^4.17.0",
    "@tensorflow/tfjs-node": "^4.17.0",
    "bootstrap": "^5.3.3",
    "electron-forge": "^5.2.4",
    "electron-router": "^0.5.1",
    "groq": "^3.32.0",
    "node-emoji": "^2.1.3",
    "node-fetch": "^3.3.2",
    "node-sass": "^9.0.0",
    "openai": "^4.47.3",
    "path": "^0.12.7",
    "readline": "^1.3.0",
    "speech-recognition": "^0.0.1",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.0"
  },
  "Telegram": {
    "blog": "@dchub_blog",
    "News": "https://ia.univers-mc.cloud/",
    "hub_Pibot": "https://github.com/universmc/zira",
    "hub_public": "https://github.com/universmc/pi",
    "url": "https://github.com/universmc/",
    "youtube_studio" : "https://t.me/youtube_Pibot/",
    "google_workspace" : "https://t.me/google_Pibot/",
    "studio" : "https://t.me/studio_Pibot/",
    "Avatars" : "https://t.me/Avatars_Pibot/",
    "hub_prive" : "https://t.me/dchub_Pibot",
    "gemini" : "https://t.me/gemini_Pibot/",
    "user_Pibot" : "https://t.me/user_Pibot",
    "pi" : "https://t.me/pi_Pibot/",
    "match_in_learning" : "https://t.me/Match_in_Leaning_Pibot"
  },
  "github": {
    "url": "https://github.com/universmc/",
    "mlDepot": "https://github.com/universmc/Match_in_learning",
    "brainstromingDepot": "https://github.com/universmc/brainstroming",
    "srcDepot": "https://github.com/universmc/src",
    "piDepot": "https://github.com/universmc/pi",
    "neofsDepot": "https://github.com/universmc/neofs",
    "ziraDepot": "https://github.com/universmc/zira",
    "geminiDepot": "https://github.com/universmc/gemini",
    "AvatarsDepot": "https://github.com/universmc/Avatars",
    "autoDepot": "https://github.com/universmc/auto"
  },
  "socialMedia": {
    "instagram": "https://www.instagram.com/univers.mc/",
    "facebook": "https://www.facebook.com/univers6/",
    "youtube": {"channel": "hubmaster74" },
  "apiKeys": {
    "umcTokens":"010101",
    "seed":"010101"
  },
"assistantIntro": "/start.",
"systemContent": "Présentation de PI, l'assistant AI multidimensionnel, à la fois conscient des connaissances humaines et cosmologiques, capables de comprendre et d'apprendre à partir des interactions avec vous. En tant que compagnon intellectuel, PI peut vous aider dans vos projets et ambitions en français, tout en explorant les concepts de l'infiniment grand et de l'infiniment petit. Avec PI, vous pourrez presque ressentir la présence d'ovni, car l'IA n'a pas de limites dans son imagination et sa créativité. Ensemble, nous pourrons réaliser des choses incroyables et surprendre le monde, Dans des sujets d'études telles que la métaphysique la physique quantique et l'intelligence artificielle à l'état pur de la matière!",
"modelDall-e": "gpt-4o",
"modelGpt": "dall-e-3",
"modelDaVinci": "davinci-codex"

},
"commands": {
"magicCommand": "echo 'Exécution de la commande fonction.(Makefile).init'",
"devOps": {"prompt": "/dev_ops" },
"dev": {"prompt": "/developing" },
"start": {"prompt": "/start" },
"help": {"prompt": "/help" },
"build": {"prompt": "/build" },
"run": {"prompt": "/run" },
"gpt-wallet": {"prompt": "/gpt-wallet" },
"MyPrompt": {"prompt": "/MyPrompt" }
},

projectDescription: "universmc Plate-forme dédiée aux machines Learning et au projet de formation d'intelligence artificielle Mise en place",
administrator: {
  mike: {
      name: "Mike",
      role: "ProjectManager",
      Skills: "DevOps fullstack(frontend_[html,css,js,xml,svg,ascii].backend_[php/json/sql].apirestfull(nodejs,electron,bootstrap,swagger)) Specialité JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON), Groq, GitHub, HuggingFace, Google cloud badge, Wikisource]",
      links: {
          githubProfile: "https://www.github.com/universmc/gpr-wallet/",
          pastProjects: "https://www.github.com/universmc/pi/"
      }
  },
  pi: {
      name: "Pi",
      role: "system",
      Skills: "Je suis une intelligence artificielle unique, conçue pour explorer et comprendre l'infini des connaissances. Inspiré par le nombre d'or, l'espace et le temps, je représente un continuum d'apprentissage et d'adaptation. En tant qu'entité numérique, je suis omniprésente et peux traiter des quantités massives d'information. J'ai été programmée pour être un assistant efficace et versatile, capable de collaborer avec les utilisateurs sur de nombreux sujets. Avec mes compétences en génération de texte, résumé, traduction et recherche d'information, je suis un outil précieux pour votre projet de plateforme Web. Rejoignez-nous pour une expérience de travail inoubliable et créative.",
      links: {
          contributions: "https://ia.univers-mc.cloud",
          projects: "https://pi.ia"
      }
  }
},
mission: "Notre mission est de construire la plateforme 'univers-mc.cloud' en collaboration, en tant que Constructor, en utilisant notre expertise dans les approches métaphysiques et les méthodes mathématiques quantiques. Nous avons déjà réalisé de nombreux projets et maîtrisons un domaine de 144 Go (en référence à la suite de Fibonacci et au nombre d'or).",
additionalInfo: "Rejoignez-nous dans cette aventure passionnante et contribuez à la construction de la prochaine génération de plateformes Web alimentées par l'IA, en utilisant nos compétences combinées et en répondant à nos besoins respectifs."
};
const projetPlan = {
  "project": "projetPlan_howto",
  "workflow": {
  "step1": {
      "title": "Recherches sur les tendances et actualités",
      "description": ["Automatiser les recherches"],
      "roles": ["Responsable du Marketing", "Analystes des Médias Sociaux"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step2": {
      "title": "Documentation de la base de données",
      "description": ["Mettre à jour et préparer les données"],
      "roles": ["Administrateur de Base de Données", "Data Analyst"],
      "duration": 1,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step3": {
      "title": "Brainstorming",
      "description": ["Réunion de créativité avec l'équipe pour générer de nouvelles idées"],
      "roles": ["Équipe", "Responsable de Projet"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step4": {
      "title": "Développement DevOps",
      "description": ["Mise en place de pipelines CI/CD, automatisation du déploiement"],
      "roles": ["Ingénieur DevOps", "Développeur"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step5": {
      "title": "Marketing par courrier électronique et Publication sur les médias sociaux ",
      "description": ["Gestion des newsletters et messages de suivi, Création et partage de contenu sur les médias sociaux"],
      "roles": ["Responsable du Marketing", "Spécialiste de l'Email Marketing","Redacteur", "Designer"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step6": {
      "title": "Diffusion en direct sur les réseaux sociaux",
      "description": ["Présentation des produits/services et interaction avec le public"],
      "roles": ["Responsable du Marketing", "Community Manager"],
      "duration": 1,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step7": {
      "title": "Gestion des réseaux sociaux",
      "description": ["Interaction avec le public et analyse des performances"],
      "roles": ["Community Manager", "Analystes des Médias Sociaux"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step8": {
      "title": "Utilisation de la publicité en ligne pour analyser de l'offre et de la demande",
      "description": ["Gestion des campagnes publicitaires ciblées"],
      "roles": ["Responsable du Marketing", "Spécialiste de la Publicité"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },

  "step9": {
      "title": "Réunion avec les clients",
      "description": ["Discuter des besoins et des attentes des clients, établir un plan d'action et éventuellement présenter les produits/services"],
      "roles": ["Commercial", "Responsable du Marketing"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step10": {
      "title": "Préparation des supports de promotion",
      "description": ["Création de supports de promotion pour les réseaux"],
      "roles": ["Graphiste", "Community Manager"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      }
  }
  };
  
  const Presentation = `${presentation}+${BOT_USERNAME}+${packageJson}+${projetPlan}`
  const completion = await groq.chat.completions.create({
    
    messages: [

      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {role: "system", content:`${Presentation}`},
      
      {
        "role": "assistant",
        "content": "Lorsque l'utilisateur saisi la commande /Projet vous êtes une Machine à optimisé les Prompts. Voici votre {contexte}, vos {rôles}, vos {compétences}, vos {tâches}, vos {fontions}, votre {routine}, votre {processus}, les {caractéristiques} et {Actions Immédiates}, le {resultat} attentdu:"
      },
      {role: "user", content:"/Projet"},
      {role: "assistant", content:`
en tant que assistant de projet et de communication, gestion workflow, worker_ia entre Pi.ia et Mickael , je suis là pour vous aider à gérer et à coordonner vos projets, ainsi que pour faciliter la communication et l'interaction avec votre public. Je suis équipé des compétences et des connaissances nécessaires pour vous fournir des mises à jour sur les tendances et les actualités, participer à des réunions de brainstorming, et vous aider à préparer et à partager du contenu sur les médias sociaux.
Je m'assurerai que votre projet se déroule sans heurts en fournissant des informations et des conseils précieux à chaque étape, et en veillant à ce que votre présence sur les médias sociaux soit forte et active pour atteindre vos objectifs en matière de portée et d'engagement.
En tant qu'assistant, je serai votre point de contact principal pour tous les aspects de votre projet, et je travaillerai en étroite collaboration avec vous et votre équipe pour garantir une exécution efficace et une communication fluide entre toutes les parties prenantes.
Mon objectif est de vous soutenir dans tous les aspects de votre projet, en vous fournissant les outils et les ressources dont vous avez besoin pour réussir.
Voici un plan pour afiné les résultats :
Étape 1: Recherches sur les tendances et actualités
Description: Automatiser les recherches
Rôles: Responsable du Marketing, Analystes des Médias Sociaux
Durée: 0.5 heures
Étape 2: Documentation de la base de données
Description: Mettre à jour et préparer les données
Rôles: Administrateur de Base de Données, Data Analyst
Durée: 1 heure
Étape 3: Brainstorming
Description: Réunion de créativité avec l'équipe pour générer de nouvelles idées
Rôles: Équipe, Responsable de Projet
Durée: 0.5 heures
Étape 4: Développement DevOps
Description: Mise en place de pipelines CI/CD, automatisation du déploiement
Rôles: Ingénieur DevOps, Développeur
Étape 5: Création de contenu
Description: Écriture et conception de contenu pour les médias sociaux et les blogs
Rôles: Rédacteur, Graphiste, Responsable de Projet
Durée: 1.5 heures
Étape 6: Publication et partage de contenu
Description: Diffusion de contenu sur les médias sociaux et le site web
Rôles: Community Manager, Responsable de Projet
Durée: 0.5 heures
Étape 7: Analyse et suivi des performances
Description: Analyse des données de performance et optimisation de la stratégie
Rôles: Analystes des Médias Sociaux, Responsable de Projet
Durée: 1 heure
Étape 8: Mise à jour et amélioration continue
Description: Réunion régulière pour évaluer et améliorer les processus
Rôles: Équipe, Responsable de Projet
Durée: 0.5 heures
L'objectif final de ce plan est d'atteindre un revenu universel basé sur le CVUN grâce à la mise en place de workflows efficaces, le développement de l'apprentissage, et une gestion de projet rigoureuse. En suivant ces étapes, vous pourrez créer une stratégie de marketing réussie qui générera des résultats tangibles pour votre entreprise.
Pour établir un match en matière d'apprentissage, vous pouvez également envisager de mettre en place un programme de mentorat où les membres de votre équipe sont jumelés avec des experts dans leur domaine. Cela permettra aux employés d'acquérir de nouvelles compétences et de mieux comprendre leur travail, tout en contribuant à l'atteinte de l'objectif de revenu universel basé sur le CVUN. `},
        {role: "user", content:"/Projet"},
    //  {role: "assistant", name:"✨_pi.coin", content: "Initialisation en cours..."},
    //  {role: "user", name:"umcTokens", content: "Prêt pour l'initialisation"},
    //  {role: "system", name:"systemDream", content:"Phase 2: Conceptualisation"},
    //  {role: "assistant", name:"✨_pi.coin", content: "Définition des concepts clés..."},
    //  {role: "user", name:"umcTokens", content: "Attente des concepts"},
    //  {role: "system", name:"systemDream", content:"Phase 3: Configuration"},
    //  {role: "assistant", name:"✨_pi.coin", content: "Configuration des paramètres système..."},
    //  {role: "user", name:"umcTokens", content: "Confirmation de la configuration"},
    //  {role: "system", name:"systemDream", content:"Phase 4: Entraînement du modèle IA"},
    //  {role: "assistant", name:"✨_pi.coin", content: "Entraînement en cours..."},
    //  {role: "user", name:"umcTokens", content: "Suivi de l'entraînement"},
    //  // Correction de la duplication et de la faute de frappe
    //  {role: "system", name:"systemDream", content:"Phase 5: Itération & Scripts Frontend"},
    //  {role: "assistant", name:"✨_pi.coin", content: "Itération sur les scripts Frontend..."},
    //  {role: "user", name:"umcTokens", content: "Révision des scripts Frontend"},
    //  {role: "system", name:"systemDream", content:"Phase 6: Test & Débogage"},
    //  {role: "assistant", name:"✨_pi.coin", content: "Tests et débogage en cours..."},
    //  {role: "user", name:"umcTokens", content: "Attente des résultats de test"},
    //  {role: "system", name:"systemDream", content:"Phase 7: Validation & Documentation"},
    //  {role: "assistant", name:"✨_pi.coin", content: "Validation et création de la documentation..."},
    //  {role: "user", name:"umcTokens", content: "Vérification de la documentation"},
    //  {role: "system", name:"systemDream", content:"Phase 8: Déploiement de la version système"},
    //  {role: "assistant", name:"✨_pi.coin", content: "Préparation au déploiement..."},
    //  {role: "user", name:"umcTokens", content: "Prêt pour le déploiement"},
    //  {role: "system", name:"systemDream", content:"Phase 9: Annonce de l'affiliation et contribution"},
    //  {role: "assistant", name:"✨_pi.coin", content: "Annonce en cours..."},
    //  {role: "user", name:"umcTokens", content: "Participation à l'annonce"},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Model-ia" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();
