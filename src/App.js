import logo from "./logo.svg";
// import "./App.css";
import "./assets/styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRoutes from "./routes/publicRoutes";
import { Provider } from "./store";

function App() {
  return (
    <div className="App">
      <PublicRoutes />
    </div>
  );
}

export default App;
