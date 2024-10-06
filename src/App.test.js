import { render, screen, fireEvent } from "@testing-library/react";
import AvailibilityForm from "./components/forms/AvailibilityForm";
import ReserveForm from "./components/forms/ReserveForm";
import initializeTimes from "./utils/initializeTimes";
import updateTimes from "./utils/updateTimes";

test("renders availability form", () => {
  render(<AvailibilityForm />);
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

test("Have a required attribute", () => {
  render(<ReserveForm />);
  const firstNameInput = screen.getByTestId("first");
  expect(firstNameInput).toHaveAttribute("required");
});
