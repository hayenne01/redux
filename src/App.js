import { Route, Switch } from "react-router-dom";
import "./App.css";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
