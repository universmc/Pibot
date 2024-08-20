const ffmpeg = require('fluent-ffmpeg');
const { join } = require('path');

const videoDuration = 10; // en secondes
const resolution = '1920x1080'; // résolution de la vidéo
const frameRate = 25; // FPS
const videoBitrate = 1024; // en kb/s
const outputVideoPath = join(__dirname, 'video.webm');

const videoScript = [
  { start: 0, end: 3, text: 'Lorem ipsum dolor sit amet' },
  { start: 3, end: 6, text: 'Consectetur adipiscing elit' },
  { start: 6, end: 9, text: 'Integer molestie nunc' },
  { start: 9, end: 12, text: 'Sed pharetra neque' },
];

ffmpeg({ source: '/dev/null' })
  .then((video) => {
    // Créer un flux pour un fichier vidéo vide avec la résolution, la vitesse de lecture et le codec vidéo
const blankVideo = video.addOptions([
      `-f rawvideo -s:v ${resolution} -pix_fmt yuv420p -r:v ${frameRate} -t ${videoDuration}`,
      '-vcodec',
      'mpeg4',
      '-t',
      videoDuration,
    ]);

    // Ajouter des diapositives de texte pour chaque segment
videoScript.forEach((segment) => {
      const duration = segment.end - segment.start;
      blankVideo.then((video) =>
video.addOptions(['-vf', `drawtext=fontfile=FreeMono.ttf:text="${segment.text}":x=(main_w-text_w-10):y=(main_h-text_h-10):fontsize=40:fontcolor=white@${segment.start}`])
      );
    });

    // Encodez la vidéo au format WebM
blankVideo
      .addOptions(['-c:v', `libvpx-vp9`, `-b:v ${videoBitrate}k`])
      .addOptions(['-c:a', 'libvorbis'])
      .save(outputVideoPath);
  })
  .catch((error) => console.log(error));
