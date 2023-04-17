import React, { useState } from 'react';

function BilingualPage() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="language"
          value="en"
          checked={language === 'en'}
          onChange={handleLanguageChange}
        />
        English
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="es"
          checked={language === 'es'}
          onChange={handleLanguageChange}
        />
        Spanish
      </label>
      {language === 'en' && (
        <div>
          <h1>Mental health care </h1>
          <p>that make sense!</p>
        </div>
      )}
      {language === 'es' && (
        <div>
          <h1>Cuidado de tu salud mental</h1>
          <p>que hace mucho sentido</p>
        </div>
      )}
    </div>
  );
}

export default BilingualPage;
