import Router from "./Router";
import { scan } from "react-scan";
import "./styles/global.scss";

scan({
  enabled: true,
});

function App() {
  return <Router />;
}

export default App;
