/**
 * Return the indeces of two numbers in an array that add up to a specified target.
 */
export function twoSum(values, target) {
  let prevValues = {};
  for (let i = 0; i < values.length; i++) {
    if (!isNaN(prevValues[target - values[i]])) {
      return [prevValues[target - values[i]], i];
    }
    prevValues[values[i]] = i;
  }
}
