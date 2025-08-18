import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import Layanan from "./components/layanan";
import Keunggulan from "./components/keunggulan";
import Client from "./components/client"

function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <main>
              <Banner />
              <Layanan />
              <Keunggulan/>
              
              <Client />
      </main>
    </div>
  );
}

export default App;
