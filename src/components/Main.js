import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CategoryFilter from 'components/CategoryFilter';
import TopicFilter from 'components/TopicFilter';
import Result from 'components/Result';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="filter-result">

        </div>
      </div>

    );
  }
}

export default Main;
