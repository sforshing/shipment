import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import Login from "./containers/Login";

function App() {
  return (
    <div className="App container py-3">
      <Login />
      <Routes />
    </div>
  );
}

export default App;
