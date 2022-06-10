import React, { FC } from "react";
import { getRandomValueFromFile } from "../../utils";

interface Props {
  random: (x: any) => void;
  counter: number;
  counterRef: any;
}
const RandomButton: FC<Props> = ({ random, counter, counterRef }) => {
  const generateRandom = async () => {
    random(
      await getRandomValueFromFile(process.env.PUBLIC_URL + "/cereal.csv")
    );
  };

  return (
    <button onClick={generateRandom} className="control__btn">
      Generate Random Number
    </button>
  );
};

export default RandomButton;
