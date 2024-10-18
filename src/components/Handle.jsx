import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { useActionData } from "react-router-dom";

function Handle() {
  const [click, setclick] = useState(true);
  const [clicks, setclicks] = useState(true);
  return (
    <>
      <div className="bg-gray-900 pt-10">
        <div className="login_signUp_toggle text-white flex   bg-gray-900  justify-center pt-2  ">
          <p
            className="mr-5 font-bold font-mono border-2  px-6 border-green-500 bg-green-500 rounded hover:text-green-500 hover:bg-gray-900 hover:border-none"
            onClick={() => {
              setclick(!click);
            }}
          >
            LOGIN
          </p>
          <p
            className="font-bold font-mono border-2  px-6 border-red-500 bg-red-500 rounded hover:text-red-500 hover:bg-gray-900 hover:border-none"
            onClick={() => {
              setclick(!click);
            }}
          >
            REGISTER
          </p>
        </div>
        {click ? (
          <Register click={click} clicks={clicks} setclicks={setclicks} />
        ) : (
          <Login click={click} clicks={clicks} setclicks={setclicks} />
        )}
      </div>
    </>
  );
}

export default Handle;
