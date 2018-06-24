import React, { Component } from 'react';
import { db } from './Db';
import CategoryButton from 'components/CategoryButton';
import { Link } from 'react-router-dom'; //first npm install react-render-dom
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TopicFilter from 'components/TopicFilter';
import StepTitle from 'components/StepTitle';

//This component displays a list of categories
class CategoryFilter extends Component{
  constructor(props){
      super(props);
      this.state = {
          lastState: false,
          // lastStated : this.lastState ? false : true,
          // isSelected: this.lastStated,
          isSelected: false,
          category: "",

        }
      this.select = this.select.bind(this);

      console.log("cat state", this.state.isSelected);

  } //above is default event handler found on React doc

  select(e, cat) {
    console.log(`The category button was clicked.`);
    // console.log('this is:', this);
     e.preventDefault();
    // this.setState({
    //   // isSelected: true ? true : false,
    //   isSelected: true,
    //   category: cat,
    //   lastState: this.state.isSelected
    // });
  //   this.setState((prevState) => {
  //     console.log('prevState', prevState);
  //   return { isSelected: prevState.isSelected}
  // })
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));
    // this.category = cat;


    console.log('cat new state', this.state.isSelected);
    // console.log('this.category', this.category);
    // this.lastState =this.state.isSelected;
  }
  render(){
    let divStyle = {
      height: '100%',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      border: '1px solid black',
      width: 768,
      padding: '0 150px',
      boxSizing: 'border-box'
    };
    let outerDiv = {
      margin: 'auto',
      width: '1024',
      height: '70vh',
      display: 'flex',
      justifyContent: 'center'
    };
    let catStyle = {
      flex: '0 0 33.33%'
    }
    let categoryList = [];

    for (let category in db){
      categoryList.push(
        <div key={`${category}-button`} style={catStyle}>
          <CategoryButton key={category} category={category} select={this.select} />
        </div>
      );
      // console.log("cat is selected", this.state);
      //   console.log("cat changed", this.state.category);
    }

    return (
      <div key="category-filter" style = {outerDiv}>
        {this.state.isSelected ?
          <Route path={`/:catName`} component={TopicFilter} />
        :
          <div className="category-list" style={divStyle}>
            <StepTitle />
            {categoryList}
          </div>
        }
      </div>
    )
  }
}

export default CategoryFilter;
