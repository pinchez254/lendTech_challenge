import React, { FC } from "react";

import "./form.css";
interface FormProps {
  setCounter: (x: any) => void;
  counterRef: any;
}

const Form: FC<FormProps> = ({ setCounter, counterRef }) => {
  const [value, setValue] = React.useState<any>("");
  const handleInput = () => {
    console.log("---------------------------------------");
    console.log("input ", value);

    //check if if the input is a number
    if (isNaN(value)) {
      alert("Please enter a number");
    } else {
      //set the counter to the input value
      setCounter(parseInt(value));
      counterRef.current += 1;
    }
  };

  //form with one input and one button
  return (
    <div className="container">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        type="text"
        placeholder="Enter a number"
      />

      <button onClick={handleInput} className="submit__button">
        Submit
      </button>
    </div>
  );
};

export default Form;
