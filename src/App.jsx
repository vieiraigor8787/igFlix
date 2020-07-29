import React from 'react';
import HeaderFlix from './components/HeaderFlix';
import LogoFired from './components/LogoFired';
import Button from './components/Button';
import FooterBase from './components/Footer';

function App() {
  return (
    <>
    <HeaderFlix>
      <LogoFired />

      <Button>Novo vídeo</Button>
    </HeaderFlix>

    <FooterBase>
      <LogoFired />
      <p>Entretenimento garantido</p>
    </FooterBase>
    </>
  );
}

export default App;