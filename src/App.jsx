import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"

function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <main>
              <Banner />
      </main>
    </div>
  );
}

export default App;
