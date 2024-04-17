// Utils file to find mode of data and extract classes of wine
// and data required for finding mean, meadian and mode of
// Flavanoids and Gamma.

// Helper function to find mode of a sorted array
export function mostFrequent(arr) {
  let n = arr.length;
  let maxcount = 0;
  let element_having_max_freq;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) count++;
    }

    if (count > maxcount) {
      maxcount = count;
      element_having_max_freq = arr[i];
    }
  }

  return element_having_max_freq;
}

// Another helper function to extract wine class
// data for flavanoids(myWineData) and data for
// Gamma calculations.
export function extractWineClasses(wineData) {
  const wineClassList = [];
  const myWineData = {};
  const gammaData = {};

  wineData.forEach((item) => {
    if (!wineClassList.includes(item.Alcohol)) {
      wineClassList.push(item.Alcohol);
      myWineData[`${item.Alcohol}`] = [item.Flavanoids];
      let ash = parseFloat(item.Ash);
      let magnesium = parseFloat(item.Magnesium);
      let hue = parseFloat(item.Hue);
      gammaData[`${item.Alcohol}`] = [(ash * hue) / magnesium];
    } else {
      myWineData[`${item.Alcohol}`].push(item.Flavanoids);
      let ash = parseFloat(item.Ash);
      let magnesium = parseFloat(item.Magnesium);
      let hue = parseFloat(item.Hue);
      gammaData[`${item.Alcohol}`].push((ash * hue) / magnesium);
    }
  });
  return { wineClassList, myWineData, gammaData };
}
