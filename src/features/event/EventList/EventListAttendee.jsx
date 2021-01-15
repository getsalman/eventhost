import React, { Fragment } from "react";
import { List, Image } from "semantic-ui-react";

const EventListAttendee = ({ attendee }) => {
  return (
    <Fragment>
      <List.Item>
        <Image as="a" size="mini" circular src={attendee.photoURL} />
      </List.Item>
    </Fragment>
  );
};

export default EventListAttendee;
