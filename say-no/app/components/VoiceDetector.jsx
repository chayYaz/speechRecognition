
"use client"
// components/VoiceDetector.js
// components/VoiceDetector.js
import { useState, useEffect } from 'react';

const VoiceDetector = () => {
  const onNoDetected = () => {
    console.log('User said no!');
    // Add your logic for handling "no" detection here
  };
  const [recognition, setRecognition] = useState(null);

  const useMy=() => {
    if ('webkitSpeechRecognition' in window) {
      console.log("in my");
      const recognitionInstance = new window.webkitSpeechRecognition();
      setRecognition(recognitionInstance)
      recognitionInstance.start()
      recognitionInstance.onerror = (event) => {
        console.error('Recognition error:', event.error);
      };
      recognitionInstance.onresult = (event) => {
        console.log("in on result");
        console.log(event);
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log('Detected:', transcript);

        if (transcript.includes('no')) {
          onNoDetected();
        }
      };

    } else {
      console.error('webkitSpeechRecognition is not supported in this browser.');
    }
  };

  

  return (
    <div>
      <button onClick={useMy}>Start Listening</button>
      <h1>hii</h1>
    </div>
  );
};

export default VoiceDetector;
