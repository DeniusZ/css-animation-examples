import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatedText } from "./pages/AnimatedText";
import { ParallaxPage } from "./pages/ParallaxPage";
import { AnimatedButtons } from "./pages/AnimatedButtons";
import { Homepage } from "./pages/Homepage";
import GlobalStyles from "./styles/GlobalStyles";
import { ExpandableCard } from "./pages/ExpandableCard";
import { AnimatedText2 } from "./pages/AnimatedText2";
import { ScrollAnimation } from "./pages/ScrollAnimation";
import { ScrollAnimation2 } from "./pages/ScrollAnimation2";
import { BgScrollAnimation } from "./pages/BgScrollAnimation";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="animatedText" element={<AnimatedText />} />
        <Route path="parallax" element={<ParallaxPage />} />
        <Route path="animatedButtons" element={<AnimatedButtons />} />
        <Route path="expandableCard" element={<ExpandableCard />} />
        <Route path="animatedText2" element={<AnimatedText2 />} />
        <Route path="scrollAnimation" element={<ScrollAnimation />} />
        <Route path="scrollAnimation2" element={<ScrollAnimation2 />} />
        <Route path="bgScrollAnimation" element={<BgScrollAnimation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
