import { useEffect, useState } from "react";

import "./App.css";
import pubilcRoutes from "./router/routes/publicRoute";
import Router from "./router/Router";
import { getRoutes } from "./router/routes";

function App() {
  const [allRoutes, setRoutes] = useState([...pubilcRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setRoutes([...allRoutes, routes]);
  }, [allRoutes]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
