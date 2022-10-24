import { getAuth } from "firebase/auth";
import './App.css';
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import app from "./firebase/firebase.init";

const auth = getAuth(app)
function App() {
  return (
    <div className="">
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;
