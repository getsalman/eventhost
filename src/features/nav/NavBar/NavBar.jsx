import React, { useState } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

const NavBar = ({ history }) => {
  const [authenticate, setAuthenticate] = useState(false);

  const handleSigneIn = () => {
    setAuthenticate(true);
  };

  const handleSignOut = () => {
    setAuthenticate(false);
    history.push("./");
  };
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header>
          <img src="/assets/logo.png" alt="logo" />
          Events Fest
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        <Menu.Item as={NavLink} to="/test" name="Test" />
        {authenticate && <Menu.Item as={NavLink} to="/people" name="People" />}
        {authenticate && (
          <Menu.Item>
            <Button
              as={Link}
              to="createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
        )}
        {authenticate ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu signIn={handleSigneIn} />
        )}
      </Container>
    </Menu>
  );
};

export default withRouter(NavBar);
