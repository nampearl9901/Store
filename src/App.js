
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./Components/spinner/Spinner";
import { routes } from "./Routes/routes";



function App() {
  return (
    <div className="App">
    <Spinner />
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }, index) => {
          return <Route key={index} path={path} element={component} />;
        })}
      </Routes>
    </BrowserRouter>

   
  </div>

  );
}

export default App;
