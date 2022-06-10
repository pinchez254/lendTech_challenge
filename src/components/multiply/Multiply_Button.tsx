import React, { FC } from "react";

interface MultiplyButtonProps {
  multiply: (x: any) => void;
  counter: number;
  counterRef: any;
}

export const MultiplyButton: FC<MultiplyButtonProps> = ({
  multiply,
  counter,
  counterRef,
}) => {
  // exponention function 2*2 , 2*2*2, 2*2*2*2, etc.
  const handleMuliply = () => {
    multiply(counter * 2);
    counterRef.current += 1;
  };

  return (
    <button className="control__btn" onClick={handleMuliply}>
      Multiply
    </button>
  );
};
