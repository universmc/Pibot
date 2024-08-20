const wordsPerSecond = 2.5; // 2.5 words per second
const videoDuration = 10; // 10 seconds
const metadata = [
  { text: 'Lorem ipsum dolor sit amet', timestamp: 0 },
  { text: 'Consectetur adipiscing elit', timestamp: 3 },
  { text: 'Integer molestie nunc', timestamp: 6 },
  { text: 'Sed pharetra neque', timestamp: 9 },
];

function createVideoScript(metadata) {
  const script = [];
  metadata.forEach((data) => {
    const startTime = Math.floor(data.timestamp * wordsPerSecond);
    const text = data.text;
    const wordCount = text.split(' ').length;
    const endTime = Math.floor((data.timestamp + wordCount / wordsPerSecond) * wordsPerSecond);
    script.push({
      start: startTime,
      end: endTime,
      text: text,
    });
  });
  return script;
}

const videoScript = createVideoScript(metadata);
console.log(videoScript);
