import { fetchAPI } from "./fetchAPI";

export default function updateTimes(_state, action) {
  switch (action.type) {
    case "NEW_DATE":
      return fetchAPI(action.payload);
    default:
      break;
  }
}
