import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Person } from "../../assets/person.svg";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Chair } from "../../assets/chair.svg";

export default function ReserveForm() {
  return (
    <form className="space-y-8">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl">ALMOST DONE!</h3>
          <button className="h-12 rounded-2xl px-8 text-lg border border-black bg-secondary">
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
            <span>Chicago</span>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <Person className="w-4 h-4" />
            <span>2 People</span>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <Calendar className="w-4 h-4" />
            <span>September 26, 2024</span>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <Clock className="w-4 h-4" />
            <span>7:00 PM</span>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <Chair className="w-4 h-4" />
            <span>Indoor</span>
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
            placeholder="Your first name"
            className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary placeholder-text-primary"
          />
        </div>
        <div className="flex-1 space-y-2">
          <label htmlFor="last-name" className="font-bold text-lg">
            Last Name<span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Your last name"
            className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary placeholder-text-primary"
          />
        </div>
      </div>
      <div className="flex flex-col md-flex-row gap-4">
        <div className="flex-1 space-y-2">
          <label htmlFor="email" className="font-bold text-lg">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            className="block w-full h-12 rounded-2xl px-4 text-lg border border-black text-primary placeholder-text-primary"
          />
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
          />
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
          />
        </div>
        <div className="flex-1" />
      </div>
      <div className="space-y-2">
        <div className="flex gap-x-4">
          <input type="checkbox" className="accent-primary w-6 h-6" />
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
        <button className="h-12 rounded-2xl px-8 text-lg border border-black bg-secondary">
          Reserve
        </button>
        <button className="h-12 rounded-2xl px-8 text-lg border border-black bg-primary text-white">
          Call
        </button>
      </div>
    </form>
  );
}
