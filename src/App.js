import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <>
      <Switch>
        <Route to="/">
          <MainScreen />
        </Route>
      </Switch>
    </>
  );
}

export default App;
