import React, { useState } from 'react';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Dummy translation logic
    setTranslatedText(`${inputText} translated`);
  };

  return (
    <div>
      <h2>Translator</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>Translated Text: {translatedText}</p>
    </div>
  );
};

export default Translator;
