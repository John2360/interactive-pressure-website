import background from "./imgs/bg1.jpg";
import PageOne from "./pages/pageOne";
import PageTwo from "./pages/pageTwo";
import PageThree from './pages/pageThree';
import PageFour from "./pages/pageFour";
import { ParallaxProvider } from "react-scroll-parallax";


function App() {
  return (
    <ParallaxProvider>
      <div className="h-screen w-screen flex items-center justify-center" style={{backgroundImage: "url("+background+")"}}>
        <div className="container grid grid-cols-2 bg-gradient-to-r bg-white rounded-lg p-20 drop-shadow-xl items-center">
          <h1 className="lg:text-8xl md:text-6xl font-bold text-black">
            Pressure
          </h1>
          <h3 className="lg:text-4xl md:text-xl">The physics behind atmospheric preassure and its interactions with airplanes by John Finberg</h3>
        </div>
      </div>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </ParallaxProvider>
  );
}

export default App;
