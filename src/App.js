import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import PreviewForm from "./screens/previewForm";
import Dashboard from "./screens/dashboard";

function App() {
  return (
    <>
      <Switch>
        <Route path="/forms">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/forms/:formid">
          <PreviewForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
