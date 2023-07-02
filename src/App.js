import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../src/Components/Routes/Routes";

function App() {
  return (
    <div className="bgColor">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
