import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
