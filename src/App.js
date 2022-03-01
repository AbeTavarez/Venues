import { Switch, Route, Redirect } from "react-router-dom";
import Users from "./user/pages/Users";
import NewVenue from "./venues/pages/NewVenue";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";

const App = () => {
  return (
    <div className="">
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users} />

          <Route path="/venues/new" component={NewVenue} />

          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
