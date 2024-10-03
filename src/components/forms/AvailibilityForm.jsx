export default function AvailibilityForm() {
  return (
    <form className="text-lg space-y-8">
      <div>
        <h3 className="text-xl font-extrabold">RESERVE YOUR TABLE!</h3>
        <p className="text-base">
          Fill out booking information to check availability.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col md-flex-row gap-4">
          <div className="flex-1 space-y-2">
            <label htmlFor="location" className="font-bold text-lg">
              Location
            </label>
            <select
              name="location"
              id="location"
              className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary"
            >
              <option value="chicago">Chicago</option>
              <option value="chicago">Denver</option>
              <option value="chicago">California</option>
            </select>
          </div>
          <div className="flex-1 space-y-2">
            <label htmlFor="location" className="font-bold text-lg">
              # of People
            </label>
            <select
              name="location"
              id="location"
              className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary"
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md-flex-row gap-4">
          <div className="flex-1 space-y-2">
            <label htmlFor="date" className="font-bold text-lg">
              Date
            </label>
            <button
              name="date"
              id="date"
              className="block w-full h-12 rounded-2xl px-8 text-lg border border-black bg-white text-left text-primary"
            >
              SEPTEMBER 26, 2024
            </button>
          </div>
          <div className="flex-1 space-y-2">
            <label htmlFor="time" className="font-bold text-lg">
              Time
            </label>
            <button
              name="time"
              id="time"
              className="block w-full h-12 rounded-2xl px-4 text-lg border border-black bg-white text-left text-primary"
            >
              7:00 PM
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-bold text-lg">Seating</label>
          <div className="space-x-4">
            <button className="h-12 rounded-2xl px-8 text-lg border border-black bg-primary text-white">
              Indoor
            </button>
            <button className="h-12 rounded-2xl px-8 text-lg border border-black bg-white text-primary">
              Outdoor
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <h4 className="text-lg">Important Booking Information</h4>
        <p>
          Cancellations are free. But we ask that you do so 15 minutes before or
          after your reservation.
        </p>
        <p>
          Table reservation isn&apos;t a guarantee. If you are unable to place a
          reservation, please call us directly and we will assist you.
        </p>
      </div>
      <button className="h-12 rounded-2xl px-8 text-lg border border-black bg-secondary">
        Check Availability
      </button>
    </form>
  );
}
