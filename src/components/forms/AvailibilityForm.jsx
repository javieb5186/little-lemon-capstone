export default function AvailibilityForm() {
  return (
    <form>
      <div>
        <div>
          <label htmlFor="location">Location</label>
          <select name="location" id="location">
            <option value="chicago">Chicago</option>
            <option value="chicago">Denver</option>
            <option value="chicago">California</option>
          </select>
        </div>
        <div>
          <label htmlFor="location"># of People</label>
          <option value="2">2 People</option>
          <select name="location" id="location">
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="date">Date</label>
          <button name="date" id="date">
            SEPTEMBER 26, 2024
          </button>
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <button name="time" id="time">
            7:00 PM
          </button>
        </div>
      </div>
      <label>Seating</label>
      <div>
        <button>Indoor</button>
        <button>Outdoor</button>
      </div>
      <h4>Important Booking Information</h4>
      <p>
        Cancellations are free. But we ask that you do so 15 minutes before or
        after your reservation.
      </p>
      <p>
        Table reservation isn&apos;t a guarantee. If you are unable to place a
        reservation, please call us directly and we will assist you.
      </p>
      <button>Check Availability</button>
    </form>
  );
}
