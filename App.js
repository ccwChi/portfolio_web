import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Protfolio from "./components/Protfolio";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-gray-200 dark:bg-gray-900 overflow-hidden">
      <Header />
      <About />
      <Timeline />
      <Protfolio />
      <Footer />
    </div>
  );
}

export default App;
