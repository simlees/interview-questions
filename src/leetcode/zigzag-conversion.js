export function zigzagConversion(s, numRows) {
  let rows = [];
  for (let n = 0; n < s.length; n++) {
    let zigzagIndex = n % (numRows * 2 - 2) || 0;
    let rowIndex = zigzagIndex > numRows - 1 ? (numRows * 2 - 2) - zigzagIndex : zigzagIndex;
    rows[rowIndex] = rows[rowIndex] ? rows[rowIndex] + s[n] : s[n];
  }
  return rows.join('');
}
