import "./App.scss";
import QuoteBox from "./Components/QuoteBox";
import { useRef } from "react";
function App() {
  let appBackGroundRef = useRef(null);
  return (
    <div>
      <QuoteBox appBg={appBackGroundRef} />
    </div>
  );
}

export default App;
