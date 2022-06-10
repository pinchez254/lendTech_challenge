import React, { FC, useEffect, useReducer, useRef, useState } from "react";
import { isEven, isNumber, isRationalNumber, isWholeNumber } from "../../utils";
import Form from "../form/form";
import { MultiplyButton } from "../multiply/Multiply_Button";
import Pagination from "../pagination/Pagination";

import RandomButton from "../random/Random_Button";
import SquareButton from "../square/Square_Button";
import "./index.css";
import { counterReducer, initialCounterState } from "./state";

interface CounterProps {}

const Counter: FC<CounterProps> = () => {
  const [counter, setCounter] = useState<any>(2);
  const [isEvenCounter, setIsEvenCounter] = useState(false);

  const counterRef = useRef(0);
  const [counterState, dispatch] = useReducer(
    counterReducer,
    initialCounterState
  );

  /* 
  Effect to check if number is even or odd
  from a restful API
  @check should check every time the counter changes
  */
  useEffect(() => {
    //check is even
    async function checkIsEven() {
      if (isNumber(counter)) {
        const isValueEven = await isEven(counter);
        setIsEvenCounter(isValueEven);
      }
    }
    checkIsEven();
  }, [counter]);

  /*
  update Globastate whenever counter changes
  this is for keeping track of counter values for pagination
  */

  useEffect(() => {
    counterRef.current >= 5 &&
      dispatch({ type: "UPDATE_COUNTER", payload: counter });
  }, [counter]);

  return (
    <div>
      <div className="container">
        {isNumber(counter) && isWholeNumber(counter) && (
          <div className="green__wrapper">{counter}</div>
        )}
        {isNumber(counter) && isRationalNumber(counter) && (
          <div className="purple__wrapper">{counter}</div>
        )}
        {!isNumber(counter) && <div className="red__wrapper">{counter}</div>}

        {isNumber(counter) && isWholeNumber(counter) && (
          <h2 className="green__text">{isEvenCounter ? "Even" : "Odd"}</h2>
        )}
        {isNumber(counter) && isRationalNumber(counter) && (
          <h2 className="purple__text">{isEvenCounter ? "Even" : "Odd"}</h2>
        )}
        {!isNumber(counter) && <h2 className="red__text">{"Not a number"}</h2>}

        {!isNumber(counter) && (
          <Form setCounter={setCounter} counterRef={counterRef} />
        )}

        {isNumber(counter) && (
          <div className="btn__container">
            <MultiplyButton
              multiply={setCounter}
              counter={counter}
              counterRef={counterRef}
            />
            <SquareButton
              square={setCounter}
              counter={counter}
              counterRef={counterRef}
            />
          </div>
        )}
        {isNumber(counter) && (
          <div>
            <RandomButton
              random={setCounter}
              counter={counter}
              counterRef={counterRef}
            />
          </div>
        )}
      </div>
      {counterState?.count?.length >= 1 && (
        <Pagination
          counterState={counterState?.count}
          counterRef={counterRef}
        />
      )}
    </div>
  );
};

export default Counter;
