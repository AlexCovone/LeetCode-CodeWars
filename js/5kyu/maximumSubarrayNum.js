var maxSequence = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  let currentMax = arr[0];
  let globalMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];

    currentMax = Math.max(currentValue, currentMax + currentValue);
    globalMax = Math.max(globalMax, currentMax);
  }

  return Math.max(globalMax, 0);
};
