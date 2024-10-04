import { useState, useReducer } from "react";

import AvailibilityForm from "../forms/AvailibilityForm";
import ReserveForm from "../forms/ReserveForm";
import SuccessfulForm from "../forms/SuccessfulForm";
import initializeTimes from "../../utils/initializeTimes";
import updateTimes from "../../utils/updateTimes";
import { submitAPI } from "../../utils/submitAPI";
import { useNavigate } from "react-router-dom";

export default function ReserveMain() {
  const todaysDate = new Date();
  const [location, setLocation] = useState("chicago");
  const [persons, setPersons] = useState(2);
  const [date, setDate] = useState(todaysDate.toISOString().slice(0, 10));
  const [time, setTime] = useState(
    todaysDate.toTimeString().slice(0, 2) + ":00"
  );
  const [seating, setSeating] = useState("indoor");

  const handleLocation = (e) => setLocation(e.currentTarget.value);
  const handlePersons = (e) => setPersons(e.currentTarget.value);
  const handleTime = (e) => setTime(e.currentTarget.value);
  const handleSeating = (value) => setSeating(value);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("anniversary");
  const [requests, setRequests] = useState("");
  const [firstTime, setFirstTime] = useState(false);

  const handleFirstName = (e) => setFirstName(e.currentTarget.value);
  const handleLastName = (e) => setLastName(e.currentTarget.value);
  const handleEmail = (e) => setEmail(e.currentTarget.value);
  const handlePhone = (e) => setPhone(e.currentTarget.value);
  const handleOccasion = (e) => setOccasion(e.currentTarget.value);
  const handleRequests = (e) => setRequests(e.currentTarget.value);
  const handleFirstTime = (e) => setFirstTime(!firstTime);

  const [steps, setSteps] = useState(1);
  const handleNextStep = () => setSteps(steps + 1);
  const handlePrevStep = () => setSteps(steps - 1);

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const handleDate = (e) => {
    const newDate = e.currentTarget.value;
    console.log("newDate", newDate);
    setDate(newDate);
    dispatch({ type: "NEW_DATE", payload: new Date(newDate) });
  };

  const submitForm = (formData) => {
    const res = submitAPI(formData);
    console.log("Form submitted");
    if (res) {
      handleNextStep();
    }
  };

  return (
    <main className="pb-8">
      <div className="bg-primary">
        <section className="text-white grid space-y-4 grid-cols-1 md-grid-cols-2 items-center md-justify-center md-h-md">
          <article className="flex flex-col gap-y-8 text-center md-text-left">
            <div>
              <h1 className="text-secondary text-4xl md-text-6xl">
                Little Lemon
              </h1>
              <h2 className="text-3xl md-text-4xl">Chicago</h2>
            </div>
            <div>
              <h3 className="text-xl text-secondary">Reservations</h3>
              <p>
                Reserve a table at your local Little Lemon restaurant. We look
                forward to serving you delicious and healthy food with an exotic
                atmosphere.
              </p>
            </div>
          </article>
          <div className="text-center md-text-right">
            <img
              src="/images/restaurant.jpg"
              alt="Beautiful wood tables and chairs with contemporary design"
              className="rounded-2xl w-full sm-w-three-quarters md-w-full"
            />
          </div>
        </section>
      </div>
      <section>
        {steps === 1 && (
          <AvailibilityForm
            location={location}
            persons={persons}
            date={date}
            time={time}
            seating={seating}
            availableTimes={availableTimes}
            handleLocation={handleLocation}
            handlePersons={handlePersons}
            handleDate={handleDate}
            handleTime={handleTime}
            handleSeating={handleSeating}
            handleNextStep={handleNextStep}
          />
        )}
        {steps === 2 && (
          <ReserveForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            occasion={occasion}
            requests={requests}
            firstTime={firstTime}
            handleFirstName={handleFirstName}
            handleLastName={handleLastName}
            handleEmail={handleEmail}
            handlePhone={handlePhone}
            handleOccasion={handleOccasion}
            handleRequests={handleRequests}
            handleFirstTime={handleFirstTime}
            handleNextStep={() => submitForm({})}
            handlePrevStep={handlePrevStep}
          />
        )}
        {steps === 3 && <SuccessfulForm />}
      </section>
    </main>
  );
}
