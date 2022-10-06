import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test("counter increments and decrements when buttons are clicked", () => {
  render(<Counter />);

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
