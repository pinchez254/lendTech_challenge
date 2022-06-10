//check whole numbers
export const isWholeNumber = (num: number) => {
  return num % 1 === 0;
};

//check rational numbers
export const isRationalNumber = (num: number) => {
  return num % 1 !== 0;
};

//check if value is a number or Infinity
export const isNumber = (num: any) => {
  return !isNaN(num);
};

//check if number is even from api https://api.isevenapi.xyz/api/iseven/{number}
export const isEven = async (num: number) => {
  //remove decimals
  const number = num.toFixed(0);
  const response = await fetch(
    `https://api.isevenapi.xyz/api/iseven/${number}`
  );

  const data = await response.json();

  return data.iseven;
};

//read csv and pick a random value from it
export const getRandomValueFromFile = async (csv: string) => {
  const response = await fetch(csv);
  const data = await response.text();
  const lines = data.split("\n");
  const randomLine = lines[Math.floor(Math.random() * lines.length)];

  //get random value from line
  const randomValue =
    randomLine.split(",")[Math.floor(Math.random() * randomLine.length)];

  return randomValue;
};
