export const arrayHasDuplicates = (arr) => {
  return new Set(arr).size !== arr.length
}