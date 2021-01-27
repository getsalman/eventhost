import React from "react";
import { Grid } from "semantic-ui-react";
import { useSelector } from "react-redux";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";

const EventDetailedPage = ({ match }) => {
  const event = useSelector((state) => {
    const eventId = match.params.id;
    let event = {};
    if (eventId && state.events.length > 0) {
      event = state.events.filter((event) => event.id === eventId)[0];
    }
    return {
      event,
    };
  });

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event.event} />
        <EventDetailedInfo event={event.event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage;
