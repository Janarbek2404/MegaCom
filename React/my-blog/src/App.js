import React from "react";
import Header from "./components/Header";
import Post1 from "./components/Post1";
import Post2 from "./components/Post2";
import About from "./components/About";
import Popular from "./components/Popular";
import Tags from "./components/Tags";
const App=()=>{
    return(
      <div className="w3-content" style={{maxWidth: '1400px'}}>
        <Header/>
        <div className="w3-row">
          <div className="w3-col l8 s12">
            <Post1/>
            <Post2/>
          </div>
          <div className="w3-col l4">
            <About/>
            <Popular/>
            <Tags/>
          </div>
        </div>
      </div>
    );
  }
export default App;