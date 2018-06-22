import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from 'components/Header';
import Main from 'components/Main';
import CategoryFilter from 'components/CategoryFilter';
import TopicFilter from 'components/TopicFilter';
import Result from 'components/Result';
import Donation from 'components/Donation';
import About from 'components/About';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Home from 'components/Home';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

       <div className="content">
        <Switch>
           <Route exact path="/" component={CategoryFilter}>

           </Route>
           <Route path={`/:catName`} component={TopicFilter} />
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
