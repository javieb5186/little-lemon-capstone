import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Person } from "../../assets/person.svg";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Chair } from "../../assets/chair.svg";
import { useState } from "react";

export default function ReserveForm({
  location,
  persons,
  date,
  time,
  seating,
  firstName,
  lastName,
  email,
  phone,
  occasion,
  requests,
  firstTime,
  handleFirstName,
  handleLastName,
  handleEmail,
  handlePhone,
  handleOccasion,
  handleRequests,
  handleFirstTime,
  handleNextStep,
  handlePrevStep,
}) {
  const handleForm = (e) => {
    e.preventDefault();
    handleNextStep();
  };

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleFirstNameError = () => {
    const words = /[a-zA-Z]{3,}/.test(firstName);
    if (firstName.length < 3 || !words) setFirstNameError(true);
    else setFirstNameError(false);
  };

  const handleLastNameError = () => {
    const words = /[a-zA-Z]{3,}/.test(lastName);
    if (lastName.length < 3 || !words) setLastNameError(true);
    else setLastNameError(false);
  };

  const handleEmailError = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const valid = emailRegex.test(email);
    setEmailError(valid ? false : true);
  };

  const handlePhoneError = () => {
    const phoneRegex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    const valid = phoneRegex.test(phone);
    setPhoneError(valid ? false : true);
  };

  return (
    <form className="space-y-8" onSubmit={handleForm}>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl">ALMOST DONE!</h3>
          <button
            className="h-12 rounded-2xl px-8 text-lg border border-black bg-secondary"
            onClick={handlePrevStep}
          >
            Back
          </button>
        </div>
        <p className="w-half">
          Please enter your contact information to finalize your reservation and
          receive a confirmation email.
        </p>
      </div>
      <ul className="flex flex-wrap flex-col sm-flex-row gap-y-4 gap-x-8">
        <li>
          <div className="flex gap-2 items-center">
            <Location className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <Person className="w-4 h-4" />
            <span>{persons} People</span>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <Chair className="w-4 h-4" />
            <span>{seating}</span>
          </div>
        </li>
      </ul>
      <div className="flex flex-col md-flex-row gap-4">
        <div className="flex-1 space-y-2">
          <label htmlFor="first-name" className="font-bold text-lg">
            First Name<span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            data-testid="first"
            placeholder="Your first name"
            className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary placeholder-text-primary"
            value={firstName}
            onChange={(e) => {
              handleFirstName(e);
              setFirstNameError(false);
            }}
            required
            minLength={3}
            pattern="[A-Za-z]{3,}"
            onBlur={handleFirstNameError}
          />
          {firstNameError && (
            <p data-testid="firstError" className="text-red">
              Please enter a valid name
            </p>
          )}
        </div>
        <div className="flex-1 space-y-2">
          <label htmlFor="last-name" className="font-bold text-lg">
            Last Name<span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            data-testid="last"
            placeholder="Your last name"
            className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary placeholder-text-primary"
            value={lastName}
            onChange={(e) => {
              handleLastName(e);
              setLastNameError(false);
            }}
            required
            minLength={3}
            pattern="[A-Za-z]{3,}"
            onBlur={handleLastNameError}
          />
          {lastNameError && (
            <p className="text-red">Please enter a valid name</p>
          )}
        </div>
      </div>
      <div className="flex flex-col md-flex-row gap-4">
        <div className="flex-1 space-y-2">
          <label htmlFor="email" className="font-bold text-lg">
            Email Address<span className="text-red">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            data-testid="email"
            placeholder="example@domain.com"
            className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary placeholder-text-primary"
            value={email}
            onChange={(e) => {
              handleEmail(e);
              setEmailError(false);
            }}
            required
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            onBlur={handleEmailError}
          />
          {emailError && <p className="text-red">Please enter a valid email</p>}
        </div>
        <div className="flex-1 space-y-2">
          <label htmlFor="phone" className="font-bold text-lg">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="xxx-xxx-xxxx"
            className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary placeholder-text-primary"
            value={phone}
            onChange={(e) => {
              handlePhone(e);
              setPhoneError(false);
            }}
            onBlur={handlePhoneError}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          {phoneError && (
            <p className="text-red">
              Please enter phone number in xxx-xxx-xxxx format.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col md-flex-row gap-4">
        <div className="flex-1 space-y-2">
          <label htmlFor="occasion" className="font-bold text-lg">
            Occasion
          </label>
          <select
            name="occasion"
            id="occasion"
            className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary"
            value={occasion}
            onChange={handleOccasion}
          >
            <option value="anniversary">Anniversary</option>
            <option value="date">Date night</option>
            <option value="birthday">Birthday</option>
            <option value="celebration">Celebration</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex-1" />
      </div>
      <div className="flex flex-col md-flex-row gap-4">
        <div className="flex-1 space-y-2">
          <label htmlFor="requests" className="font-bold text-lg">
            Special Requests
          </label>
          <textarea
            name="requests"
            id="requests"
            rows={10}
            className="block w-full h-60 rounded-2xl px-4 text-lg border border-black text-primary placeholder-text-primary"
            value={requests}
            onChange={handleRequests}
          />
        </div>
        <div className="flex-1" />
      </div>
      <div className="space-y-2">
        <div className="flex gap-x-4">
          <input
            type="checkbox"
            className="accent-primary w-6 h-6"
            value={firstTime}
            onChange={handleFirstTime}
          />
          <p>First time?</p>
        </div>
        <p>
          NOTE: Selecting this will give you helpful information appended to
          your confirmation email
        </p>
      </div>

      <div></div>
      <article className="space-y-8">
        <h4>Important Dining Information</h4>
        <p>
          If something were to happen on our end, or you are late for your
          reservation. You may be receiving a call or email.
        </p>
        <p>
          From your reservation time, you will have the table for two hours.
        </p>
        <p>
          Table reservation isn&apos;t a guarantee. If you are unable to place a
          reservation, please call us directly and we will assist you.
        </p>
      </article>
      <article className="space-y-8">
        <h4>Note from restaurant</h4>
        <p>
          Thank you for choosing Little Lemon! We are excited to serve you and
          deliver a pleasant dining experience
        </p>
        <p>Parking entrance is west from the building.</p>
        <p>
          If you have any questions or concerns, feel free to ask any Little
          Lemon Employee.
        </p>
      </article>
      <div className="space-x-4">
        <button
          type="submit"
          className="h-12 rounded-2xl px-8 text-lg border border-black bg-secondary"
          aria-label="Reserve table"
        >
          Reserve
        </button>
        <button className="h-12 rounded-2xl px-8 text-lg border border-black bg-primary text-white">
          Call
        </button>
      </div>
    </form>
  );
}
