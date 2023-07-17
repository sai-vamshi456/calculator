import "./styles.css";
import { useState } from "react";
export default function App() {
  const [val, uval] = new useState("");

  function cal(event) {
    const k = event.target.value;
    uval(val + k);
  }
  function clear(event) {
    uval("");
  }
  function evaluate() {
    const k = eval(val);
    uval(k);
  }
  function newinput(event) {
    const k = event.target.value;
    uval(k);
  }
  return (
    <>
      <h1>CALCULATOR</h1>
      <div className="main">
        <div className="col">
          <input type="text" value={val} onChange={newinput} />
        </div>
        <div className="col">
          <button onClick={cal} value="(" className="row">
            {" "}
            (
          </button>
          <button onClick={cal} value=")" className="row">
            )
          </button>
          <button onClick={cal} value="%" className="row">
            %
          </button>
          <button onClick={clear} value="" className="row">
            AC
          </button>
        </div>
        <div className="col">
          <button onClick={cal} value="7" className="row">
            7
          </button>
          <button onClick={cal} value="8" className="row">
            8
          </button>
          <button onClick={cal} value="9" className="row">
            9
          </button>
          <button onClick={cal} value="/" className="row">
            /
          </button>
        </div>
        <div className="col">
          <button onClick={cal} value="4" className="row">
            4
          </button>
          <button onClick={cal} value="5" className="row">
            5
          </button>
          <button onClick={cal} value="6" className="row">
            6
          </button>
          <button onClick={cal} value="*" className="row">
            *
          </button>
        </div>
        <div className="col">
          <button onClick={cal} value="1" className="row">
            1
          </button>
          <button onClick={cal} value="2" className="row">
            2
          </button>
          <button onClick={cal} value="3" className="row">
            3
          </button>
          <button onClick={cal} value="-" className="row">
            -
          </button>
        </div>
        <div className="col">
          <button onClick={cal} value="0" className="row">
            0
          </button>
          <button onClick={cal} value="." className="row">
            .
          </button>
          <button onClick={evaluate} value="=" className="row">
            =
          </button>
          <button onClick={cal} value="+" className="row">
            +
          </button>
        </div>
      </div>
    </>
  );
}
