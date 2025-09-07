"use client"

export default function GlobalError () {
    return (
      <html>
        <body>
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">something error</h1>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              refresh
            </button>
          </div>
        </body>
      </html>
    );
}