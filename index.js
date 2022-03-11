function flatten(arr = [], result = []) {
  for (const ele of arr) {
    if (Array.isArray(ele)) {
      flatten(ele, result);
    } else {
      result.push(ele);
    }
  }
  return result;
}

module.exports = { flatten };
