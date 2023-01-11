import { Fragment } from "react";
import "./App.css";
import Home from "./componant/Home.js/Home";
import Navs from "./componant/Navs/Navs";

function App(){
  return(
    <Fragment>
    <Navs/>
    <Home/>
    </Fragment>

  )
}

export default App;

