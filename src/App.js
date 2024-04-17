import "./App.css";
import MMMTable from "./components/MMMTable/flavanoidsTable";
import { useMantineTheme } from "@mantine/core";
import MyTab from "./components/tab";
import { GaamaTable } from "./components/GammaTable/gaamaTable";
function App() {
  const theme = useMantineTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.myColorPalette[0],
      }}
    >
      <MMMTable />
      <GaamaTable />
    </div>
  );
}

export default App;
