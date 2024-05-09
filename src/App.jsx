import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import { Background } from "./components/Background";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Background />
        <Analytics />
        <SpeedInsights />
      </RecoilRoot>

      {/* <Video /> */}
    </>
  );
}

export default App;
