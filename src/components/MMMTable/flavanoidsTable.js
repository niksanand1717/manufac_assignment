import React from "react";
import wineData from "../../data/Wine-Data.json";
import { TableData } from "../Table/table";
import { mostFrequent, extractWineClasses } from "../../utilities/utils";

const MMMTable = () => {
  const { wineClassList, myWineData } = extractWineClasses(wineData);
  const meanOfFlavanoids = [];
  const medianOfFlavanoids = [];
  const modeOfFlavanoids = [];

  for (let wine in myWineData) {
    let mean = 0;
    let summ = 0;
    let tempArrForSorting = [];
    myWineData[wine].forEach((data) => {
      summ += parseFloat(data);
      tempArrForSorting.push(parseFloat(data));
    });

    let sortedArrForMedianFlavanoids = tempArrForSorting.sort();
    modeOfFlavanoids.push(
      mostFrequent(sortedArrForMedianFlavanoids).toFixed(3)
    );
    if (sortedArrForMedianFlavanoids.length % 2 === 0) {
      let middle = sortedArrForMedianFlavanoids.length / 2;
      let res =
        (sortedArrForMedianFlavanoids[middle] +
          sortedArrForMedianFlavanoids[middle - 1]) /
        2;
      medianOfFlavanoids.push(res.toFixed(3));
    } else {
      let middle = parseInt(sortedArrForMedianFlavanoids.length / 2);
      let res = sortedArrForMedianFlavanoids[middle];
      medianOfFlavanoids.push(res.toFixed(3));
    }
    mean = (summ / myWineData[wine].length).toFixed(3);
    meanOfFlavanoids.push(mean);
  }

  const rowData = [
    {
      title: "Flavanoids Mean",
      data: meanOfFlavanoids,
    },
    {
      title: "Flavanoids Median",
      data: medianOfFlavanoids,
    },
    {
      title: "Flavanoids Mode",
      data: modeOfFlavanoids,
    },
  ];

  return (
    <TableData
      wineClassList={wineClassList}
      rowData={rowData}
      title="Flavanoids Table"
    />
  );
};

export default MMMTable;
