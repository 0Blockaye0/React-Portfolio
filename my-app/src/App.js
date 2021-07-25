import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

// const PageNotFound = () => (
//   <div>404! - <Link to="/">home</Link></div>
// )

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      <Hero />
        <Router basename="/React-Profile">
            <Nav />
            <Switch>
              <Route path="/" exact={true} component={About} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/resume" component={Resume} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="*" exact={true} component={About} />
            </Switch>
        </Router>
        <div className="push"></div>
        </div>
        <Footer />
    </div>
    
  );
}

export default App;
