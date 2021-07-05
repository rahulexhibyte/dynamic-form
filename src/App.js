import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import PreviewForm from "./screens/previewForm";

function App() {
  return (
    <>
      <Switch>
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
