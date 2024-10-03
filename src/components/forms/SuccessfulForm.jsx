export default function SuccessfulForm() {
  return (
    <div className="text-center space-y-8">
      <h3>YOUR TABLE IS RESERVED!</h3>
      <p>Success! A confirmation letter will be sent to your email address.</p>
      <p>
        You may now return to home or browse our menu in anticipation to your
        arrival.
      </p>
      <div className="space-x-4">
        <button className="h-12 rounded-2xl px-8 text-lg border border-black bg-primary text-white">
          Back to Home
        </button>
        <button className="h-12 rounded-2xl px-8 text-lg border border-black bg-secondary">
          Menu
        </button>
      </div>
    </div>
  );
}
