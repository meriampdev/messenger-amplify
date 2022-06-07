export const arrayHasDuplicates = (arr) => {
  return new Set(arr).size !== arr.length
}

export const arrayIsSame = (a, b) => {
  a = Array.isArray(a) ? a : [];
  b = Array.isArray(b) ? b : [];
  return a.length === b.length && a.every(el => b.includes(el));
}