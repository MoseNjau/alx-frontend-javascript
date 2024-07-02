export default function hasValuesFromArray(array, set) {
    const hasAllvalues = array.filter(element => !set.has(element));
    return hasAllvalues === 0;
    // let hasAllValues = true;

    // array.forEach(element => {
    //     if (!set.has(element)) {
    //         hasAllValues = false;
    //     }
    // })
    // return hasAllValues;
}