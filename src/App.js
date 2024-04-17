import "./App.css";
import { useMantineTheme } from "@mantine/core";
import { GaamaTable } from "./components/GammaTable/gaamaTable";
import FlavanoidsTable from "./components/flavanoidsTable/flavanoidsTable";
function App() {
  // using useMantimeTheme hook to implement theme
  // on app component
  const theme = useMantineTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.myColorPalette[0],
      }}
    >
      {/* importing Flavanoids table to show flavanoids data */}
      <FlavanoidsTable />
      {/* importing Gaama table to show gamma data */}
      <GaamaTable />
    </div>
  );
}

export default App;
