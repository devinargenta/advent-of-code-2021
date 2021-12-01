import { readFileSync } from "fs";
const sum = (a: number, b: number): number => a + b;
const depths = readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n")
  .map(Number);

const depthComparisonFilter = (depth: number, index: number, array: number[]) =>
  depth > array[index - 1];

const previousDepths: number[] = depths.filter(depthComparisonFilter);

const slidingWindowDepths = depths
  .reduce((c: number[], _, i, a) => {
    return c.concat(a.slice(i, i + 3).reduce(sum));
  }, [])
  .filter(depthComparisonFilter);

console.log(`${previousDepths.length}`);
console.log(`${slidingWindowDepths.length}`);
