import React, { FC } from "react";
interface Props {
  square: (x: number) => void;
  counter: number;
  counterRef: any;
}
const SquareButton: FC<Props> = ({ square, counter, counterRef }) => {
  //must square the value (sqrt(2^3) for example)
  const handleSquare = () => {
    square(Math.sqrt(counter));
    counterRef.current += 1;
  };

  return (
    <button onClick={handleSquare} className="control__btn">
      Square
    </button>
  );
};

export default SquareButton;
