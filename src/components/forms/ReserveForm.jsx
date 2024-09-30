export default function ReserveForm() {
  return (
    <form>
      <div>
        <h3>ALMOST DONE!</h3>
        <button>Back</button>
      </div>
      <p>
        Please enter your contact information to finalize your reservation and
        receive a confirmation email.
      </p>
      <ul>
        <li>
          <div>
            <span>Chicago</span>
          </div>
        </li>
        <li>
          <div>
            <span>Chicago</span>
          </div>
        </li>
        <li>
          <div>
            <span>2 People</span>
          </div>
        </li>
        <li>
          <div>
            <span>September 26, 2024</span>
          </div>
        </li>
        <li>
          <div>
            <span>7:00 PM</span>
          </div>
        </li>
        <li>
          <div>
            <span>Indoor</span>
          </div>
        </li>
      </ul>
      <div>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" />
        </div>
        <div>
          <label htmlFor="last-name">First Name</label>
          <input type="text" name="last-name" id="last-name" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" />
        </div>
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select name="occasion" id="occasion">
          <option value="anniversary">Anniversary</option>
          <option value="date">Date night</option>
          <option value="birthday">Birthday</option>
          <option value="celebration">Celebration</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="requests">Special Requests</label>
        <textarea name="requests" id="requests"></textarea>
      </div>
      <div>
        <input type="checkbox" />
        <p>First time?</p>
      </div>
      <p>
        NOTE: Selecting this will give you helpful information appended to your
        confirmation email
      </p>
      <div></div>
      <article>
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
      <article>
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
      <div>
        <button>Reserve</button>
        <button>Call</button>
      </div>
    </form>
  );
}
