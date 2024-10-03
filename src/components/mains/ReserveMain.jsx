import AvailibilityForm from "../forms/AvailibilityForm";
import ReserveForm from "../forms/ReserveForm";
import SuccessfulForm from "../forms/SuccessfulForm";

export default function ReserveMain() {
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
        {/* <AvailibilityForm /> */}
        <ReserveForm />
        {/* <SuccessfulForm /> */}
      </section>
    </main>
  );
}
