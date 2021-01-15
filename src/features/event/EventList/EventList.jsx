import React, { Fragment } from "react";
import EventListItem from "./EventListItem";

const EventList = ({ events, onEventOpen, deleteEvent }) => {
  return (
    <Fragment>
      <h1>Event List</h1>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          onEventOpen={onEventOpen}
          deleteEvent={deleteEvent}
        />
      ))}
    </Fragment>
  );
};

export default EventList;
