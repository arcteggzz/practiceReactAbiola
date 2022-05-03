import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import AboutUs from "./components/AboutUs"


function App() {
  return (
    <div className="App">
      <NavBar/>   
      <Hero/>
      <Features/>
      <AboutUs/>
    </div>
  );
}

export default App;
//adding darkmode to a page. how easy is it?
//how to host the app on netlify/github pages
//how is an app different from a website done with html and css? is hosting them different?