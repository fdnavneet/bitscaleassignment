import GridStatusBar from "./components/GridStatusBar";
import DataGrid from "./components/DataGrid";
import Toolbar from "./components/Toolbar ";
import TopBanner from "./components/TopBanner ";
import Upper from "./components/Upper";

export default function App() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Upper />
      <GridStatusBar />

      <TopBanner />

      <Toolbar />
      <DataGrid />
    </div>
  );
}
