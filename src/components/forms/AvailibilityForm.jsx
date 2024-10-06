import { useState } from "react";

export default function AvailibilityForm({
  location,
  persons,
  todaysDate,
  date,
  time,
  seating,
  availableTimes = [],
  handleLocation,
  handlePersons,
  handleDate,
  handleTime,
  handleSeating,
  handleNextStep,
}) {
  const handleForm = (e) => {
    e.preventDefault();
    handleNextStep();
  };

  console.log(todaysDate);

  return (
    <form className="text-lg space-y-8" onSubmit={handleForm}>
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
              data-test-id="location"
              className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary"
              value={location}
              onChange={handleLocation}
            >
              <option value="chicago">Chicago</option>
              <option value="denver">Denver</option>
              <option value="california">California</option>
            </select>
          </div>
          <div className="flex-1 space-y-2">
            <label htmlFor="persons" className="font-bold text-lg">
              # of People
            </label>
            <select
              name="persons"
              id="persons"
              data-test-id="persons"
              className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary"
              value={persons}
              onChange={handlePersons}
            >
              <option value={1}>1 Person</option>
              <option value={2}>2 People</option>
              <option value={3}>3 People</option>
              <option value={4}>4 People</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md-flex-row gap-4">
          <div className="flex-1 space-y-2">
            <label htmlFor="date" className="font-bold text-lg">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              data-testid="date"
              className="block w-full h-12 rounded-2xl px-4 text-lg border border-black bg-white text-left text-primary"
              value={date}
              onChange={handleDate}
              min={todaysDate}
            />
          </div>
          <div className="flex-1 space-y-2">
            <label htmlFor="time" className="font-bold text-lg">
              Time
            </label>
            <select
              name="time"
              id="time"
              data-test-id="time"
              className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary"
              value={time}
              onChange={handleTime}
            >
              {availableTimes.map((time) => {
                return (
                  <option key={time} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
            {!availableTimes.length && (
              <p className="text-red">
                UH-OH: Looks like there are no reservations available for today.
                Please select a different day.
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-bold text-lg">Seating</label>
          <div className="space-x-4">
            <button
              type="button"
              className={`h-12 rounded-2xl px-8 text-lg border border-black ${
                seating === "indoor"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
              onClick={() => handleSeating("indoor")}
            >
              Indoor
            </button>
            <button
              type="button"
              className={`h-12 rounded-2xl px-8 text-lg border border-black ${
                seating === "indoor"
                  ? "bg-white text-primary"
                  : "bg-primary text-white"
              }`}
              onClick={() => handleSeating("oudoor")}
            >
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
      <button
        type="submit"
        className={`h-12 rounded-2xl px-8 text-lg border border-black ${
          !availableTimes.length ? "bg-disabled" : "bg-secondary"
        }`}
        disabled={!availableTimes.length}
        aria-label="Check availability"
      >
        Check Availability
      </button>
    </form>
  );
}
