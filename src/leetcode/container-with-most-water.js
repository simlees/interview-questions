export function containerWithMostWater(height) {
  let maxArea = 0;
  let currentArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    currentArea = Math.min(height[start], height[end]) * (end - start);
    maxArea = Math.max(currentArea, maxArea);

    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }

  return maxArea;
}
