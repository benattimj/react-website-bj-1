import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop /> 
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          
          

        </Switch>
<Contact></Contact>
        <Footer/>
      </Router>

    </>
  );
}

export default App;