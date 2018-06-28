import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from 'components/Header';
import Home from 'components/Home';
import CategoryFilter from 'components/CategoryFilter';
import TopicFilter from 'components/TopicFilter';
import Donation from 'components/Donation';
import About from 'components/About';
import Contact from 'components/Contact';
import Footer from 'components/Footer';


class App extends Component {
  render() {

    /* CSS */
    let bg = require('images/seigaiha.png'); //waves bg

    let mainBg = {
      backgroundImage: `url(${bg})`,
    }

    return (
      <div className="app">
        <Header />

       <div className="content" style={mainBg}>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route path={`/category`} component={CategoryFilter} />
           <Route path={`/category/:catName`} component={TopicFilter} />
           <Route path="/donation" component={Donation}/>
           <Route path="/about" component={About}/>
           <Route path="/contact" component={Contact}/>
           <Redirect to="/"/>
        </Switch>
       </div>

       <Footer />
      </div>

    );
  }
}

export default App;
