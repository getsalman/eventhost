import React, { Fragment } from "react";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </Fragment>
  );
};

export default App;
