import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="relative px-8 py-4">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
