import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const Navigation = () => {
  return (
    <nav>
      {/* Using Link to navigate to the Home page */}
      <Link to="/">Home</Link>
      
      {/* Using NavLink to navigate to the About page with added styling for the active link */}
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        {/* Include the Navigation component */}
        <Navigation />

        {/* Define routes for the Home and About components */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
