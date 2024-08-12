import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
      </Switch>
    </>
  );
}

export default App;
