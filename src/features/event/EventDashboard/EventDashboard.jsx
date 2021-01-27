import React from "react";
import { Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import EventList from "../EventList/EventList";
import { deleteEvent } from "../eventActions";

const EventDashboard = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const handleDeleteEvent = (eventId) => () => {
    dispatch(deleteEvent(eventId));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList deleteEvent={handleDeleteEvent} events={events} />
      </Grid.Column>
      <Grid.Column width={6}></Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
