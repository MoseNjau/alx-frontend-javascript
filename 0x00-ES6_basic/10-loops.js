export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [];
  for (const el of array) {
    arrayCopy.push(appendString + el);
  }

  return arrayCopy;
}
