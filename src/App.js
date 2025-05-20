// ** User Components
import DetectFromImage from "./components/DetectFromImage";
import TopNav from "./components/TopNav";
import DetectFromFile from "./components/DetectFromFile";

// ** React Router Imports
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// ** Style Imports
import "./App.css";

// ** Main App Component
function App() {
  // ** Main App component with Routes
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopNav />
                <Outlet />
              </>
            }
          >
            <Route index element={<DetectFromImage />} />
            <Route path="/file">
              <Route
                index
                element={
                  <DetectFromFile/>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
