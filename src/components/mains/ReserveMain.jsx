import AvailibilityForm from "../forms/AvailibilityForm";
import ReserveForm from "../forms/ReserveForm";
import SuccessfulForm from "../forms/SuccessfulForm";

export default function ReserveMain() {
  return (
    <main>
      <section>
        <article>
          <h1>
            Little Lemon
            <br />
            <span>Chicago</span>
          </h1>
          <h3>Reservations</h3>
          <p>
            Reserve a table at your local Little Lemon restaurant. We look
            forward to serving you delicious and healthy food with an exotic
            atmosphere.
          </p>
        </article>
        <img
          src="/images/restaurant.jpg"
          alt="Beautiful wood tables and chairs with contemporary design"
          width={200}
        />
      </section>
      <section>
        <h3>RESERVE YOUR TABLE!</h3>
        <p>Fill out booking information to check availability.</p>
      </section>
      <AvailibilityForm />
      <ReserveForm />
      <SuccessfulForm />
    </main>
  );
}
