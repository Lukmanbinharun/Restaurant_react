// import 'bootstrap/dist/css/bootstrap.min.css';
// import BodyComponent from "./bodyComponent/BodyComponent";
// import Header from "./header/Header";
import MainComponent from "./mainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "reactstrap";

function App() {
  return (
    <div>
      {/* <Navbar  ></Navbar> */}
      <BrowserRouter>
        <MainComponent></MainComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
