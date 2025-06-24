import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  function red() {
    //This is one way of doing it
    setColor("red");
  }
  function pink() {
    setColor("pink");
  }

  //<button onClick={()=> setColor("green")} This is the other way, we are using an => function as we cannot write setColor("green") directly as it will be called on render, instead we use an arrow function so the page turns green only when onClick is executed
  //We have wrapped the call inside a function

  //<button onClick={setColor('green')}>Click</button>
  // ❌ Wrong — this *calls* setColor immediately

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap justify-center bottom-30 inset-x-0 px-2">
        <div className="fixed flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={red}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={pink}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
