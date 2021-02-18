import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HistoriquePage from "./pages/HistoriquePage";
import InterventionPage from "./pages/InterventionPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/historiques"
          render={(props) => (
            <HistoriquePage namePage=" Page des Historiques" {...props} />
          )}
        />
        <Route path="/interventions" component={InterventionPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
