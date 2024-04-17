import React from "react";
import { Center, Title, useMantineTheme, Table } from "@mantine/core";

// A resuable Table component to show data in tabular form
// as per the data passed.
export const TableData = ({ wineClassList, rowData, title }) => {
  const theme = useMantineTheme();
  return (
    <Center
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "5vh",
        textAlign: "center",
        paddingBottom: "5vh",
      }}
    >
      <Title>{title}</Title>
      <Table
        striped
        highlightOnHover
        style={{
          backgroundColor: theme.colors.myColorPalette[1],
          border: "1px solid black",
          borderCollapse: "collapse",
          padding: "1vh 2.5vw",
          height: "30vh",
          width: "80vw",
          boxShadow: theme.shadows.md,
        }}
      >
        <thead
          style={{
            border: "1px solid black",
            borderCollapse: "collapse",
            backgroundColor: theme.colors.myColorPalette[2],
          }}
        >
          <tr
            style={{
              padding: "2px 12px",
              margin: "2px 12px",
            }}
          >
            <th
              style={{
                border: "1px solid black",
              }}
            >
              Measure
            </th>
            {wineClassList.map((classOfWine) => (
              <th
                style={{
                  border: "1px solid black",
                }}
              >
                Class {classOfWine}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((rData) => (
            <tr
              style={{
                margin: "0 7px",
                // padding: "15px",
                border: "1px solid black",
              }}
            >
              <td
                style={{
                  fontSize: theme.fontSizes.md,
                  fontWeight: "bold",
                  border: "1px solid black",
                  backgroundColor: theme.colors.myColorPalette[2],
                }}
              >
                {rData.title}
              </td>
              {rData.data.map((datum) => (
                <td
                  style={{
                    border: "1px solid black",
                    backgroundColor: theme.colors.myColorPalette[3],
                  }}
                >
                  {datum}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Center>
  );
};
