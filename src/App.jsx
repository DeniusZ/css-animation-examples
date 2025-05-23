import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatedText } from "./pages/AnimatedText";
import { ParallaxPage } from "./pages/ParallaxPage";
import { AnimatedButtons } from "./pages/AnimatedButtons";
import { Homepage } from "./pages/Homepage";
import GlobalStyles from "./styles/GlobalStyles";
import { ExpandableCard } from "./pages/ExpandableCard";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
