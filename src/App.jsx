import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import { Background } from "./components/Background";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aboutme } from "./components/Aboutme";
import { Home } from "./assets/pages/Home";
import { Test } from "./assets/pages/Test";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/aboutme" element={<Home />} />
             */}
            <Route path="/aboutme" element={<Test />} />
            <Route path="/" element={<Background />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
        <SpeedInsights />
      </RecoilRoot>

      {/* <Video /> */}
    </>
  );
}

export default App;
