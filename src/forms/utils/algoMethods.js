export const makeFirstLetterCapital = (input) => {
  if (typeof input !== "string" || input.length === 0) {
    return input;
  }
  input = input[0].toUpperCase() + input.slice(1).toLowerCase();
  return input;
};




