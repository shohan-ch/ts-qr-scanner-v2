import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import DataContextProvider from "./contextApi/DataContext";

function App() {
  return (
    <div className="relative px-8 py-4">
      <DataContextProvider>
        <RouterProvider router={routes} />
      </DataContextProvider>
    </div>
  );
}

export default App;
