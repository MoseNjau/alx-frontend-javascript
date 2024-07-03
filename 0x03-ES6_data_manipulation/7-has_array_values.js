export default function hasValuesFromArray(set, array) {
  const extraElements = array.filter((element) => !set.has(element));
  return extraElements.length === 0;
}
