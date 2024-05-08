import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import { Background } from "./components/Background";

function App() {
  return (
    <div>
      <Background />
      <Analytics/>
      
      {/* <Video /> */}
    </div>
  );
}

export default App;
