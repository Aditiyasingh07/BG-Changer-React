import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed bottom-16 inset-x-0 px-16">
        <div className="flex flex-wrap rounded-3xl justify-around gap-2 w-full px-4">
          <button
            onClick={() => setColor("red")}
            className="outline-none h-10 px-4 text-white py-2 rounded-3xl"
            style={{ backgroundColor: "red" }}
          ></button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 text-white py-2 rounded-3xl"
            style={{ backgroundColor: "green" }}
          ></button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 text-white py-2 rounded-3xl"
            style={{ backgroundColor: "pink" }}
          ></button>
          <button
            onClick={() => setColor("hotpink")}
            className="outline-none px-4 text-white py-2 rounded-3xl"
            style={{ backgroundColor: "hotpink" }}
          ></button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 text-white py-2 rounded-3xl"
            style={{ backgroundColor: "blue" }}
          ></button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 text-white py-2 rounded-3xl"
            style={{ backgroundColor: "black" }}
          ></button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 text-white py-2 rounded-3xl"
            style={{ backgroundColor: "yellow" }}
          ></button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 text-white py-2 rounded-3xl"
            style={{ backgroundColor: "gray" }}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
