import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/Create";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/build" component={Create} />
      </Switch>
    </Router>
  );
}

export default App;
