import React, { Fragment } from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({ signIn }) => {
  return (
    <Fragment>
      <Menu.Item position="right">
        <Button onClick={signIn} basic inverted content="Login" />
        <Button
          basic
          inverted
          content="Register"
          style={{ marginLeft: "0.5em" }}
        />
      </Menu.Item>
    </Fragment>
  );
};

export default SignedOutMenu;
