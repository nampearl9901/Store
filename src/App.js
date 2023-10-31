//import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HomePage/HomePage"
//import { routes } from "Routes/routes";
function App() {
  return (
    <div className="App">
    {/* <Spinner />
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }, index) => {
          return <Route key={index} path={path} element={component} />;
        })}
      </Routes>
    </BrowserRouter> */}
    <HomePage/>
  </div>

  );
}

export default App;
