import './App.css';
import SongOverview from "./component/SongOverview"
import About from "./component/About"
import Navbar from "./component/Navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={SongOverview} exact />
        <Route path="/About.js" component={About} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
