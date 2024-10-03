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
            <h3 className="font-bold text-xl">Select a Date</h3>
            <button className="h-12 rounded-2xl px-8 sm-px-12 text-lg outline outline-black bg-secondary">
              Back
            </button>
          </div>
          <h4 className="text-xl text-center">October 2024</h4>
          <div className="text-center sm-max-w-md mx-auto">
            <div className="grid grid-cols-7">
              <div className="p-4 bg-primary text-white outline outline-solid outline-black">
                Sun
              </div>
              <div className="p-4 bg-primary text-white outline outline-solid outline-black">
                Mon
              </div>
              <div className="p-4 bg-primary text-white outline outline-solid outline-black">
                Tue
              </div>
              <div className="p-4 bg-primary text-white outline outline-solid outline-black">
                Wed
              </div>
              <div className="p-4 bg-primary text-white outline outline-solid outline-black">
                Thu
              </div>
              <div className="p-4 bg-primary text-white outline outline-solid outline-black">
                Fri
              </div>
              <div className="p-4 bg-primary text-white outline outline-solid outline-black">
                Sat
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="p-4 bg-disabled outline outline-solid outline-black"></div>
              <div className="p-4 bg-disabled outline outline-solid outline-black"></div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                1
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                2
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                3
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                4
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                5
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                6
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                7
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                8
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                9
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                10
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                11
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                12
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                13
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                14
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                15
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                16
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                17
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                18
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                19
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                20
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                21
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                22
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                23
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                24
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black">
                25
              </div>
              <div className="p-4 bg-primary text-white outline outline-solid outline-black">
                26
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="p-4 bg-white outline outline-solid outline-black">
                27
              </div>
              <div className="p-4 bg-white outline outline-solid outline-black">
                28
              </div>
              <div className="p-4 bg-white outline outline-solid outline-black">
                29
              </div>
              <div className="p-4 bg-white outline outline-solid outline-black">
                30
              </div>
              <div className="p-4 bg-white outline outline-solid outline-black">
                31
              </div>
              <div className="p-4 bg-disabled outline outline-solid outline-black"></div>
              <div className="p-4 bg-disabled outline outline-solid outline-black"></div>
            </div>
          </div>
          <p>NOTE: Grayed out buttons are NOT available.</p>
        </div>
      </dialog>
    </div>
  );
}
