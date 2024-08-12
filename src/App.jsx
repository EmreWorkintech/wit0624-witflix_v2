import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";
import { useState } from "react";

function App() {
  const [user] = useState({
    name: "Emre",
    id: 1,
    avatar:
      "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg",
  });
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/welcome" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route path="/browse">
          <Browse user={user} activeProfile={activeProfile} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
