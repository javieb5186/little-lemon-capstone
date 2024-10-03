export default function TimeModal() {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    >
      <dialog
        open
        style={{
          position: "absolute",
          top: "0px",
          bottom: "0px",
          left: "0px",
          right: "0px",
          margin: "auto",
          width: "100%",
        }}
      >
        <div className="modal space-y-2 sm-space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl">Available Times</h3>
            <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-secondary">
              Back
            </button>
          </div>
          <p>Below are available times you can select</p>
          <div className="w-full text-center flex flex-col max-w-md mx-auto">
            <div className="flex flex-wrap justify-around gap-2 sm-gap-4 md-gap-8">
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-disabled">
                5:45 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-disabled">
                6:00 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-disabled">
                6:15 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-disabled">
                6:30 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-disabled">
                6:30 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-disabled">
                6:45 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-primary text-white">
                7:00 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-white">
                7:15 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-white">
                7:30 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-disabled">
                7:45 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-disabled">
                8:00 PM
              </button>
              <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg border border-black bg-white">
                8:15 PM
              </button>
            </div>
          </div>
          <p>NOTE: Grayed out buttons are NOT available.</p>
        </div>
      </dialog>
    </div>
  );
}
