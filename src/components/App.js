import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from 'components/Header';
import Home from 'components/Home';
import CategoryFilter from 'components/CategoryFilter';
import TopicFilter from 'components/TopicFilter';
import Donation from 'components/Donation';
import Result from 'components/Result';
import About from 'components/About';
import Contact from 'components/Contact';
import Footer from 'components/Footer';


class App extends Component {
  render() {

    /* CSS */
    let bg = require('images/background.png'); //waves bg

    let app = {
      minHeight: '100%',
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'stretch'
    }

    let header = {
      flex: '0 0 70px'
    }

    let mainContent = {
      backgroundImage: `url(${bg})`,
      flex: '1 0 auto',
    }

    let footer = {
      flex: '0 0 50px',
    }

    return (
      <div className="app" style={app}>
        <div className="header" style={header}>
          <Header />
        </div>

       <div className="content" style={mainContent}>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path={`/category`} component={CategoryFilter} />
           <Route exact path={`/category/:catName`} component={TopicFilter} />
           <Route exact path={`/category/:catName/:topName`} component={Result} />
           <Route path="/donation" component={Donation}/>
           <Route path="/about" component={About}/>
           <Route path="/contact" component={Contact}/>
           <Redirect to="/"/>
        </Switch>
       </div>

       <div className="footer" style={footer}>
          <Footer />
       </div>
    </div>

    );
  }
}

export default App;
