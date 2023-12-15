
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from './pages/main/Main';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Project from './pages/project/Project';
import Service from './pages/service/Service';
import Services from './pages/services/Services';
import './App.css';



function App() {
  return (
    <div className="App">
    <>
    <Header />
    <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Main />}
          />
          <Route
            path="/about"
            element={<About />}
          />
      
          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/project"
            element={<Project />}
          />

          <Route
            path="/service"
            element={<Service />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
        </Router>
        </>

    </div>
  );
}

export default App;
