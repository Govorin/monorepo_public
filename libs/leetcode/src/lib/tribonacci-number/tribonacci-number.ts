export const tribonacci = (n: number, cache?: number[]): number => {
  cache = cache || [0, 1, 1, 2];
  if (cache[n]) return cache[n];
  else cache[n] = tribonacci(n - 1, cache) + tribonacci(n - 2, cache) + tribonacci(n - 3, cache);

  return cache[n];
};
