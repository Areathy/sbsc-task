import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Totalannual from "./components/Totalannual";
import Graph from "./components/Graph";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Totalannual />
      <Graph />
    </React.Fragment>
  );
}

export default App;
