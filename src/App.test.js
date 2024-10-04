import { render, screen } from "@testing-library/react";
import ReserveMain from "./components/mains/ReserveMain";
import initializeTimes from "./utils/initializeTimes";
import updateTimes from "./utils/updateTimes";

test("renders availability form", () => {
  render(<ReserveMain />);
  const title = screen.getByText(/RESERVE YOUR TABLE!/i);
  expect(title).toBeInTheDocument();
});

test("has length", () => {
  const times = initializeTimes();
  expect(times).not.toHaveLength(0);
});

test("available times when updateTimes is called", () => {
  const newTimes = updateTimes(null, { type: "NEW_DATE", payload: new Date() });
  expect(newTimes).not.toHaveLength(0);
});
