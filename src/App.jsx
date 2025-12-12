import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Scoreboard from './components/Scoreboard';
import Guestbook from './components/Guestbook';
import MusicPlayer from './components/MusicPlayer';
import ConsentModal from './components/ConsentModal';

function App() {
  const [hasConsent, setHasConsent] = useState(false);

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans selection:bg-cricket-gold selection:text-cricket-dark">
      <ConsentModal onConsent={() => setHasConsent(true)} />

      {/* Main Content - Only scrollable if consent is technically "given" (visual preference mostly) */}
      <div className={`${!hasConsent ? 'overflow-hidden h-screen filter blur-sm' : ''} transition-all duration-500`}>
        <Navbar />
        <Hero />
        <Timeline />
        <Scoreboard />
        <Gallery />
        <Guestbook />

        {/* Footer */}
        <footer className="py-10 bg-black text-center text-slate-500">
          <p>© 2026 Beyond The Boundary. Made with ❤️ & 🏏</p>
        </footer>
      </div>

      <MusicPlayer autoPlayTrigger={hasConsent} />
    </div>
  );
}

export default App;
