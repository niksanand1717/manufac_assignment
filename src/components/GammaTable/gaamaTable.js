import React from "react";
import wineData from "../../data/Wine-Data.json";
import { useMantineTheme } from "@mantine/core";
import { TableData } from "../Table/table";
import { mostFrequent, extractWineClasses } from "../../utilities/utils";

export const GaamaTable = () => {
  const { wineClassList, gammaData } = extractWineClasses(wineData);
  //   console.log(wineClassList);
  const meanOfGamma = [];
  const medianOfGamma = [];
  const modeOfGamma = [];

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
    <TableData
      wineClassList={wineClassList}
      rowData={rowData}
      title="Gaama Table"
    />
  );
};
