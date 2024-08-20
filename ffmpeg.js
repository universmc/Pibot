const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

// Flux de métadonnées vidéo (remplacez cette chaîne par votre flux réel)
const videoMetadata = {
  // Métadonnées ici
};

// Chemin vers le fichier vidéo de sortie au format WebM
const outputVideoPath = path.resolve(__dirname, 'video.webm');

ffmpeg.write(videoMetadata, (err, data) => {
  if (err) throw err;
  fs.writeFileSync(outputVideoPath, data);

  console.log('La vidéo a été créée à partir de métadonnées en WebM avec succès !');
});
