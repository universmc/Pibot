const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Assurez-vous que cette clé est définie
});

async function testGROQ() {
  try {
    const response = await groq.chat.completions.create({
      model: 'gemma2-9b-it', // Remplacez par le modèle correct
      messages: [{ role: 'user', content: 'test' }],
    });

    console.log('Réponse de GROQ:', response.choices[0].message.content);
  } catch (error) {
    console.error('Erreur lors de la requête GROQ:', error.message);
    console.error('Détails de l\'erreur:', error.response ? error.response.data : error);
  }
}

testGROQ();
