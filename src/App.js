import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Create from "./pages/Create";
import View from "./pages/View";
import Edit from "./pages/Edit";
import ThemeProvider from "./theme.js";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route exact path="/view" component={View} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
