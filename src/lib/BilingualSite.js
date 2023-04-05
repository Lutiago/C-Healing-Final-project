import React, { useState, createContext } from 'react';
import english from './english.json';
import spanish from './spanish.json';

export const LanguageContext = createContext();

function App() {

  const [language, setLanguage] = useState('en');

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      <LanguageSwitcher />
      <Header />
      <Content />
      <Footer />
    </LanguageContext.Provider>
  );
}

function LanguageSwitcher() {

  const { language, switchLanguage } = useContext(LanguageContext);


  const handleLanguageSwitch = (event) => {
    switchLanguage(event.target.value);
  };

 
  return (
    <select value={language} onChange={handleLanguageSwitch}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

function Header() {

  const { language } = useContext(LanguageContext);

 
  const title = language === 'en' ? english.header.title : spanish.header.title;


  return <h1>{title}</h1>;
}

function Content() {

  const { language } = useContext(LanguageContext);

  const intro = language === 'en' ? english.content.intro : spanish.content.intro;
  const body = language === 'en' ? english.content.body : spanish.content.body;

  return (
    <div>
      <p>{intro}</p>
      <p>{body}</p>
    </div>
  );
}

function Footer() {

  const { language } = useContext(LanguageContext);

