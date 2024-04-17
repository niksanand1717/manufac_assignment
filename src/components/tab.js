import React from "react";
import { Tabs } from "@mantine/core";

function MyTab() {
  return (
    <div>
      <Tabs>
        <Tabs.Tab label="MMMTable">Cat says</Tabs.Tab>
        <Tabs.Tab label="Gaama Table">Meow Meow</Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default MyTab;
