import GridStatusBar from "./component/GridStatusBar";
import DataGrid from "./component/DataGrid ";
import Toolbar from "./component/Toolbar ";
import TopBanner from "./component/TopBanner ";
import Upper from "./component/Upper";

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
