import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";
import { useState } from "react";
import Player from "./pages/Player";

function App() {
  const [user, setUser] = useState();
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/welcome" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/welcome">
          {user ? (
            <Welcome setActiveProfile={setActiveProfile} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/browse">
          {user ? (
            <Browse user={user} activeProfile={activeProfile} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/player/:id">
          {user ? <Player /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
