// const newPieces = [...pieces];
// newPieces[row] = [...newPieces[row]];
// newPieces[row][column] = piece;

export function updateArray<T>(arr: T[], i: number, newValue: T): T[] {
  const result = [...arr];
  result[i] = newValue;
  return result;
}

export function updateNestedArray<T>(
  arr: T[][],
  x: number,
  y: number,
  newValue: T
): T[][] {
  const result = updateArray(arr, y, updateArray(arr[y], x, newValue));
  return result;
}
