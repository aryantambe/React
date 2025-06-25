import { useState, useCallback } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [sCharAllowed, setCharAllowed] = useState(false); //special characters allowed or not
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (sCharAllowed) str += "!@#$%^&*+_-";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, sCharAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-xl p-6 my-10 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center mb-4 text-xl font-semibold">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 bg-white text-black placeholder:text-gray-400"
            placeholder="Password"
            readOnly
          />
          <button onClick={passwordGenerator} className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">
            Generate
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev); //flips between true and false on triggering the checkbox
              }}
            />
            <label htmlFor="numberInput" className="text-white">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={sCharAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev); //flips between true and false on triggering the checkbox
              }}
            />
            <label htmlFor="charInput" className="text-white">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
