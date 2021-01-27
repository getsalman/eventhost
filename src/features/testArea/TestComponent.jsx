import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./TestAction";

const TestComponent = () => {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Test Area...</h1>
      <h3>The answer is: {data}</h3>
      <Button
        onClick={() => dispatch(incrementCounter())}
        color="green"
        content="Increment"
      />
      <Button
        onClick={() => dispatch(decrementCounter())}
        color="red"
        content="Decrement"
      />
    </div>
  );
};

export default TestComponent;
