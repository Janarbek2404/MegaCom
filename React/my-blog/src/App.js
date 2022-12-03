import React from "react";
import Header from "./components/Header";
import Post1 from "./components/Post1";
import Post2 from "./components/Post2";
import About from "./components/About";
import Popular from "./components/Popular";
import Tags from "./components/Tags";
import Footer from "./components/Footer";
const App=()=>{
  return(
    <>
      <div className="w3-content" style={{maxWidth: '1400px'}}>
        <Header/>
        <div className="w3-row">
          <div className="w3-col l8 s12">
            <Post1 namePost="Name Post" titlePost="Title Post," textPost="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." 
                imgPost="https://www.w3schools.com/w3images/woods.jpg"/>
            <Post1 namePost="BLOG ENTRY" titlePost="Title description," textPost="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." 
                imgPost="https://www.w3schools.com/w3images/bridge.jpg"/>
            <Post1 namePost="Name Post" titlePost="Title Post," textPost="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." 
                imgPost="https://www.w3schools.com/w3images/woods.jpg"/>
            <Post2/>
          </div>
          <div className="w3-col l4">
            <About/>
            <Popular/>
            <Tags/>
          </div>
        </div>
      </div>
      <Footer/>
    </>  
  );
}
export default App;