import React from "react";
import wineData from "../../data/Wine-Data.json";
import { TableData } from "../Table/table";
import { mostFrequent, extractWineClasses } from "../../utilities/utils";

// A component function to find data required to calculate
// Mean, Median and Mode for Gaama of wine and returning
// Table based on data.
export const GaamaTable = () => {
  // extracting required data to show gamma data
  // of various wine classes.
  const { wineClassList, gammaData } = extractWineClasses(wineData);

  //   initializing constants to store mean, median and mode of gamma
  const meanOfGamma = [];
  const medianOfGamma = [];
  const modeOfGamma = [];

  //   calculating all the values and setting the constants
  for (let gamma in gammaData) {
    let mean = 0;
    let summ = 0;
    let tempArrForSorting = [];
    gammaData[gamma].forEach((data) => {
      summ += parseFloat(data);
      tempArrForSorting.push(parseFloat(data));
    });

    let sortedArrForMedianGamma = tempArrForSorting.sort();
    modeOfGamma.push(mostFrequent(sortedArrForMedianGamma).toFixed(3));
    if (sortedArrForMedianGamma.length % 2 === 0) {
      let middle = sortedArrForMedianGamma.length / 2;
      let res =
        (sortedArrForMedianGamma[middle] +
          sortedArrForMedianGamma[middle - 1]) /
        2;
      medianOfGamma.push(res.toFixed(3));
    } else {
      let middle = parseInt(sortedArrForMedianGamma.length / 2);
      let res = sortedArrForMedianGamma[middle];
      medianOfGamma.push(res.toFixed(3));
    }
    mean = (summ / gammaData[gamma].length).toFixed(3);
    meanOfGamma.push(mean);
  }

  // setting row data for mean, median and mode for
  // Gamma of various wine classes
  const rowData = [
    {
      title: "Gamma Mean",
      data: meanOfGamma,
    },
    {
      title: "Gamma Median",
      data: medianOfGamma,
    },
    {
      title: "Gamma Mode",
      data: modeOfGamma,
    },
  ];

  return (
    // Passing required data to show gamma data in Table
    <TableData
      wineClassList={wineClassList}
      rowData={rowData}
      title="Gaama Table"
    />
  );
};
