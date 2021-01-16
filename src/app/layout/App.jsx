import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailed from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/event/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailed} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;
