
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import SinglePost from "./components/SinglePost"
import Post from "./components/Post"
import Project from "./components/Project"
import NavBar from "./components/NavBar"
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/post/:slug">
          <SinglePost />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
