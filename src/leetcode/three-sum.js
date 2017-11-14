export function threeSum(nums) {
  let pairs = {};
  let uniqueTriplets = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[j] + nums[i];
      pairs[sum] = pairs[sum] || [];
      pairs[sum].push([
        {
          index: i,
          value: nums[i]
        },
        {
          index: j,
          value: nums[j]
        }
      ]);
    }
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (pairs[0 - nums[i]]) {
      pairs[0 - nums[i]].filter(p => !p.find(n => n.index === i)).map(p => {
        let triplet = p.slice();
        triplet.push({
          index: i,
          value: nums[i]
        });
        uniqueTriplets.push(triplet);
      });
    }
  }

  return uniqueTriplets.map(t => {
    return t.map(n => n.value);
  });
};
