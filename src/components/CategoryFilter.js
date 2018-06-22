import React, { Component } from 'react';
import { db } from './Db';
import CategoryButton from 'components/CategoryButton';
import { Link } from 'react-router-dom'; //first npm install react-render-dom
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TopicFilter from 'components/TopicFilter';



//This component displays a list of categories
class CategoryFilter extends Component{
  render(){
    let categoryList = [];

    for (let category in db){
      categoryList.push(
        <div key={`${category}-button`}>
          <CategoryButton key={category} category={category} select={this.select}/>
        </div>
      );
      // console.log("cat is selected", this.state);
      //   console.log("cat changed", this.state.category);
    }

    return (
      <div key="category-filter">
        {this.state.isSelected ?
          <Route path={`/:catName`} component={TopicFilter} />
        :
          <div className="category-list">
            {categoryList}
          </div>
        }
      </div>
    )
  }
}

export default CategoryFilter;
