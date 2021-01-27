import React, { Fragment, useState } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import cuid from "cuid";
import { createEvent, updateEvent } from "../eventActions";

const EventForm = ({
  handleFormCancel,
  // createEvent,
  selectedEvent,
  // updatedEvent,
  history,
  match,
}) => {
  const eventt = useSelector((state) => {
    const eventId = match.params.id;
    let eventt = {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: "",
    };

    if (eventId && state.events.length > 0) {
      eventt = state.events.filter((event) => event.id === eventId)[0];
    }

    return eventt;
  });

  const dispatch = useDispatch();

  const eventData = Object.assign({}, eventt);
  const [event, setEvent] = useState(eventData);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (event.id) {
      dispatch(updateEvent(event));
      history.goBack();
    } else {
      const newEvent = {
        ...event,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
      };
      dispatch(createEvent(newEvent));
      history.push("/events");
    }
  };

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEvent({
      ...event,
      [name]: value,
    });
  };

  return (
    <Fragment>
      <Segment>
        <Form onSubmit={onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              value={event.title}
              onChange={onInputChange}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              value={event.date}
              onChange={onInputChange}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              value={event.city}
              onChange={onInputChange}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              value={event.venue}
              onChange={onInputChange}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              value={event.hostedBy}
              onChange={onInputChange}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    </Fragment>
  );
};

export default EventForm;
