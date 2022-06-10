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
