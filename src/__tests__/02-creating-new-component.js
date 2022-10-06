import { render, screen, fireEvent } from "@testing-library/react";
import { useCounter } from "../hooks/useCounter";

const UseCounter = ({ initialCount = 0, step = 1 } = {}) => {
  const { count, decrement, increment } = useCounter({ initialCount, step });

  return (
    <div>
      <div>Current count: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

test("counter increments and decrements when buttons are clicked", () => {
  render(<UseCounter />);

  const decrement = screen.getByRole("button", { name: "Decrement" });
  const increment = screen.getByRole("button", { name: "Increment" });
  const message = screen.getByText((content) =>
    content.startsWith("Current count:")
  );
  // console.log(message.innerHTML);

  expect(message).toHaveTextContent("Current count: 0");
  fireEvent.click(increment);
  expect(message).toHaveTextContent("Current count: 1");
  fireEvent.click(decrement);
  expect(message).toHaveTextContent("Current count: 0");
});

test("counter works with different initial value", () => {
  render(<UseCounter initialCount={3} />);

  const decrement = screen.getByRole("button", { name: "Decrement" });
  const increment = screen.getByRole("button", { name: "Increment" });
  const message = screen.getByText((content) =>
    content.startsWith("Current count:")
  );
  // console.log(message.innerHTML);

  expect(message).toHaveTextContent("Current count: 3");
  fireEvent.click(increment);
  expect(message).toHaveTextContent("Current count: 4");
  fireEvent.click(decrement);
  expect(message).toHaveTextContent("Current count: 3");
});
