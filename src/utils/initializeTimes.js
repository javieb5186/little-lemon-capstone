import { fetchAPI } from "./fetchAPI";

export default function initializeTimes() {
  const availableTimes = fetchAPI(new Date());
  return availableTimes;
}
