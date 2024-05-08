import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import { Background } from "./components/Background";
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <div>
      <Background />
      <Analytics />
      <SpeedInsights />

      {/* <Video /> */}
    </div>
  );
}

export default App;
