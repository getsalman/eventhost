import React, { Fragment } from "react";
import EventListItem from "./EventListItem";

const EventList = ({ events, deleteEvent }) => {
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} deleteEvent={deleteEvent} />
      ))}
    </Fragment>
  );
};

export default EventList;
