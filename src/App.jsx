import Hero from "./components/Hero/Hero";
import "../App.css";
import Programs from "./components/programs/Programs";
import Enemy from "./components/Enemy/Enemy";
import GameVersion from "./components/GameVersions/GameVersion";
import PlayingSection from "./components/PlayingSection/playingSection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app">
      <Hero />
      <Programs />
      <Enemy />
      <GameVersion />
      <PlayingSection />
      <Footer />
    </div>
  );
}

export default App;
