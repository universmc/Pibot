const express = require('express');
const Groq = require('groq-sdk');
const app = express();
const port = 3000;

// Initialisez le SDK GROQ avec votre clé API
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Assurez-vous que cette clé est définie dans votre environnement
});

app.use(express.static('./')); // Servir les fichiers statiques de notre dossier 'public'

app.get('/generate', async (req, res) => {
  const prompt = req.query.prompt || "Hello, how can I assist you today?";

  try {
    const response = await groq.chat.completions.create({
      model: 'gemma2-9b-it', // Remplacez par le modèle correct si nécessaire
      messages: [{ role: 'user', content: prompt }],
    });

    const message = response.choices[0].message.content;
    res.json({ message });
  } catch (error) {
    console.error('Erreur lors de la requête GROQ:', error.message);
    console.error('Détails de l\'erreur:', error.response ? error.response.data : error);
    res.status(500).json({ error: 'Erreur lors de la requête à l\'API GROQ.' });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
