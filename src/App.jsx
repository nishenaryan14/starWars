import "./style.scss";
import Home from "./pages/Home";
import PlanetInfo from "./pages/PlanetInfo";
import LoadingBar from "react-top-loading-bar";
import { PageProvider } from "./context/PageContext";
import { ResidentProvider } from "./context/ResidentContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoading } from "./context/LoadingContext";
import { PlanetsProvider } from "./context/PlanetContext";

function App() {
  const { loading } = useLoading();
  return (
    <PlanetsProvider>
      <PageProvider>
        <ResidentProvider>
          <div className="App">
            <LoadingBar
              color="#f11946"
              height={4}
              progress={loading ? 100 : 0}
            />

            <BrowserRouter>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/planetInfo" element={<PlanetInfo />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ResidentProvider>
      </PageProvider>
    </PlanetsProvider>
  );
}

export default App;
